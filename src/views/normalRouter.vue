<template>
     <div>我是编程式路由我要跳转了rooter.push</div>
</template>
<script>
export default {
    name:'normalRouter',
    mounted(){
        setTimeout(()=>{
            this.$router.push('/main/index')
        },2000)
    }

}
</script>