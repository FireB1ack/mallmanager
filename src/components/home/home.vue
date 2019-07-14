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
      <el-aside width="200px" class="container-aside">
        <el-menu unique-opened="true" router="true"
          default-active="2"
          class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              <span slot="title">角色列表</span>
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-menu"></i>
              <span slot="title">权限列表</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-shop"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              <span slot="title">商品列表</span>
            </el-menu-item>
            <el-menu-item index="1-2">
            <i class="el-icon-menu"></i>
            <span slot="title">分类参数</span>
          </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-menu"></i>
              <span slot="title">商品分类</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              <span slot="title">订单列表</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-management"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              <span slot="title">数据报表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main calss="container-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    beforeCreate() {
      //进行首页权限验证，如果不通过重新登陆
      const token = localStorage.getItem("token");
      if(!token){
        this.$router.push({name:'login'});
        this.$message.warning('请先登陆')
      }
    }
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
