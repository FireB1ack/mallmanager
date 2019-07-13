<template>
  <el-container class="container">
    <el-header class="container-header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="/static/logo.png" alt="无法显示">
          </div>
        </el-col>
        <el-col :span="18" class="middle">
          <div class="grid-content bg-purple">
            <h2>后台电商管理系统</h2>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <a href="#" class="loginout">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="container-aside">Aside</el-aside>
      <el-main calss="container-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>
  .container {
    height: 100%;
  }

  .container-header {
    height: 100%;
    background-color: #B3C0D1;
  }

  .container-header .middle {
    line-height: 25px;
    text-align: center;
  }

  .loginout {
    text-decoration: none;
    line-height: 60px;
  }

  .container-aside {
    background-color: #D3DCE6;
  }

  .container-main {
    background-color: #E9EEF3;
  }

</style>
