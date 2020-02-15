<template>
    <div class="markdown">
        <div class="markdown-title"><i class="el-icon-s-order"></i>表单 / markdown编辑器</div>
        <div class="markdown-content">
           <mavon-editor style="height: 90%" v-model="handbook"></mavon-editor>
           <el-button type="primary" size="small" @click="handleHandbook" style="marginTop:20px">提交</el-button>
        </div>
    </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
     name:'markdown',
     components: {
            mavonEditor      
    },
    data(){
        return{
              handbook: "#### how to use mavonEditor in nuxt.js"         
            }
     },
     mounted(){
        // console.log('1',this.handbook)
    },
    updated(){
       //    console.log('2',this.handbook)
    },
    methods:{
        handleHandbook(){
            console.log(this.handbook)
            this.$message('提交成功');

        }
    }
    
 }
    


</script>
<style lang="scss" >
.markdown{
    padding:10px;
    .markdown-title{
        margin-bottom:20px;

    }
    .markdown-content{
        padding: 30px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
         height: 550px;
        margin-bottom:1000px;
        
    }
}
</style>