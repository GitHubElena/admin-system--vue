import {
ADD_COUNT, 
REDUCE_COUNT,
CHANGE_NAV_COLLAPSE,
GET_USER_INFO,
LOGINOUT
}from './types'

const state={
count:0,
arr:[2,4,6,8],
num:34,
param:'haha',
mapState:'mapState',
isCollapse:false,
username:''
};

const mutations={
[ADD_COUNT]:(state,payload)=>{
    state.count+=payload
},
[REDUCE_COUNT]:(state,payload)=>{
    state.count-=payload
},
[CHANGE_NAV_COLLAPSE]:(state)=>{
    state.isCollapse=!state.isCollapse;                   
},
[GET_USER_INFO]:(state,payload)=>{
    state.username=payload;
},
[LOGINOUT]:(state)=>{
    state.username='';
}
};

export {
    state,
    mutations
}