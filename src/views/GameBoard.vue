<template>
  <div id="app">
    <h1>Sink the ship!</h1>
    <Board :width=3 :height=3></Board>
  </div>
</template>

<script>
import Board from './components/Board.vue';


export default {
  name: 'gameBoard',
  components: {
    Board
  },
  beforeRouteEnter(to, from, next) {

        const model = {
          board:  [
            [{ discovered: false, ship: false}, { discovered: false, ship: false}, { discovered: false, ship: false}],
            [{ discovered: false, ship: true}, { discovered: false, ship: true}, { discovered: false, ship: false}],
            [{ discovered: false, ship: false}, { discovered: false, ship: false}, { discovered: false, ship: false}]
          ],
          steps: 0
        };

        next(vm => {
          debugger
          vm.set(model);
        });
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
