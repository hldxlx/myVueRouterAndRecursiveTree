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

    <router-view />
  </div>
</template>
<script>
  export default {
    methods:{
      about(){
        this.$krouter.push('/about')
      }
    },
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
        }]
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
