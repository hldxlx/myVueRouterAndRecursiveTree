<template>
   <div id="demo">
     <p>父组件使用了count</p>
     {{count}}
     <my-prop :count="count" @increament="handleChange"></my-prop>

     <my-slot>
       <div slot="one">替换第一个</div>

       <div slot="three">替换第3个</div>

       <template slot="two">
         <div>替换第2个</div>
         <div>替换第2个ge</div>
       </template>

       <!--<div>替换无名的slot</div>-->

     </my-slot>

     <my-slot>
       <!--渲染的数据是父组件的数据-->
       {{msg}}
     </my-slot>
   </div>
</template>

<script type="text/javascript">
  import myProp from '../components/my-prop';
  import mySlot from '../components/slot'

  export default {
    data(){
      return{
        count:20,
        msg:"父组件的数据"
      }
    },
    methods:{
      handleChange(){
        this.count++
      }
    },
    components: {
      'my-prop': myProp,
      "my-slot":mySlot
    }
  }
</script>

