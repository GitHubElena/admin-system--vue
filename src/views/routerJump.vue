<template>
<div>
     <router-link :to="url">
         <el-button>我是router-link,请点击我拉姆我跳转</el-button>
    </router-link>
   
</div>
    
</template>
<script>
export default {
    name:'routerJump',
    data(){
        return{
            url:'/main/index'
        }
    }
}
</script>
<style>

</style>