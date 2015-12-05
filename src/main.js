var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var App = require('./app.vue');
var Home = require('./components/user/home.vue');
var Login = require('./components/user/login.vue');
var Search = require('./components/user/search.vue');
var LawyerList = require('./components/user/lawyers.vue');
var LawyerDetail = require('./components/user/lawyer.vue');
var Questioning = require('./components/user/questioning.vue');

var router = new VueRouter();

router.map({
	"/" : {
		component:Home
	},
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
