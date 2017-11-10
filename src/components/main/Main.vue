<template>
	<div id="main">
		<my-header></my-header>	
		<my-banner></my-banner>	
		<my-content></my-content>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import Vue from 'vue'
	import myHeader from './header'
	import myBanner from './banner'
	import myContent from './content'
	
	export default {
		data(){
			return{
			}
		},
		mounted(){
//			console.log(111)
//			console.log( this.$axios )
			
		},
		methods:{
		},
		components:{
			myHeader,
			myBanner,
			myContent,
			
		}
		
	}
</script>

 <style lang="scss" scoped>
	#main{
		width: 100%;
		height: 100%;
	}


</style>