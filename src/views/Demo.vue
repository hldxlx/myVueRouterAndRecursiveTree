<template>
   <div id="demo">
     <p>父组件使用了count</p>
     {{count}}
     <my-prop :count="count" @increament="handleChange"></my-prop>
   </div>
</template>

<script type="text/javascript">
  import myProp from '../components/my-prop'
  export default {
    data(){
      return{
        count:20
      }
    },
    methods:{
      handleChange(){
        this.count++
      }
    },
    components: {
      'my-prop': myProp
    }
  }
</script>

