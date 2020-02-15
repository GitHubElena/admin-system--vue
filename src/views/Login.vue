<template>
  <div class="loginWrapper">
        <div class="login-content">
            <div class="login-title">后台管理系统</div>
            <div class="login-form">           
                <el-input
                    placeholder="请输入用户名"
                    v-model="username"
                    clearable >
                    <template slot="prepend">
                        <i class="el-icon-user"></i>
                    </template>
                </el-input>
                <el-input placeholder="请输入密码"
                    v-model="password" 
                    show-password
                    clearable>
                    <template slot="prepend">
                        <i class="el-icon-lock"></i>
                    </template>
                </el-input>
                <div class="login-button" @click="handleLogin">登录</div>
                <div class="tips">Tips : 用户名和密码随便填。</div>
          </div>
     </div>
  </div>
</template>
<script>
import {GET_USER_INFO}from '../store/types'
export default {
    name:'Login',
    data(){
        return {
          username:'',
          password:''
        }
    },
    methods:{    
        handleLogin(){
             this.$store.commit(GET_USER_INFO,this.username);
             this.$router.push("/main/index");
        }

    }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/login.scss"

</style>