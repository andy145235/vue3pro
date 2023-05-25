<template>
  <navegacion/>
  


</template>

<script>
// @ is an alias to /src
import HomeView from "@/views/HomeView.vue";
import navegacion from '@/components/navegacion.vue';

export default {
  name: 'App',
  components: {
    HomeView
  },
  components:{
    navegacion,
    HomeView
}
  
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
