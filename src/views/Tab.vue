<template>
    <div class="tabContent">
         <div class="tab-title">
             <i class="el-icon-refrigerator"></i>
             tab选项卡
         </div>
         <div class="tab-content">
           <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="未读消息(2)" name="first"><noTitleTable dataType="first" :dataList="needReadList" @toFirstType="handleFirstType"/></el-tab-pane>
            <el-tab-pane label="已读消息(1)" name="second"><noTitleTable dataType="second" :dataList="finishedReadList"/></el-tab-pane>
            <el-tab-pane label="回收站" name="third"><noTitleTable dataType="third" :dataList="recycleList"/></el-tab-pane>
           </el-tabs>
        </div>
    </div>
</template>
<script>
import noTitleTable from '@components/noTitleTable'
export default {
    name:'Tab',
    data(){
        return {
            activeName: 'first',
            needReadList:[{
                id:1,
                msg:'【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                date:'2018-04-19 20:00:00'
            },{
                id:2,
                msg:'今晚12点整发大红包，先到先得',
                date:'2019-11-20 04:09:23'
            }],
            finishedReadList:[{
                id:3,
                msg:'【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                date:'2020-02-03 11:17:45'
            }],
            recycleList:[{
                id:4,
                msg:'【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                date:'2020-02-03 20:17:45'
            }]
        }
       
    },
    components:{
        noTitleTable
    },
      methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        handleFirstType(id){
            this.finishedReadList.concat(this.needReadList[id-1]);
               this.needReadList.splice(id-1,1)
        }
    }
}
</script>

<style lang="scss" scoped>
    .tabContent{
        padding:10px;
        width:100%;
        height:100%;
        background:#f0f0f0;
        margin-bottom:1000px;
        .tab-title{
            margin-bottom:20px;
        }
        .tab-content{
               padding: 30px;
                background: #fff;
                border: 1px solid #ddd;
                border-radius: 5px;
        }
    }
</style>