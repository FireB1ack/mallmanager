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
            <a href="#" @click.prevent="handleLoginOut()" class="loginout">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="container-aside">
        <el-menu :unique-opened="true" :router="true"
                 default-active="2"
                 class="el-menu-vertical-demo">
          <el-submenu :index="''+item.order" v-for="(item,index) in menuArr" :key="index">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item :index="item1.path" v-for="(item1,index) in item.children" :key="index">
              <i class="el-icon-menu"></i>
              <span slot="title">{{item1.authName}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main calss="container-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        menuArr: []
      }
    },
    beforeCreate() {

    },
    created() {
      this.getMenus()
    },
    methods: {
      handleLoginOut() {
        this.$confirm('是否确认退出该用户?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          //用户登出
          localStorage.clear();
          this.$router.push({name: 'login'});
          this.$message.success('用户退出成功');
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });
        });
      },
      async getMenus() {
        const res = await this.$axios.get('menus');
        this.menuArr = res.data.data;
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

</style>
