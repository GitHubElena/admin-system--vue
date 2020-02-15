<template>
    <div class="scharts">
        <div class="scharts-title"><i class="el-icon-s-customr"></i>echarts图表</div>
        <div class="scharts-content">
               <div id="myChart" :style="{width: '500px', height: '500px'}"></div>
                <div id="myChart2" :style="{width: '700px', height: '500px'}"></div>

        </div>
    </div>
</template>
<script>
import getEchartsInstance from '../utils/echartInstance'
export default {
    name:'scharts',
    data(){
        return{
        
        }
    },
    mounted(){
       getEchartsInstance('myChart',1)
        getEchartsInstance('myChart2',2)
    }
  

}
</script>
<style lang="scss" >
.scharts{
    padding:10px;
    .scharts-title{
        margin-bottom:20px;

    }
    .scharts-content{
        padding: 30px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom:1000px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .wrapper{
            width: 7rem;
            height: 5rem;
        }
        
   }
}
</style>