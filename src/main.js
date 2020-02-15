import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import 'styles/global.css'
import VueI18n from "vue-i18n";
//language
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: localStorage.getItem("lang") || "zh",
  messages: {
    zh: require("./assets/i18n/zh"),
    en: require("./assets/i18n/en")
  }
});
Vue.use(ElementUI);
new Vue({
    el: '#app',
    router,
    i18n,
    store,
    components: { App },
    template: '<App/>'
  })

  
//全局前置守卫做全局登陆权限控制
router.beforeEach((to,from,next)=>{
  if(to.matched.some(item=>item.meta.Auth)){  
    if(store.state.username){
      next()
    }else{
      next({
        path:'/'
      })
    }
  }else{
    next()
  }
})


//全局后置钩子
//页面滚动后默认进入的页面到顶端主要应用于移动端
// router.afterEach((to,from) => {  
//   window.scrollTo(0,0);
// })