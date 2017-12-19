
<template>
	<header >
		<a @click="goBack" class="left"></a>
		<h2><slot></slot></h2>
		<a @click="openMenu" class="right"></a>
		<p v-show="isShow">
			<a href="#/main"> <i></i> 首页</a>
			<a href="#/mainPlace"> <i></i> 搜索</a>
			<a href="#/shopping"> <i></i> 购物车</a>
			<a href="#/mine/register"> <i></i> 我的酒仙</a>
		</p>
    </header>
		
</template>

<script>
	import Vue from 'vue'
	
	export default {
		data(){
			return{
				isShow:false
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			},
			openMenu(){
				this.isShow = !this.isShow;
			}
		},
		watch:{
			isShow(_new,_old){
			}
		}
	
       
		
	}
</script>

<style lang="scss" scoped>

	header{
		width: 100%;
		overflow: hidden;
		background-color: #de4943;
    	color: #fff;
		position: fixed;
		z-index: 999;
		top: 0;
		left:0;
		margin: auto;
		a.left,a.right{
			width: 30px;
			height: 40px;
			z-index: 999;
			position: absolute;
			top: 0;
			display: block;
		}

		a.left{
			background:url(/static/images/headBack.jpg) no-repeat center center;
			left:10px;
		}

		a.right{
			background:url(/static/images/headIcon.png) no-repeat;
			background-position:-150px 6px;
			right:10px;
		}

		h2{
			text-align: center;
			line-height: 40px;
		}

		p{
			width: 100%;
			height: 45px;
			background-color: #efefef;
			border-bottom: 1px solid #ccc;
			margin: auto;
			a{
				float: left;
				width: 25%;
				height: 100%;
				color: #848d96;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				position: relative;
				i{
					width: 26px;
					height: 20px;
					display: block;
					background:url(/static/images/headIcon.png) no-repeat;
					margin: 5px auto 0;
				}
				
			}

			a:first-child i{
				background-position: -3px -5px;
			}

			a:nth-child(2) i{
				background-position: -37px -5px;
			}

			a:nth-child(3) i{
				background-position: -72px -5px;
			}

			a:nth-child(4) i{
				background-position: -113px -5px;
			}
		}

	
	}

	/* header.primary{

	} */



</style>
