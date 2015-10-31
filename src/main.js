var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var App = require('./app.vue');

var fork = new Vue({
  el: 'body',
  components: {
    app: App
  }
});

var router = new VueRouter();

router.start(fork);
