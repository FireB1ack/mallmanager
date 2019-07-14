<template>
  <el-card class="box-card">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="margin-top: 15px;margin-bottom: 15px">
      <el-col :span="24">
        <el-input placeholder="请输入内容" v-model="searchVal" class="search-input">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary">添加用户</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        label="#"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="type"
        label="用户状态">
      </el-table-column>
      <el-table-column
        label="操作">
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        searchVal: '',
        pagenum: 1,
        pagesize: 10,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    created() {
      this.getUserList()
    },
    methods: {
      async getUserList() {
        //设置token
        this.$axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");

        //获取用户列表
        const res = await this.$axios.get(`users?query=${this.searchVal}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`);
        console.log(res);
        const {data: {pagenum, total, users}, meta: {msg, status}} = res.data;
        this.tableData = users
      }
    }
  }
</script>

<style scoped>
  .box-card {
    height: 100%;
    width: 100%;
  }

  .search-input {
    width: 30%;
  }

</style>
