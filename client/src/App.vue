<template>
  <div id="app">
    <Header></Header>
    <Banner></Banner>
    <Content></Content>
    <Bottom></Bottom>
    <Top></Top>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Top from './components/Top.vue'
import Content from './components/Content.vue'
import Bottom from './components/Bottom.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Top,
    Content,
    Bottom
  }
}


  
</script>
  
<style>
  body,p,ul,ol,h1,h2,h3,h4,dl,dd{margin: 0;}
  ul,ol{padding: 0; list-style: none;}
  a{text-decoration: none;}
  body{
    background-color: #F5F5F5;
  }
</style>
