<template>
  <div id="app">
    <Header/>
    <Search/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Search,
    Footer
  },
  //当组件挂载完毕，向服务器发送请求，根组件mounted只执行一次，子组件每次挂载都会向服务器发送请求
  mounted(){
    console.log("向vuex发送请求")
    this.$store.dispatch("homeOptions/categoryList")
  }
}
</script>

<style scoped lang="less">
#app {
    margin: 0;
    padding: 0;
    background-color: white;
}
</style>
