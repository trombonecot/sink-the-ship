<template>
  <div id="app">
    <h1>Sink the ship!</h1>
    <Board></Board>
  </div>
</template>

<script>
import Board from '../components/Board.vue';


  import { generate } from './BoardGenerator';
	import { createNamespacedHelpers } from 'vuex';
	const boardStore = createNamespacedHelpers('board');

export default {
  name: 'GameBoard',
  components: {
    Board
  },
  beforeRouteEnter(to, from, next) {
        const model = {
          board: generate(10,10,10),
          steps: 0,
          ship: 0,
          numShips: 10
        };

        next(vm => {
          vm.set(model);
        });
    },
    methods: {
			set: boardStore.mapMutations(['set']).set
		}

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
