<template>
  <div id="app">
    <navigation ref="navigation"></navigation>
    <router-view></router-view>
  </div>
</template>


<script>


export default {
  name: 'app'
  , data() {
    return {
    }
  }

  , created() {
  }

  , mounted() {
  }

  , methods: {
  }
}
</script>


<style>
p {
  margin: 0; padding: 0;
}
.clearfix:after{
    content: "."; 
    display: block; 
    height: 0; 
    font-size:0;    
    clear: both; 
    visibility:hidden;
}
.clearfix{
    display: inline-block;
} 
/* Hides from IE Mac */
* html .clearfix{
    height: 1%;
}
.clearfix{
    display:block;
}
</style>