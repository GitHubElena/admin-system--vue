## vue后台管理系统 ##  


### 项目构建 ###  
vue + vue-router + vuex + element-ui + webpack  

## 项目结构 ##
    
    |--src                                  // 项目主目录    
    |    |--assets                          // 静态文件或样式文件目录    
    |           |--i18n                     // 语言切换文件    
    |           |--img                      // 图片存放目录    
    |           |--scss                     // 样式存放目录    
    |    |--components                      // 通用组件目录   
    |           |-- header                  // 头部公用组件    
    |           |-- navMenu                 // 左侧导航公用组件  
    |           |-- subMenu                 // 左侧导航子组件(functional component)  
    |           |-- NotFound                // 路由无法匹配的组件  
    |           |--noTitleTable             // 首页中表格组件  
    |           |--welcomeButton            // parentChild 的子组件            
    |    |--router                          // 路由目录    
    |           |--index.js                 // 嵌套路由主文件  
    |    |--store                           // vuex目录  
    |           |--actions                  // vuex 异步执行主文件  
    |           |--getters                  // vuex 计算属性文件    
    |           |--index                    // vuex 主入口文件(core module)  
    |           |--mutaions                 // vuex 修改state的文件  
    |           |--types                    // 对actions以及mutations中用的类型文件进行常量化定义  
    |    |--utils                           // 通用类库文件    
    |           |--echartInstance           // echats 实列化通用库文件  
    |           |-- Format                  // 通用格式文件  
    |    |--views                           // 视图文件目录    
    |    |--App.vue                         // html挂载vue文件     
    |    |--main.js                         // 入口主文件         
    |--.babelrc                             // babel配置文件    
    |--.gitignore                           // git忽略文件    
    |--index.html                           // html模板文件    
    |--package.json                         // 安装依赖文件    
    |--tsconfig.json                        // ts校验配置文件    
    |--webpack.config.config.js             // webpack配置文件    

### 安装 ###
 
 - npm install   // 安装依赖
 - npm run dev   // 启动


### 打包  ###
  - npm run build

### 分析  ###
 - npm run analysize

### treeShaking 在保持代码运行结果不变的前提下，去除无用的代码  ###
 - package.json  -> sideEffects:false值为 false 表示整个包都没有副作用
 - webapck      ->UglifyJSPlugin    
