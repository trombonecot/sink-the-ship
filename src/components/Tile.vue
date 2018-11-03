<template>
	<td>
		<div :class="tileClasses" v-on:click="onClicked">{{discovered}}</div>
	</td>
</template>

<script>
	export default {
		props: {
			x: Number,
			y: Number,
			discovered: Boolean,
			type: String
		},
		computed: {
			tileClasses() {
				return this.discovered ? "discovered" : "";
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
		background: lightBlue;
		margin: 1px;
	}
	div.discovered {
		background:red;
	}
</style>

