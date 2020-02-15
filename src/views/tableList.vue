<template>
      <div class="tableContent">
           <div class="table-title"><i class="el-icon-s-grid"></i> 基础表格</div>
           <div class="table-wrapper">
               <el-row :gutter="20" >
                   <el-col :span="2"> <el-button type="primary" size="small">批量删除</el-button></el-col>                      
                   <el-col :span="4"> 
                       <el-select v-model="value" placeholder="地址"  size="small">
                         <el-option
                             v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                        </el-select>
                    </el-col>
                   <el-col :span="8"><el-input placeholder="用户名" size="small" v-model="username"></el-input></el-col>
                   <el-col :span="4"><el-button type="primary"  size="small"><i class="el-icon-search"></i>搜索</el-button></el-col>
               </el-row>
               
                <el-table
                    border
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                    type="selection"
                    width="60">
                </el-table-column>
                <el-table-column                  
                    label="用户名"
                    width="135">
                      <template slot-scope="scope">
                            <span  v-if="scope.row.isSet">{{scope.row.username}}</span>
                            <span v-else>
                                    <el-input  v-model="scope.row.username"  placeholder="请填写" ></el-input>
                            </span>                                                                       
                    </template>
                </el-table-column>
                <el-table-column
                     sortable 
                    prop="account"
                    label="账户余额"
                    width="150">
                </el-table-column>

                 <el-table-column
                    width="260"
                    label="地址"
                   >
                      <template slot-scope="scope">
                            <span  v-if="scope.row.isSet">{{scope.row.address}}</span>
                            <span v-else>
                                    <el-input  v-model="scope.row.address"  placeholder="请填写" ></el-input>
                            </span>                                                                       
                    </template>
                </el-table-column>
                 <el-table-column                
                    label="状态"
                    width="100"
                   >
                    <template  slot-scope="scope">
                        <div v-if="scope.row.status">  <el-button type="success" plain size="mini">成功</el-button></div>
                        <div v-else> <el-button type="danger" plain size="mini">失败</el-button></div>
                    </template>
                </el-table-column>
                 <el-table-column
                  width="150"
                   sortable 
                    prop="date"
                    label="注册时间"
                   >
                </el-table-column>
                 <el-table-column  
                    label="操作"
                    width="250"
                   >
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

            
        </div>
        
      </div>
</template>

<script>
export default {
    name:'tableList',
        data() {
            return {
                tableData: [
                    {
                    id:1,
                    username: '王小虎',
                    account:1923,
                    imageUrl:'https://lin-xin.gitee.io/images/post/node3.png',                 
                    address: '上海市普陀区金沙江路 1518 弄',
                    status:1,
                    date:'2019-9-14',
                    isSet:true
                    }, 
                    {
                    id:2,
                    username: '张三',
                    account:1232,
                    imageUrl:'https://lin-xin.gitee.io/images/post/node3.png',                 
                    address: '福建省厦门市鼓浪屿',
                    status:1,
                    date:'2019-9-15',
                    isSet:true
                    },
                    {
                     id:3,
                    username: '王勇',
                    account:1718,
                    imageUrl:'https://lin-xin.gitee.io/images/post/parcel.png',                 
                    address: '广东省广州市白云区',
                    status:1,
                    date:'2019-9-16',
                    isSet:true
                    },
                    {
                    id:4,
                    username: '舒畅',
                    account:193,
                    imageUrl:'https://lin-xin.gitee.io/images/post/wms.png',                 
                    address: '上海市普陀区金沙江路99 弄',
                    status:0,
                    date:'2019-9-17',
                    isSet:true
                    },
                    {
                    id:5,
                    username: '贾玲',
                    account:128,
                    imageUrl:'https://lin-xin.gitee.io/images/post/notice.png',                 
                    address: '湖南省长沙市',
                    status:1,
                    date:'2019-9-15',
                    isSet:true
                    }
                    
                ],
                multipleSelection: [],
                options: [
                    {
                    value: '选项1',
                    label: '湖南'
                    }, {
                    value: '选项2',
                    label: '江西'
                    }, {
                    value: '选项3',
                    label: '河南'
                    }, {
                    value: '选项4',
                    label: '四川'
                    }, {
                    value: '选项5',
                    label: '浙江'
                    }],
                    value: '',
                    username:''
            }
    },

    methods: {
     
      handleSelectionChange(val) {
          console.log(val)
        this.multipleSelection = val;
      },
       //保存
        handleSave(index){
           this.tableData[index].isSet=true;
        },
        //修改
        handleEdit(index){
            this.tableData[index].isSet=false; 
        },
        //删除
        handleDelete(index){
            this.tableData.splice(index,1)
        },
    }
}
</script>
<style lang="scss">
.tableContent{
    margin-bottom:167px;
    padding:10px;
   .table-title{
    margin-bottom:20px;
  }
  .table-wrapper{
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    .el-row{
        margin-bottom:20px;
    }
    .el-table th {
    background-color: #f5f7fa!important;
}
  }
}
  
</style>