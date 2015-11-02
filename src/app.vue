<style lang="stylus" src="./app.styl"></style>

<template lang="jade">
div#app.container-fluid
  #header
    a(v-link="{path:'/login'}") Login
    a(v-link="{path:'/search'}") Search
  router-view
</template>

<script>
import Login from './components/login.vue'

export default {
  data() {
    return {
      msg: 'Hello Lawyer'
    }
  }
}
</script>
