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
//    props:["count"],
    props:{
      count:{
        type:[Number,String],
//        default:10,
        require:true,
        validator:function(value){
          return value > 10
        }
      }
    },
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
        this.num++;
        //通知父组件Demo.vue发生了改变
        this.$emit("increament")
      }
    }

  }
</script>
