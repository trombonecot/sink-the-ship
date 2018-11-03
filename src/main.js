import Vue from 'vue'
import GameBoard from './views/GameBoard.vue'

import App from './App.vue'
import Vuex from 'vuex';
import store from './store';
import Router from 'vue-router';


Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(Router);


const routes = [{
	name: 'board',
	path: '/',
	component: GameBoard
}];

const router = new Router({routes, mode: "abstract"});


new Vue({
  router,
  store: new Vuex.Store(store),
  components: {
    App
  },
  template: '<App />'
}).$mount('#app')
