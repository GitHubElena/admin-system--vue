<template>
    <el-container>
        <el-header> 
             <Header/>
        </el-header>
        <el-container>
           <el-aside 
             :style="{width:$store.state.isCollapse?
             '64px':'300px',transition:'all .3s'}"
           >
               <NavMenu :dataList="menuList" />
            </el-aside>
            <el-main 
              :style="{paddingLeft:$store.state.isCollapse?
              '64px':'300px',transition:'all .3s'}"
              >
               <router-view/>
            </el-main>
        </el-container>
  </el-container>             
</template>

<script>
import Header from '@components/header'
import NavMenu from '@components/navMenu'
export default {
  name: 'Main',
  data(){
    return {     
       menuList:[
         {
          name: "首页",
          id: 1,
          icon: "el-icon-house",
          url: "/main/index",
          children: []
        },
        {
          name: "基础表格",
          id: 2,
          icon: "el-icon-s-grid",
          url: "/main/tablelist",
          children: []
        },
        {
          name: "tab选项卡",
          id: 3,
          icon: "el-icon-refrigerator",
          url: "/main/tab",
          children: []
        },
        {
          name: "表单相关",
          id: 4,
          icon: "el-icon-s-order",
          children: [
             {
               name:'基本表单',
               id:5,
               parentId:4,
               icon:'',
               url:'/main/normalForm',
               children:[]
             },
             {
               name:'三级菜单',
               id:6,
               parentId:4,
               icon:'',
               children:[
                  {
                    name:'富文本编辑器',
                    id:8,
                    parentId:6,
                    icon:'el-icon-bel',
                    url:'/main/editor',
                    children:[]
                  },
                  {
                    name:'markdown编辑器',
                    id:9,
                    parentId:6,
                    icon:'el-icon-bel',
                    url:'/main/markdown',
                    children:[]
                  }
               ]
             },
             {
               name:'文件上传',
               id:7,
               parentId:4,
               icon:'',
               url:'/main/upload',
               children:[]
             }
          ]
        },
        {
          name:'scharts图表',
          id:11,
           icon: "el-icon-s-data",
           url:'/main/scharts',
           children:[]
        },
        // {
        //   name:'路由别名',
        //   id:12,
        //    icon: "el-icon-s-data",
        //    url:'/main/routes-alias',
        //    children:[]
        // },
        {
          name:'解耦routes',
          id:13,
           icon: "el-icon-rank",
           url:'',
           children:[
               {
                name:'props接收routes.params',
                id:14,
                parentId:13,
                icon: "",
                url:'/main/routes-params/11',
                children:[]
              },
              {
                name:'父子组件传值',
                id:15,
                parentId:13,
                icon: "",
                url:'/main/parentChild',
                children:[]
              }
        
           ]
        },
        {
          name:'国际化功能',
          id:16,
          icon: "el-icon-s-flag",
          url:'/main/lang',
          children:[]
        },
        {
          name:'错误处理',
          id:17,
          icon: "el-icon-error",
          url:'',
          children:[]
        },
        {
          name:'支持作者',
          id:18,
          icon: "el-icon-money",
          url:'',
          children:[]
        }

       ]
       
    }
  },
  components:{
    Header,
    NavMenu
  },
   methods: {     
  }
}
</script>

<style>
@import "../assets/scss/main.scss"
</style>
