<template>
	<div>


		HOLA:{{board}}
		<!---<table>
			<tr v-for="y in height">
				<Tile v-for="x in width"
						:y=y :x=x
						:discovered=board[y-1][x-1].discovered
						@tileClicked="discoverTile">
				</Tile>
			</tr>
		</table>-->

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
		props: {
			width: Number,
			height: Number
		},
		computed: {
			...mapState({
				board: state => state
			})
		},
		methods: {
			set: mapMutations(['set']).set,
			discoverTile( payload ) {
				this.board[payload.y-1][payload.x-1] = true;
			}
		}
	};
</script>

<style>
	table {
		margin: 0 auto;
	}
</style>

