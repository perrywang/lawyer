<style lang="stylus" src="./app.styl"></style>

<template lang="jade">
div#app.container-fluid(style="padding-top:4rem;")
  router-view
</template>

<script>
$('#menu').click(function(){
	alert("bangbangbang");
});

export default {
  data() {
    return {
      msg: 'Hello Lawyer'
    }
  }
}
</script>
