
<template>
<div class="header" scroll="no">
	<header >
		<a @click="goBack" class="left"></a>
		<h2><slot></slot></h2>
		<a @click="openMenu" class="right">筛选</a>
    </header>
	<div v-show="isShow" class="screen">
		<div class="mask">
			<span @click="closeMenu"></span>
		</div>
		<div class="content">
			<ul>
				<li class="first">
					<span class="server">服务</span> <span class="border">酒仙自营</span> <span class="border">CLUB会员专享</span>
				</li>
				<li>
					<span class="server">分类</span> <i></i> <span class="all">全部</span> 
				</li>
				<li>
					<span class="server">品牌</span> <i></i> <span class="all">全部</span> 
				</li>
				<li>
					<span class="server">价格</span> <i></i> <span class="all">全部</span> 
				</li>
				<li>
					<span class="server">类型</span> <i></i> <span class="all">全部</span> 
				</li>
				<li>
					<span class="server">产地</span> <i></i> <span class="all">全部</span> 
				</li>
				<li>
					<span class="server">酒精度</span> <i></i> <span class="all">全部</span> 
				</li>
				<li>
					<span class="server">净含量</span> <i></i> <span class="all">全部</span> 
				</li>
				<li>
					<mt-button class="button" size="small" type="danger">重置</mt-button><mt-button class="button" size="small" type="danger" @click="closeMenu">确定</mt-button>
				</li>
			</ul>
		</div>
	</div>
</div>
	
		
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
				this.isShow = true;
				if ( this.isShow ) {//禁止出现滚动条
					// console.log('这是判断正确与否'+this.isShow,document.body.style.overflowY)
					document.body.style.overflowY ="hidden";
				}
			},
			closeMenu(){
				this.isShow = false;
				if ( !this.isShow ) {
					document.body.style.overflowY ="";
				}
			}
		},
		watch:{
			isShow(_new,_old){

			}
		}
	
       
		
	}
</script>

<style lang="scss" scoped>

	div.header{
		width: 100%;
		// position: fixed;
		z-index: 999;
		position: fixed;
		left:0;
		top:0;
		overflow: hidden;
	}

	header{
		width: 100%;
		height: 100%;
		background-color: #de4943;
    	color: #fff;
	
		margin: auto;
		
		a.left,a.right{
			width: 30px;
			height: 40px;
			
			position: absolute;
			top: 0;
			display: block;
			font-size: 1.6rem;
		}

		a.left{
			background:url(/static/images/headBack.jpg) no-repeat center center;
			left:10px;
		}

		a.right{
			width: 45px;
			text-align: center;
			right:1.7rem;
			line-height: 40px;
		}

		h2{
			text-align: center;
			line-height: 40px;
			font-size: 1.6rem;
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

	div.screen{
		position: fixed;
		z-index: 999;
		width: 100%;
		height: 100%;
		div.mask{
			float: left;
			width: 20%;
			height: 100%;
			background: #000;
			opacity: .8;
			position: relative;
			span{
				display: block;
				width: 32px;
				height: 50px;
				position: absolute;
				top: 50%;
				left: 50%;
				background: url(/static/images/listIcon.png) no-repeat;
				background-position: -42px -30px;
				margin: -25px 0 0 -16px;
				
			}
		}

		div.content{
			float: left;
			width: 80%;
			height: 100%;
			background: #fff;
			ul{
				width: 100%;
				height: 100%;
				padding: 0 15px;
				li{
					width: 100%;
					height: 40px;
					line-height: 40px;
					border-bottom: 1px dotted #e8e8e8;
					padding-left: 1px;
					cursor: pointer;

					span.all{
						float: right;
						font-size: 14px;
					}

					span.server{
						float: left;
						font-size: 14px;
					}

					i{
						width: 6px;
						height: 12px;
						display: block;
						float: right;
						margin: 14px 0 0 5px;
						background: url(/static/images/listIcon.png) no-repeat;
						background-position: -30px -30px;
					}
				}

				li:last-child{
					border-bottom:0;
					.button{
						margin:15px 30px 0 0;
					}
				}

				li.first{
					height: 46px;
					line-height: 46px;
					border-bottom: 1px solid #c9c9c9;
					padding-left: 1px;
					cursor: pointer;
					// padding: 0 15px;
					span.border{
						float: left;
						display: inline-block;
						font-size: 12px;
						height: 16px;
						line-height: 16px;
						padding:0px 3px;
						color: #666;
						border: 1px solid #d9d9d9;
						border-radius: 3px;
						margin: 14px 0 0 10px;

					}
					
				}
			}
		}
	}




</style>
