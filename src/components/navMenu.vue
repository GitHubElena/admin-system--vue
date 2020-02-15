<template>
    <div class="menu">      
            <el-menu class="el-menu-vertical-demo"
                :background-color="backgroundColor"
                :text-color="textColor"
                :default-active="$route.meta.pageId"
                :collapse="isCollapse"
            >
            <template v-for="item in dataList">
                <router-link :to="item.url" :key="item.id" v-if="item.children.length===0">
                    <el-menu-item :index="item.id.toString()">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </router-link>
                <subMenu v-else :data="item" :key="item.id" ></subMenu>
            </template>
            </el-menu>
    </div>
</template> 
<script>
import subMenu from "./subMenu";
import { mapState } from 'vuex';

  export default{
      name:'NavMenu',
      props:{
            dataList: [Array, Object]
        
      },
      components: {
          subMenu
      },
    computed:{
         ...mapState([
                 'isCollapse'
             ])
    },
    data() {
        return {
            backgroundColor: "#304156", 
            textColor: "#BFCBD9"
           
        }
    
    }

  }
</script>  
<style lang="sass">
    .el-menu-vertical-demo:not(.el-menu--collapse) {
                width: 300px;
                min-height: 400px;
  }
    .el-menu {
        border-right: none;
        a {
           text-decoration: none;
         }
    }
    

</style>