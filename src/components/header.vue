<template>
    <div class="header-content">
       <div class="content-left"> 
        <i  v-if="isCollapse" class="el-icon-s-fold" @click="ChangeNavCollapse"></i>
         <i v-else class="el-icon-s-unfold"  @click="ChangeNavCollapse"></i>
        <span>后台管理系统</span>
       </div>
       <div class="content-right">
           <div><i class="el-icon-rank"></i></div>
           <div><i class="el-icon-message-solid"></i><span class="btn-bell-badge"></span></div>
           <div><img src="../assets/img/admin.jpg" alt=""> </div>           
            <el-dropdown @command="handleCommand" size="medium"> 
              <span class="el-dropdown-link">{{username}}<i class="el-icon-caret-bottom"></i></span>              
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a" >项目仓库</el-dropdown-item>
                  <el-dropdown-item command="b"  divided >退出登陆</el-dropdown-item>                   
            </el-dropdown-menu>
            </el-dropdown>
           

       </div>
    </div>
</template> 
<script>
import { mapMutations,mapState} from 'vuex'
import {CHANGE_NAV_COLLAPSE,LOGINOUT} from '../store/types'

  export default{
      name:'Header',
      computed:{
         ...mapState([
           'isCollapse',
           'username'

         ])
      },
      methods: {
        ...mapMutations({
           ChangeNavCollapse:CHANGE_NAV_COLLAPSE
        }),
          handleCommand(command) {
            command==='b'?this.handleLoginOut():'';
          },
          handleLoginOut(){
            this.$store.commit(LOGINOUT);
            this.$router.push('/')
          }
    }
  }
</script>  
<style lang="sass">
.header-content{
     height:60px;
     line-height:60px;
     padding:0 40px;
     display:flex;
     flex-direction:row;
     justify-content:space-between;
     color:white;
     .content-left{
       font-size:22px;
       width:20%;
       i{
         margin-right:20px;
       }
     }
     .content-right{
       display:flex;
       flex-direction:row;
       justify-content:space-around;     
       font-size:20px;
       width:232px;
       text-align:right;  
       .el-dropdown{
          color:#fff!important; 
        }  
       
       div{
          width:10%;
          margin-right:20px;
          &:nth-child(4){
                 width:37%;
               .el-dropdown-link{
                   font-size:16px;
                   cursor: pointer;
                 }
                 
          }
          &:nth-child(2){
              position:relative;
              .btn-bell-badge{
                  position: absolute;
                  right: 3px;
                  top: 17px;            
                  width: 8px;
                  height: 8px;
                  border-radius: 4px;
                  background: #f56c6c;
               }
          }        
          img{
            width:40px;
            height:40px;
            border-radius:50%;
          }
          i{
            margin-right:10px;
          }
         
        }
       }

     
}

</style>