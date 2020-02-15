<template>
    <div> 
        <button @click="$emit('welcome')">
               Click me to be welcomed
              <div v-for="(item,index) in dataList" :key="index"  @click="lala">{{item}}</div>
        </button>
    </div>
</template>
<script>
export default {
    name:'welcomeButton',
    props:{
        dataList:{
            type:Array

        }
    },
    methods:{
        lala(){
            alert('lala')
        }
    }

}
</script>
<style>

</style>