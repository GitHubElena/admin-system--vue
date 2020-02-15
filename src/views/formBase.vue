<template>
      <div>User{{$route.params.id}} </div>
</template>

<script>
export default {
    name:'formBase',
    //组件内守卫

    beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    alert('组件实列创建前')
  },
     beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      to.path ===from.path?'':next();
      //原来的组件实例会被复用，不过，这也意味着组件的生命周期钩子不会再被调用。需要next()才能够渲染页面
        },
    beforeRouteLeave(to,from,next){
          alert('离开当前组件')
    }
        

  }
    
</script>
<style scoped>

</style>
