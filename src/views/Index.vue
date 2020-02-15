<template>
  <div class="index-content">
        <el-row :gutter="30">
            <el-col :span="8">
                <div class="loginInfo">
                    <el-row class="loginInfo-top">
                        <el-col :span="12">
                           <img src="../assets/img/admin.jpg" alt="" class="user-avator">
                        </el-col>
                        <el-col :span="12" class="loginInfo-top-right">
                            <div class="top-admin">admin</div>
                            <div class="top-admin-chinese">超级管理员</div>
                        </el-col>
                    </el-row>
                    <el-row class="loginInfo-bottom">
                         <el-col :span="12">
                             <div>上次登陆时间:</div>
                             <div>上次登陆地点:</div>
                         </el-col>
                         <el-col :span="12">
                              <div>{{loginInfo.time}}</div>
                              <div>{{loginInfo.place}}</div>
                         </el-col>
                    </el-row>
                </div>
                <div class="skill">
                    <el-row class="skill-title">语言详情</el-row>
                     <el-row class="skill-content"  v-for="(item,index) in languagedetails" :key="index">
                            <el-row>{{item.name}}</el-row>
                            <el-row class="content-bottom">
                                <el-col :span="20" class="bottom-left" >
                                    <div class="cover" :style="{backgroundColor:`${item.color}`,width:`${item.width}`}"></div>
                                </el-col>
                                <el-col :span="4" class="bottom-right">{{item.width}}</el-col>
                            </el-row>
                    </el-row>                 
                </div>
            </el-col>
            <el-col :span="16">
               <el-row type="flex" justify="space-between">
                    <el-col :span="7"  v-for="(item,index) in countList" :key="index">
                        <el-row class="grid-content bg-purple">
                            <el-col :span="8" class="grid-left" :style="{background:`${item.color}`}">
                               <i :class="item.icon"></i>
                            </el-col>
                            <el-col :span="16" class="grid-right">
                                <div class="num" :style="{color:`${item.color}`}">{{item.num}}</div>
                                <div :style="{color:`${item.fontColor}`}">{{item.des}}</div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row class="todo-warpper">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>代办事项</span>
                            <el-button style="float: right; padding: 3px 0" type="text" @click="handleAdd">添加</el-button>
                        </div>
                         <el-table
                                :row-class-name="tableRowClassName"
                                ref="multipleTable"
                                :data="todoList"
                                tooltip-effect="dark"
                                style="width: 100%"
                                @selection-change="handleSelectionChange"
                                @row-dblclick="handleEdit"
                            >
                            <el-table-column type="selection" width="55"></el-table-column>
                             <el-table-column
                                label="标题"
                                 sortable 
                                >
                                <template slot-scope="scope">
                                    <span  v-if="scope.row.isSet">{{scope.row.todos}}</span>
                                    <span v-else>
                                         <el-input  v-model="scope.row.todos"  placeholder="请填写" ></el-input>
                                    </span>
                                    
                                    
                                </template>
                            </el-table-column>
                           <el-table-column
                                 fixed="right"
                                label="操作"
                                width="200">
                                <template slot-scope="scope">
                                   
                                    <el-button v-if="!scope.row.isSet"
                                        size="mini"
                                        @click="handleSave(scope.$index)">Save</el-button>  
                                     <el-button  v-else
                                        size="mini"
                                        @click="handleEdit(scope.$index)">Edit</el-button>
                                    <el-button
                                        size="mini"
                                        type="danger"
                                        @click="handleDelete(scope.$index)">Delete</el-button>
                                </template>
                                </el-table-column>
                           
                        </el-table>
                        <el-pagination class="table-page"
                            background
                            layout="prev, pager, next"
                            :page-size="5"
                            :total="6"
                            hide-on-single-page
                            @current-change="getCurrentPage"
                            >
                       </el-pagination>
                     </el-card>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import{dateFormat} from '../utils/Format'
export default {
    name:'Index',
    data(){
        return{
            loginInfo:{
                time:'2020-01-18',              
                place:'杭州'
            },
            languagedetails:[
                {
                name:'Vue',
                width:'71.3%',
                color:'rgb(66, 185, 131)'
              },{
                  name:'JavaScript',
                  width:'24.1%',
                  color:'rgb(241, 224, 90)'
              },{
                  name:'CSS',
                  width:'13.7%',
                  color:'#409eff'
              },{
                  name:'HTML',
                  width:'5.9%',
                  color:'rgb(245, 108, 108)'
              }
            ],
            countList:[
                {
                    icon:'el-icon-user',
                    num:'1234',
                    des:'用户访问量',
                    color:'#2d8cf0',
                    fontColor:'#999'
                },{
                   icon:'el-icon-bell',
                   num:'321',
                   des:'系统消息',
                   color:'#64d572',
                   fontColor:'#999'
                   
                },{
                    icon:'el-icon-shopping-bag-2',
                    num:'5000',
                    des:'数量',
                    color:'#f25e43',
                    fontColor:'#999'
                 
                }
            ],
            todoList:[
                {
                    id:1,
                    todos:'进行bug修复....',
                    isSet:true
                },{
                    id:2,
                    todos:'审核业务流程...',
                    isSet:true
                },{
                    id:3,
                    todos:'进行1.89版本升级...',
                    isSet:true,
                },{
                    id:4,
                    todos:'年后作战的目标及计划部署...',
                    isSet:true
                } ,{
                    id:5,
                    todos:'年后新项目框架的搭建',
                    isSet:true
                }
            ],
            ids:[],
            updateNum:0

        }
    },

    
    methods:{
        //选中的id
        handleSelectionChange(val){
            let ids=[];
           val.forEach(item=>{
             ids.push(item.id-1)
           })
          this.ids=ids;
        },
        //添加
         handleAdd(){
        let temp={ todos:'', isSet:false};
        this.todoList.push(temp);
        },
        //保存
        handleSave(index){
           this.todoList[index].isSet=true;
        },
        //修改
        handleEdit(index){
            this.todoList[index].isSet=false; 
        },
        //删除
        handleDelete(index){
            this.todoList.splice(index,1)
        },
       //table行添加类名变样式
         tableRowClassName({row,rowIndex}){        
           if(this.ids.indexOf(rowIndex)>-1){
                return 'success-click'
           }
           return ''
         },
         //获取当前页码
         getCurrentPage(page){
               const page1=[{
                    id:1,
                    todos:'进行bug修复....',
                    isSet:true
                },{
                    id:2,
                    todos:'审核业务流程...',
                    isSet:true
                },{
                    id:3,
                    todos:'进行1.89版本升级...',
                    isSet:true,
                },{
                    id:4,
                    todos:'年后作战的目标及计划部署...',
                    isSet:true
                } ,{
                    id:5,
                    todos:'年后新项目框架的搭建',
                    isSet:true
                }];
                const page2=[{
                    id:6,
                    todos:'3月份新人的培训及考核...',
                    isSet:true
                }]
              page===1?this.todoList=page1:this.todoList=page2;
               
           }
       
         }
}
</script>
<style lang="scss">
.index-content{  
     padding-left:15px;
    .loginInfo,.skill{
        border-radius:4px;
        width:95%;
        height:240px;
        margin-bottom: 20px;
        background: #ffffff;
    }
    .loginInfo{  
         padding:15px;  
        .loginInfo-top{
           height:140px;
           border-bottom:2px solid #ccc;
           .user-avator{
                width: 120px;
                height: 120px;
                border-radius: 50%;
           }
           .loginInfo-top-right{
                height: 140px;   
                display: flex;
                flex-direction: column;
                justify-content: center;

              .top-admin{
                 font-size: 30px;
                 color: #222;
              }
              .top-admin-chinese{
                  margin-top:10px;
                 font-size:14px;
                 color:rgb(153, 153, 153);
                }

           }
           
        }
        .loginInfo-bottom{
             font-size:14px;
             color:rgb(153, 153, 153);
             margin-top:30px;
             .el-col{
                 height:70px;
                 line-height: 30px;
             }
        }
    }
    .skill{
           padding:15px; 
       .skill-title{
            color: #303133;
            border-bottom: 1px solid #ebeef5;
            padding:20px 0px;
            margin-bottom: 15px;
       }
       .skill-content{
           .content-bottom{
               height:15px;
               margin:5px 0px;
               .bottom-left{
                   height:8px;
                   line-height: 7px;
                   border-radius: 4px;
                   background-color: #ebeef5;
                   position: relative;
                   .cover{
                        position: absolute;
                        height:8px;
                        line-height: 7px;
                        border-radius: 4px;
                   }
               }
               .bottom-right{
                   line-height: 7px;
                    padding:0px 20px;
                    color: #606266;
                    font-size:14.4px;
               }
           }
            
      }
      
    } 
    .grid-content{
        background: #ffffff;
        border-radius:4px;
        height:100px;    
        .grid-left{       
            height:100px;
            line-height: 100px;
            color:#ffffff;
            text-align: center;
        }
        .grid-right{
            height:100px;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .num{
                font-size: 24px;
                font-weight:bold;
                margin-bottom: 10px;
            }
            
            
            
        }

    }     
    .todo-warpper{
        margin-top:20px;
        .el-table .success-click{
            text-decoration: line-through;
            color: #999;
        }
        .el-card{
                min-height: 440px;
                 .el-card__body{
                    padding:30px;
                }
        }
       
        .table-page{
            margin-top:20px;
            text-align: right;
        }
        
    } 
  

}

</style>
