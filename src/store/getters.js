export default{
getterCount:(state)=>{
    return state.arr.map(item=>item*3)
},
getterTest:(state,getters)=>{
    console.log(getters.getterCount.length)
},
getParamtest:(state)=>(payload)=>{
    return  state.param+payload
},
}