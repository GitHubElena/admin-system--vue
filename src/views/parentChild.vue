<template>
      <div>
          <welcome-button @welcome="sayHi" :dataList="list" ref="child"></welcome-button>
     </div>
</template>
<script>
import welcomeButton from "@components/welcomeButton"
export default {
    data(){
        return {
            list:[1,2,3]
        }
    },
    components:{
        welcomeButton
    },
    mounted(){
        this.$refs.child.lala()
    },
      methods: {
        sayHi(){
            alert('Hi!')
        }
    }
}
</script>
<style>

</style>