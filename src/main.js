var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var App = require('./app.vue');
var Search = require('./components/search.vue');
var Login = require('./components/login.vue');
var LawyerList = require('./components/lawyers.vue');
var LawyerDetail = require('./components/lawyer.vue');
var Questioning = require('./components/questioning.vue');

var router = new VueRouter();

router.map({
	"/search":{
		component:Search
	},
	"/login":{
		component:Login
	},
	"/lawyers":{
		component:LawyerList
	},
	"/lawyers/:id":{
		component:LawyerDetail
	},
	"/questioning":{
		component:Questioning
	},

});

router.start(App,"#lawyer");
