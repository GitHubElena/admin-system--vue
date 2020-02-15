import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/Login'
import Main from 'views/Main'
import Index from 'views/Index'
import Test from 'views/Test'
import Test2 from 'views/Test2'
import normalForm from 'views/normalForm'
import normalRouter from 'views/normalRouter'
import routerJump from 'views/routerJump'
import routesParams from 'views/routesParams'
import parentChild from 'views/parentChild'
import tableList from 'views/tableList'
import Tab from 'views/Tab' 
import Editor from 'views/Editor'
import markDown from 'views/markDown'
import upload from 'views/upload'
import Scharts from 'views/Scharts'
import Lang from 'views/Lang'
Vue.use(Router)
const router= new Router({
  routes: [
    {
      path:'/',
      component:Login
    },
    {
      path:'/main',
      component:Main,
      meta:{
        Auth:true
      },
      children:[
        {
          path:'index',
          component:Index
          
        },
        {
           path:'tablelist',
           component:tableList
        },
        {
          path:'tab',
          component:Tab

        },{
          path:'normalform',
          component:normalForm
        },{
          path:'editor',
          component:Editor
        },{
          path:'markdown',
          component:markDown
        },
        {
         path:'upload',
         component:upload
        },
        {
          path:'scharts',
          component:Scharts
        },{
          path:'lang',
          component:Lang
        },
        {
          path:'test',
          component:Test,
           //路由独享守卫
          //  beforeEnter:(to,from,next)=>{
          //   alert('确定要看吗');
          //   next()
          // }     
        },{
          path:'test2',
          component:Test2
        },{
          path:'dynamic-router/:id',
          name:'动态路由',
          meta:{
            Auth:true
          },
         // component:formBase
        },{
          path:'normal-router',
          component:normalRouter
        },{
          path:'routerJump',
          component:routerJump
        },{
          path:'router-redirect',
          redirect:'index'
        },{
          path:'routes-alias',
          alias: 'index',
          component:()=>import('views/Index')
        },{
          path:'routes-params/:id',
          component:routesParams,
          props:true
          // props: (route) => ({ query: route.query.q }) 
        },{
          path:'parentChild',
          component:parentChild
        }
      ],

    },
    {
      path:'*',
      redirect:'/NotFound'
    },
    {
      path:'/NotFound',
      component:()=>import('@components/NotFound')
    } 
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router

