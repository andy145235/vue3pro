<template>

    <navegacion />
    <contenido />
  
  
    
    
  
  
  </template>
  
  <script>
  import navegacion from '@/components/navegacion.vue';
  import contenido from '@/components/contenido.vue';
  
  export default {
    name: 'HomeView',
    components: {
      navegacion
    },
    components:{
      contenido
    }
  
  }
  </script>