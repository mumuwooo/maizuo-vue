<template>
  <div id="app">
      <mz-header></mz-header>
      <mz-nav></mz-nav>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default {
  name:"App",
  data(){
    return{
    }
  },
  methods:{

  },
  components:{
    "mz-header":Header,
    "mz-nav":Nav,
  }
}
</script>

<style>
*{margin: 0; padding: 0;list-style: none;}
html,body{width: 100%;height: 100%; font-size: 14px;}
a{text-decoration: none; color: #ccc};
.fl{float: left;}
.fr{float: right;}
#app{
  position: relative; width: 375px;height: 100%; 
  margin: 0 auto; background-color: #e1e1e1;
}
  
</style>
