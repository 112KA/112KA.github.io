// var $ = require("jquery");
// var Velocity = require('velocity-animate');
// var xx = require('../../xx/Core');

/*==========================================================================
	LOADED
==========================================================================*/
// (window.onload = function() {
// 	let foo = [1, 2, 3];
// // 		xx.internalLink();
// })();


// class A{
//   constructor(name){
//     this.name;
//   }
//   say() {
//     console.log(this.name)
//   }
// }
import Vue from 'vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)


import App from './components/App.vue'
import Deck from './components/Deck.vue'
import Tabs from './components/Tabs.vue'
import Navigation from './components/Navigation.vue'

import IndexPage from './pages/IndexPage.vue'
import RankerDeckPage from './pages/RankerDeckPage.vue'

Vue.component('deck', Deck);
Vue.component('tabs', Tabs);
Vue.component('navigation', Navigation);

const routes = [
  { path: '/', component: IndexPage },
  { path: '/ranker/', component: RankerDeckPage }
]

const router = new VueRouter({
	// mode: 'history',
	routes // `routes: routes` の短縮表記
})


let vm = new Vue({
	router,
  el: '#app',
  template: '<App/>',
  components: { App }
});


