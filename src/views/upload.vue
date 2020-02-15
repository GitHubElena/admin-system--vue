<template>
    <div class="upload">
        <div class="upload-title"><i class="el-icon-s-order"></i>表单 /图片上传</div>
        <div class="upload-content">
           <h1>支持拖拽上传</h1>
           <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            <!-- <h1>支持裁剪</h1>
              <el-upload
                :before-upload="beforeUpload"     
                :file-list="showImgUrl"          
                :limit="1"                        
                :multiple="false"                  
                :on-exceed="overFile"              
                :on-remove="removeFile"            
                action                            
                list-type="picture-card"          
                ref="upload"                      
            >
             <i class="el-icon-plus"></i>         
            </el-upload>
      -->
    
        </div>
    </div>
</template>
<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
export default {
     name:'upload',
    components: { VueCropper},
    data(){
        return{              
              
        }
     },
     mounted(){
       
    },
    updated(){

    },
    methods:{
    //  这里对图片类型和大小做出限制 
        beforeUpload(file) {
        const isLt5M = file.size < 5 * 1024 * 1024
        const fileType = file.type.split('/')[0]
        if (!isLt5M) {
            this.$message.error('图片大小不能超过5M')
            return false
        }
        if (fileType !== 'image') {
            this.$message.error('只能上传图片格式')
            return false
        }
      },
        // 图片上传前触发裁剪组件
        // 将图片读出并在完成时触发裁剪 
        picUpload(option) {
        let file = option.file
        if (file) {
            this.fileReader.readAsDataURL(file)
        }
        this.fileReader.onload = () => {
            let src = this.fileReader.result
            this.cropperShow = true
            this.cropperImg = src
        }
        },
    }
    
 }
    


</script>
<style lang="scss" >
.upload{
    padding:10px;
    .upload-title{
        margin-bottom:20px;

    }
    .upload-content{
        padding: 30px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom:1000px;
        h1{
            margin:20px 0px;
        }
    }
}
</style>