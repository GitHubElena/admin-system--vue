<template>
    <div class="editor">
        <div class="editor-title"><i class="el-icon-s-order"></i>表单 / 富文本编辑器</div>
        <div class="editor-content">
           <quillEditor  v-model="content"
                ref="myQuillEditor"
                :options="editorOption"/>
        </div>
    </div>
</template>
<script>

import{ quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
    name:'Editor',
    components:{
          quillEditor
    },
    data(){
        return{
             content: '<h2>I am Example</h2>',
            editorOption: {
            // some quill options
            }
        }
    },
    mounted() {
     // console.log('1',this.content)
    },
    updated(){
       // console.log('2',this.content)
    }

}
</script>
<style lang="scss" >
.editor{
    padding:10px;
    .editor-title{
        margin-bottom:20px;

    }
    .editor-content{
        padding: 30px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom:1000px;
        .ql-container {
            height:400px;
        }
}
}
</style>