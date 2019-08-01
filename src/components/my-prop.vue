<template>
  <div>
    这是prop组件
    {{num}}
    <button @click="turn()">改变</button>
    {{theNum}}
  </div>
</template>

<script>
  export default {
    name: 'my-prop',
    props:["count"],
    data () {
      return {
        num:this.count
      }
    },
    computed:{
      theNum(){
        return this.num
      }
    },
    methods:{
      turn(){
        this.num++
      }
    }

  }
</script>
