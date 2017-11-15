<template>
	<div id="main" >
		<my-header :scroll="scroll"></my-header>	
		<my-banner></my-banner>	
		<my-content></my-content>
		<my-meeting></my-meeting>
		<my-infinite></my-infinite>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import Vue from 'vue'
	import myHeader from './header'
	import myBanner from './banner'
	import myContent from './content'
	import myMeeting from './paymeeting'
	import myInfinite from './infinite'
	
	let Main = {
		data(){
			return{
				scroll:null,
				type:null
			}
		},
		mounted(){
//			console.log(111)
//			console.log( this.$axios )
			window.addEventListener('scroll', this.menu)
		},
		methods:{
			menu(){
				this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
			}
		},
		components:{
			myHeader,
			myBanner,
			myContent,
			myMeeting,
			myInfinite
			
		}
		
	}

	export default Main;

</script>

 <style lang="scss" scoped>
	#main{
		width: 100%;
		height: 100%;
		// overflow-y: scroll;
	}


</style>