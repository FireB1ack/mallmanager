<template>
  <div class="login-wrap" @keyup.enter="handleKeyPress()">

    <el-form  class="login-form" label-position="top" label-width="80px" :model="formData">
      <h2>用户登陆</h2>
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="handleLogin()" type="primary" class="login-btn">登陆</el-button>
    </el-form>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      //处理登陆方法
      handleLogin() {
        this.$axios.put('login', this.formData).then((res) => {
          // console.log(res);
          const {
            data, meta: {
              msg, status
            }
          } = res.data;
          if (status == 200) {
            //登陆成功
            this.$message.success(msg);
            //存储token
            localStorage.setItem("token", data.token);
            console.log('localStorage:'+localStorage.getItem("token"));
            //跳转首页
            this.$router.push({name:'home'})
          } else {
            //登陆失败
            this.$message.warning(msg);
          }
        })
      },
      handleKeyPress(){
        this.handleLogin()
      }
    }
  }
</script>

<style scoped>
  .login-wrap {
    background-color: #324152;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-wrap .login-form {
    background-color: #fff;
    width: 400px;
    padding: 30px;
    border-radius: 5px;
  }

  .login-btn {
    width: 100%;
  }

</style>
