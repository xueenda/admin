import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/** note: submenu only apppear when children.length>=1
*   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [{
      path: 'home',
      component: _import('home/index'),
      name: 'home',
      meta: { title: 'home', icon: 'dashboard', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/points',
    component: Layout,
    children: [{
      path: 'index',
      component: _import('points/index'),
      name: 'points',
      meta: { title: 'points', icon: 'icon', noCache: true }
    }]
  },
  {
    path: '/transaction',
    component: Layout,
    children: [{
      path: 'index',
      component: _import('transaction/index'),
      name: 'transaction',
      meta: { title: 'transaction', icon: 'table', noCache: true }
    }]
  },
  {
    path: '/redeem',
    component: Layout,
    children: [{
      path: 'index',
      component: _import('redeem/index'),
      name: 'redeem',
      meta: { title: 'redeem', icon: 'example', noCache: true }
    }]
  },
  {
    path: '/customer',
    component: Layout,
    redirect: 'noredirect',
    name: 'customer',
    meta: {
      title: 'customer',
      icon: 'component'
    },
    children: [{
      path: 'index',
      component: _import('customer/index'),
      name: 'customer',
      meta: {
        title: 'customer',
        icon: 'people'
      }
    }]
  },
  {
    path: '/coupon',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: _import('coupon/index'),
      name: 'coupon',
      meta: { title: 'coupon', icon: 'theme' }
    }]
  },
  // {
  //   path: '/settings',
  //   component: Layout,
  //   children: [{
  //     path: 'index',
  //     component: _import('settings/index'),
  //     name: 'settings',
  //     meta: { title: 'settings', icon: 'international' }
  //   }]
  // },
  { path: '*', redirect: '/404', hidden: true }
]
