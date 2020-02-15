<template>
  <div class="IndexContent">
       <h3>count的值{{$store.state.count}}</h3>
       <div>直接commit 给mutations的同步操作</div>
       <div>
          <el-button type="primary" @click="handleClickAdd(10)">增加</el-button>
          <el-button type="primary" @click="handleClickReduce(10)">减少</el-button>
       </div>
        <el-divider></el-divider>
       <div>通过dispatch给actions然后commit给mutation的异步操作</div>
       <div>
          <el-button type="primary" @click="handleActionsAdd(5)">异步增加</el-button>
          <el-button type="primary" @click="handleActionsReduce(5)">异步减少</el-button>
        </div>
          <el-divider></el-divider>
        <div>获取getters的值{{$store.getters.getterCount}}</div>
        <div>getters内部操作{{$store.getters.getterTest}}</div>
         <el-divider></el-divider>
        <div>给getters传参看看</div>
        <div>{{$store.getters.getParamtest('我是参数')}}</div>
         <el-divider></el-divider>
  </div>
</template>

<script>
import {ADD_COUNT, REDUCE_COUNT}from '../store/types'
export default {
  name: 'Index',
  data () {
    return {
     
    }
  },
  methods:{
    // 同步操作
       handleClickAdd(n){
         this.$store.commit(ADD_COUNT,n);
       },
        handleClickReduce(n){
         this.$store.commit(REDUCE_COUNT,n);
       },
       //异步操作
       handleActionsAdd(n){
         this.$store.dispatch('actionsAddCount',n)
       },
       handleActionsReduce(n){
         this.$store.dispatch('actionsReduceCount',n)
       }
  }
  
  
}
</script>


<style >
.pri-btn{

}
</style>
