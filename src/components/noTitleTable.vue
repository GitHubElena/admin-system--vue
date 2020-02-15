<template>
    <div class="noTitleTable-content">
        <div class="content" v-for="(item,index) in dataList" :key="index">
            <el-row :gutter="20" >
                <el-col :span="16">{{item.msg}}</el-col>
                <el-col :span="4">{{item.date}}</el-col>
                <el-col :span="3">
                    <el-button size="small" v-if='dataType==="first"' @click="$emit('toFirstType',item.id)">标记为已读</el-button>
                    <el-button size="small" v-else-if='dataType==="second"' type="danger">删除</el-button>
                    <el-button size="mini" v-else>还原</el-button>
                </el-col>              
            </el-row>
            <div class="divider"></div>
        </div>
        <div class="divider-bottom">
            <el-button type="primary" size="small" v-if='dataType==="first"'>全部标记为已读</el-button>   
            <el-button size="small" v-else-if='dataType==="second"' type="danger">删除全部</el-button>
            <el-button size="mini" v-else  type="danger">清空回收站</el-button> 
        </div>
    </div>
</template>
<script>
export default {
    name:'noTitleTable',
    props:{
        dataType:{
           type:String
        },
        dataList:{
            type:Array
        }
        
    }
}
</script>
<style lang="scss" scoped>
 .noTitleTable-content{
      font-size:12px;
     .content{
         line-height:60px;
         .el-row{
              .el-col-16{
                    color: #20a0ff;
                }
                &:hover{
                   background:#f5f7fa;              
                }

         }
         
         .divider{
            width:100%;
            height:0px;
            border-bottom: 1px solid #ebeef5;

        }

     }
     .divider-bottom{
          .el-button{
         margin:20px 10px;
     }
     }
    
  

 }
</style>