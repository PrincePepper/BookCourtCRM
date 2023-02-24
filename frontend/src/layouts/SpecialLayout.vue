<template>
  <div>
    <nav-bar/>
      <main class="app-content" :class="{full: true}">
          <div class="app-page">
              <router-view/>
          </div>
      </main>
      <div class="fixed-action-btn">
          <a class="btn-floating btn-large deep-orange lighten-2" href="#">
              <i class="large material-icons">create</i>
          </a>
      </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'special-layout',
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