<template>
	<div>

		STEPS: {{game.steps}}

		<table>
			<tr v-for="y in height">
				<Tile v-for="x in width"
						:y=y :x=x
						:discovered=game.board[y-1][x-1].discovered
						@tileClicked="discoverTile">
				</Tile>
			</tr>
		</table>

		// TODO: state to preserve discovered tiles!<br/>
		// TODO: diferent icons for ship or no ship<br/>
		// TODO: autogenerate board with desired dimensions<br/>
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
				newboard[payload.y-1][payload.x-1].discovered = true;

				const steps = this.game.steps + 1;

				this.set({board: newboard, steps: steps});
			}
		}
	};
</script>

<style>
	table {
		margin: 0 auto;
	}
</style>

