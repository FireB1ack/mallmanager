<template>
  <el-card class="box-card">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="margin-top: 15px;margin-bottom: 15px">
      <el-col :span="24">
        <el-input clearable @clear="handleClearVal" placeholder="请输入内容" v-model="searchVal" class="search-input">
          <el-button slot="append" @click.prevent="handleSearch" icon="el-icon-search"></el-button>
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
        label="创建时间">
        <template slot-scope="scope">
          {{scope.row.create_time | dateFormate('YYYY-MM-DD')}}
        </template>
      </el-table-column>
      <el-table-column
        label="用户状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            circle
            plain>
          </el-button>
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            circle
            plain>
          </el-button>
          <el-button
            size="mini"
            type="success"
            icon="el-icon-check"
            circle
            plain>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        searchVal: '',
        pagenum: 1,
        pagesize: 2,
        total: '',
        tableData: []
      }
    },
    created() {
      this.getUserList()
    },
    methods: {
      handleSearch() {
        this.getUserList()
      },
      handleCurrentChange(val) {
        this.pagenum = val;
        this.getUserList()
      },
      handleClearVal() {
        this.getUserList()
      },
      handleSizeChange(val) {
        this.pagesize = val;
        this.pagenum = 1;
        this.getUserList()
      },
      async getUserList() {
        //设置token
        this.$axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");

        //获取用户列表
        const res = await this.$axios.get(`users?query=${this.searchVal}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`);
        console.log(res);
        const {data: {total, users}, meta: {msg, status}} = res.data;
        if (status === 200) {
          this.tableData = users;
          this.total = total;
          this.$message.success(msg)
        } else {
          this.$message.warning(msg)
        }
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
