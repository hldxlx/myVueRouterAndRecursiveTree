<template>
  <div id="app">
    <h1>
      哈喽啊 {{$kkbrouter}}
    </h1>
    <div id="nav">
      <button @click="about">about</button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <m-tree :data="treeList"></m-tree>

    <input type="button" value="切换到第1个组件" @click="tabComponent(1)"/>
    <input type="button" value="切换到第2个组件" @click="tabComponent(2)"/>
    <input type="button" value="切换到第3个组件" @click="tabComponent(3)"/>
    <keep-alive>
      <component :is="current"></component>
    </keep-alive>
    <router-view />
  </div>
</template>
<script>
  import Vue from 'vue';
  var custom1 = Vue.component('custom1',{
    template:`<div @click="changeDivbg">我是第1个组件</div>`,
    methods:{
      changeDivbg(ev){
        ev.target.style.background = "red";
      }
    }
  });
  var custom2 =Vue.component('custom2',{
    template:`<div>我是第2个组件</div>`
  });
  var custom3 =Vue.component('custom3',{
    template:`<div>我是第3个组件</div>`
  })
  export default {
    data(){
      return{
        treeList:[{
          title:"目录",
          children:[{
            title:"我的音乐",
            children:[{
              title:"周杰伦",
              children:[{
                title:"发如雪",
              }]
            },{
              title:"王杰",
              children:[{
                title:"一场游戏一场梦",
              }]
            }]
          },{
            title:"我的照片",
          }]
        }],
        current:custom1
      }
    },
    methods:{
      about(){
        this.$krouter.push('/about')
      },
      tabComponent(index){
        if(index === 1){
          this.current = custom1
        }else if(index === 2){
          this.current = custom2
        }else if(index === 3){
          this.current = custom3
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
