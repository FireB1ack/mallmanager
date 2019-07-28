<template>
  <el-card>
    <my-bread label1="用户管理" label2="权限管理"></my-bread>
    <el-table
      :data="tableData"
      border
      height="650px"
      style="width: 100%;margin-top: 20px">
      <el-table-column
        prop="authName"
        label="权限名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="path"
        label="路径"
        width="180">
      </el-table-column>
      <el-table-column
        label="层级">
        <template slot-scope="scope">
          <span v-if="scope.row.level=='0'">一级</span>
          <span v-if="scope.row.level=='1'">二级</span>
          <span v-if="scope.row.level=='2'">三级</span>
        </template>
      </el-table-column>
    </el-table>

  </el-card>
</template>

<script>
  export default {
    name: "right",
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
      this.getRightList();
    },
    methods: {
      async getRightList() {
        const res = await this.$axios.get('rights/list');
        this.tableData = res.data.data;
      }
    }
  }
</script>

<style scoped>

</style>
