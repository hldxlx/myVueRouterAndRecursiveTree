<template>
  <div>
    这是slot组件

    <slot name="one"> <p> 第1</p></slot>
    <slot name="two"><p> 第11</p></slot>
    <slot name="three"><p> 第111</p></slot>

    <!--<slot>无名的slot</slot>-->
    {{msg}}
    <p>最后一个提醒</p>

    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'my-slot',
    data () {
      return{
        msg:"子组件的数据"
      }
    },
    methods:{

    }

  }
</script>
