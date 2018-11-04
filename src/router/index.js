import Vue from 'vue'
import Router from 'vue-router'
import GameBoard from '@/views/GameBoard';
import Board from '@/components/Board';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameBoard',
      component: GameBoard
    }
  ]
})