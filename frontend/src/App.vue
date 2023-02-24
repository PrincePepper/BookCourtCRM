<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import SpecialLayout from './layouts/SpecialLayout.vue';

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty' || 'special') + '-layout'
    }
  },
  components: {
    EmptyLayout,
    MainLayout,
    SpecialLayout
  }
}

</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';

</style>
