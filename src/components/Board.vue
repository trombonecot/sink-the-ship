<template>
	<div>

		STEPS: {{game.steps}} <br> SHIPS: {{game.ships}}


		<div v-if="game.ships == game.numShips">
			YOU WIN!
		</div>

		<table>
			<tr v-for="y in height">
				<Tile v-for="x in width"
						:y=y :x=x
						:discovered=game.board[y-1][x-1].discovered
						:ship=game.board[y-1][x-1].ship
						@tileClicked="discoverTile">
				</Tile>
			</tr>
		</table>

		// TODO: boat icons<br/>
		// TODO: water icons / animations<br/>
		// TODO: generate longer boats<br/>
		// TODO: win component and freeze state<br/>
		// TODO: API to save scores<br/>
		// TODO: More attractive UI<br/>
	</div>
</template>

<script>
	import Tile from './Tile.vue';

	import { createNamespacedHelpers } from 'vuex';
	const { mapMutations, mapState } = createNamespacedHelpers('board');


	export default {
		components: {
			Tile
		},
		computed: {
			...mapState({
				game: state => state
			}),
			width() {
				return this.game.board[0].length
			},
			height() {
				return this.game.board.length
			}
		},
		methods: {
			set: mapMutations(['set']).set,
			discoverTile( payload ) {
				let newboard = this.game.board;

				if (!newboard[payload.y-1][payload.x-1].discovered && this.game.ships < this.game.numShips) {
					newboard[payload.y-1][payload.x-1].discovered = true;

					// TODO do it better
					let ships = this.game.ships;
					if ( newboard[payload.y-1][payload.x-1].ship ) {
						ships += 1;
					}

					const steps = this.game.steps + 1;

					this.set({board: newboard, steps: steps, ships: ships});
				}
			}
		}
	};
</script>

<style>
	table {
		margin: 0 auto;
	}
</style>

