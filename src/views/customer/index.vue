<template>
  <div class="page">
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column prop="date" label="最近消费日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="points" width="100" label="积分">
      </el-table-column>
      <el-table-column prop="count" width="100" label="消费次数">
      </el-table-column>
      <el-table-column prop="age" width="100" label="年龄">
      </el-table-column>
      <el-table-column prop="gender" width="100" label="性别">
      </el-table-column>
      <el-table-column prop="phone" width="200" label="电话">
      </el-table-column>
      <el-table-column prop="address" label="地址">
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
        date: '2016-05-03',
        name: '张婧',
        points: 1000,
        count: 5,
        age: 33,
        gender: '女',
        phone: '13493105147',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '刘正',
        points: 1050,
        count: 10,
        age: 38,
        gender: '男',
        phone: '13067853124',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '赵丽雯',
        points: 2100,
        count: 7,
        age: 23,
        gender: '女',
        phone: '15736963840',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '李强',
        points: 400,
        count: 2,
        age: 30,
        gender: '男',
        phone: '15693883401',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>

