<template>
  <div class="page">
    <div style="text-align:right;margin-bottom:20px;">
    <button type="button" class="el-button filter-item el-button--primary el-button--medium">
      <span>新建规则</span>
    </button>
    </div>
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column prop="date" label="创建日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="物品名称" width="180">
      </el-table-column>
      <el-table-column prop="points" label="所需积分">
      </el-table-column>
      <el-table-column prop="quantity" label="数量">
      </el-table-column>
      <el-table-column prop="amount" label="成本">
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
        name: '书包',
        points: 1000,
        quantity: 100,
        amount: 30
      }, {
        date: '2016-05-02',
        name: '茶杯',
        points: 100,
        quantity: 1000,
        amount: 100
      }, {
        date: '2016-05-04',
        name: '礼品卡',
        points: 20000,
        quantity: 50,
        amount: 100
      }, {
        date: '2016-05-01',
        name: '相机',
        points: 50000,
        quantity: 20,
        amount: 5
      }]
    }
  }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>

