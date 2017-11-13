<template>
		<header  :class="[scroll>40?'fixed shake':'static bounceIn','animated']">
			<span class="logo"></span>
			<div class="search">
				<i></i>
				<input type="text">
				<span>搜索</span>
			</div>
		</header>
</template>

<script>
	import Vue from 'vue'
	export default {
		props:["scroll"],
		data(){
			return{

			}
		},
		mounted(){
//			console.log( this.$axios )
		},
		methods:{

		},

		
		
	}

	 

	
</script>

 <style lang="scss" scoped>
	header{
		    position: absolute;
			width: 100%;
			// background: #b6b6b6;
			color:#fff;
			padding: 6px 1rem;
			z-index: 10000;

			.logo{
				display: inline-block;
				width: 5.7rem;
				margin-left: 5px;
				height: 27px;
				background: url(../../assets/img/06.png) no-repeat;
    			background-size: 200px 73px;
			}
			.search{
				display: inline-block;
				position: relative;
				i{
					position: absolute;
					display: inline-block;
					width: 26px;
					height: 23px;
					background: url(../../assets/img/06.png) no-repeat -96px 0;
					top: 3px;
					left: 8px;
				}

				input{
					background: #fff;
					border: none;
					line-height: 27px;
					border-radius: 3px;
					padding-left: 30px;
					font-size: 13px;
					width:23rem;
					margin:0 .8rem 0 6px;
					color: #666666;
					font-family: "黑体";
					-webkit-box-sizing: border-box;
					box-sizing: border-box;
				}

			}
	}

	.static{
		position: absolute;
		opacity: 1;
		background:none;
	}
	.fixed{
		position: fixed;
		 background: #e5383b;
   		 opacity: 0.87;
	}

</style>