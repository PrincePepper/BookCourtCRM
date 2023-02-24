<template>
    <div>
      <nav-bar/>
        <main class="app-content" :class="{full: true}">
            <div class="app-page">
                <router-view/>
            </div>
        </main>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  
  export default {
      name: 'empty-layout',
      components: {
          NavBar
      }
  }
  </script>
  
  <style lang="scss">
  
  .app-content {
      background: #f9e7c9;
  }
  
  </style>