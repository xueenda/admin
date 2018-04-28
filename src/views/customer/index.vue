<template>
  <div class="page">
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="age" label="年龄">
      </el-table-column>
      <el-table-column prop="gender" label="性别">
      </el-table-column>
      <el-table-column prop="phone" label="电话">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '张婧',
        age: 33,
        gender: '女',
        phone: '13493105147',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: '刘正',
        age: 38,
        gender: '男',
        phone: '13067853124',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: '赵丽雯',
        age: 23,
        gender: '女',
        phone: '15736963840',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: '李强',
        age: 30,
        gender: '男',
        phone: '15693883401',
        address: 'No. 189, Grove St, Los Angeles'
      }]
    }
  }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>

