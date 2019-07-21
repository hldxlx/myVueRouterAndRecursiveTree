import Vue from 'vue';
import Home from './views/Home.vue';
import About from './views/About.vue'
import KRouter from './kkb-router'
Vue.use(KRouter);
export default new KRouter({
  routes:[
    {
      path:'/',
      component:Home,
      // 进入路由之前的生命周期
      beforeEnter(from,to,next){
        console.log(`beforeEnter from ${from} to ${to}`);
        setTimeout(()=>{
          // 2秒之后再跳转
          // 做任何权限认证的事情
          next()
        },2000)
      }
    },
    {
      path:"/about",
      component:About
    }
  ]
});
