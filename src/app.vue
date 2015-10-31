<style lang="stylus" src="./app.styl"></style>

<template lang="jade">
div#app.container-fluid
  login
</template>

<script>
import Login from './components/login.vue'

export default {
  data() {
    return {
      msg: 'Hello Lawyer'
    }
  },
  components: {
    Login
  }
}
</script>
