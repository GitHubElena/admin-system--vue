import {
    ADD_COUNT,
    REDUCE_COUNT,
}
from './types';
export default{
actionsAddCount(ctx,payload){     
    return ctx.commit(ADD_COUNT,payload)
},
actionsReduceCount({commit,state,getters},payload){
    console.log(state,getters)
    return commit(REDUCE_COUNT,payload)
},
// use promise to finish request
actionsTestAsyncApiRequest({commit}){
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
          commit(REDUCE_COUNT)
          resolve()
       },1000)
   })
},
// current actions dispatch other actions
actionsDispatchOther({dispath,commit}){
   return dispath('actionsTestAsyncApiRequest')
    .then((res)=>{
        commit(ADD_COUNT)

    })
},
// use async/await to finish request ,but getData()
// and getOtherData() return promise
async actionsTestAsyncApiRequest({commit}){
    commit(REDUCE_COUNT,await getData())
},
async actionsDispatchOther({dispath,commit}){
   const getOtherData= await dispath('actionsTestAsyncApiRequest');
    commit(ADD_COUNT,getOtherData);
}
}