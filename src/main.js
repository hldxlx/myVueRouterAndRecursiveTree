// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('m-tree-list',{
  computed:{
    count(){
      var c = this.incrementCount;
      return ++c;
    },
    stylePadding(){
      return {
        'padding-left':this.count * 16 + 'px'
      }
    }
  },
  props:{
    incrementCount:{
      type:Number,
      default:0
    },
    data:{
      type:Array,
      default:[]
    }
  },
  template:`
  <ul>
        <li v-for="item of data">
          <div :style="[stylePadding]">
            <span>{{item.title}}</span>
            <span></span>
          </div>
          <!--如果循环的item有children属性,那么生成下一级-->
          <m-tree-list 
                :increment-count="count"
                v-if="item.children"
                :data="item.children"> 
          </m-tree-list>
        </li>
      </ul>
  `
})

Vue.component('m-tree',{
  props:{
    data:{
      type:Array,
      default:[]
    }
  },
  template:`
  <div class="tree-menu-com tree-menu">
      <m-tree-list :data="data"></m-tree-list>
  </div>
  `
})

Vue.component('my-cont',{
  props:["btnValue"],
  template:`
  <div>
      <input type="button" :value="btnValue">
  </div>
  `
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
