<template>
  <div id="app">
  	<app-header/>
    <router-view/>
  </div>
</template>

<script>
import appHeader from './components/Header.vue'

export default {
  name: 'app',
  components: {
    appHeader
  }
}
</script>

<style>
</style>
