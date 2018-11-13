<template>
	<td>
		<div :class="tileClasses" v-on:click="onClicked"></div>
	</td>
</template>

<script>
	export default {
		props: {
			x: Number,
			y: Number,
			discovered: Boolean,
			ship: Boolean
		},
		computed: {
			tileClasses() {
				return this.discovered ? ( this.ship ?  "discovered ship" : "discovered" ) : "";
			}
		},
		methods: {
			onClicked() {
				this.$emit("tileClicked", {x:this.x, y:this.y});
			}
		},
	};
</script>

<style scoped>
	td {
		padding: 0px;
		margin: 0px;
	}
	div {
		width: 30px;
		height: 30px;
		background: lightgrey;
		margin: 1px;
	}
	div.discovered {
		background:blue;
	}
	div.discovered.ship {
		background:red;
	}
</style>

