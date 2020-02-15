<template>
  <div class="TableContent">
      <div>store中num的值直接在页面上用mapState操作</div>
      <!-- <div>{{reduceNum}}</div>
      <div>{{newNum}}</div> -->

      <h3>count的值{{$store.state.count}}</h3>
       <div>直接commit 给mutations的同步操作</div>
       <div>
         <button @click="handleClickAdd(10)">增加</button>
         <button @click="handleClickReduce(10)">减少</button>
       </div>
       <div>通过dispatch给actions然后commit给mutation的异步操作</div>
       <div>
         <button @click="handleActionsAdd(5)">异步增加</button>
         <button @click="handleActionsReduce(5)">异步减少</button>
        </div>
              <div>给getters传参看看</div>
        <div>{{getParamtest('我是参数')}}</div>
        <div>{{mapState}}</div>
       <div>{{newValue}}</div>

  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  name: 'Table',
  data () {
    return {
     
    }
  },
  // computed:mapState({
  //    newNum:state=>state.num*2,
  //    reduceNum(state){
  //      return state.num+10
  //    }
  // }),
  computed:{

     ...mapState([
            'mapState'
       ]),
      ...mapGetters([
           'getParamtest'
      ]),
      newValue(){
       return 'newValue:new'+ 'mapState'
      }
  },

  methods:{
       ...mapMutations({
            handleClickAdd:'mutationsAddCount',
            handleClickReduce:'mutationsReduceCount'
       }),
       ...mapActions({
          handleActionsAdd:'actionsAddCount',
          handleActionsReduce:'actionsReduceCount'
       })

    // 同步操作
      //  handleClickAdd(n){
      //    this.$store.commit('mutationsAddCount',n);
      //  },
      //   handleClickReduce(n){
      //    this.$store.commit('mutationsReduceCount',n);
      //  },
      //  //异步操作
      //  handleActionsAdd(n){
      //    this.$store.dispatch('actionsAddCount',n)
      //  },
      //  handleActionsReduce(n){
      //    this.$store.dispatch('actionsReduceCount',n)
      //  }
  }
  
  
}
</script>


<style >

</style>

