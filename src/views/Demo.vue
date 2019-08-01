<template>
   <div id="demo">
     <my-prop :count="count"></my-prop>
   </div>
</template>

<script type="text/javascript">
  import myProp from '../components/my-prop'
  export default {
    data(){
      return{
        count:0
      }
    },
    components: {
      'my-prop': myProp
    }
  }
</script>

