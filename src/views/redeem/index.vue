<template>
  <div class='page'>
    <el-table :data='tableData' border stripe style='width: 100%'>
      <el-table-column prop='date' label='日期' width='180'>
      </el-table-column>
      <el-table-column prop='name' label='用户' width='180'>
      </el-table-column>
      <el-table-column prop='branch' label='门店'>
      </el-table-column>
      <el-table-column prop='product' label='商品'>
      </el-table-column>
      <el-table-column prop='amount' label='消耗积分'>
      </el-table-column>
    </el-table>
    <el-pagination small layout="prev, pager, next" :total="50">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2018-05-03',
        name: '张晓晨',
        branch: '中山路店',
        product: '书包',
        amount: 200
      }, {
        date: '2018-05-02',
        name: '周沫',
        branch: '西单店',
        product: '衬衫',
        amount: 300
      }, {
        date: '2018-05-04',
        name: '李生',
        branch: '国贸店',
        product: '牛奶',
        amount: 50
      }, {
        date: '2018-05-01',
        name: '赵倩',
        branch: '徐家汇店',
        product: '橄榄油',
        amount: 100
      }, {
        date: '2018-05-03',
        name: '李建国',
        branch: '网店',
        product: '书包',
        amount: 200
      }, {
        date: '2018-05-02',
        name: '刘伟',
        branch: '网点',
        product: '衬衫',
        amount: 300
      }, {
        date: '2018-05-04',
        name: '张杰',
        branch: '学院路店',
        product: '牛奶',
        amount: 50
      }, {
        date: '2018-05-01',
        name: '赵薇',
        branch: '西直门店',
        product: '橄榄油',
        amount: 100
      }]
    }
  }
}

</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.chart-container {
  position: relative;
  padding: 20px;
  width: 100%;
  height: 85vh;
}

.text-small {
  color: #606266;
  font-size: 13px;
}

</style>

