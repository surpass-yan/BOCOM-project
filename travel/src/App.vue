<template>
	<div id="app">
		<router-view></router-view>
		<div>
			<router-link to="/counsel">1</router-link>
			<router-link to="/guide">2</router-link>
			<router-link to="/user">3</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app'
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
