<template>
	<div id="shopping">
		<my-head>购物车</my-head>
		<div class="car">
			<h3> 
				<i class="not-check"></i><img src="/static/images/jx.png" > <span>酒仙自营</span>
			</h3>
			<ul>
				<li>
					<a >
						<i class="not-check"></i><img src="/static/images/list05.jpg" >
						<div class="content">
							<p class="title">41度梅赛宝威士忌酒正品洋酒高端威士忌700ML 送木礼盒</p>
							<p class="price">¥389.00</p>
							<p class="modify">
								<span class="modify-box">
									<span>-</span><input type="text" placeholder="1"><span>+</span>
								</span>
								<span class="right">删除</span>
							</p>
						</div>
					</a>
				</li>
				<li>
					<a >
						<i class="not-check"></i><img src="/static/images/list05.jpg" >
						<div class="content">
							<p class="title">41度梅赛宝威士忌酒正品洋酒高端威士忌700ML 送木礼盒</p>
							<p class="price">¥389.00</p>
							<p class="modify">
								<span class="modify-box">
									<span>-</span><input type="text" placeholder="1"><span>+</span>
								</span>
								<span class="right">删除</span>
							</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<div class="footer">
			
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	
	export default {
		data(){
			return{

			}
		},
		computed:{
		},
		methods:{
			
		}
	}
	
	
	
	
</script>

<style lang="scss" scoped>

	#shopping{
		width: 100%;
		height: 100%;
		// background-color: #f3f5f6;
		margin-top: 40px;
		.car{

			h3{
				width: 100%;
				height: 4.5rem;
				background: #fff;
				border: 1px solid rgb(236, 228, 228);
				border-left: 0;
				border-right: 0;
				padding:9px  10px;
				i{
					width: 25px;
					height: 25px;
					margin-right: 8px;
					display: inline-block;
					background: url(/static/images/shopping.png) no-repeat 0 0;
					background-size: 150px 150px;
				}

				.select-check{
					background-position: -2px -115px;
				}

				.not-check{
					background-position: -27px -115px;
				}

				img{
					width: 15px;
    				height: 15px;
					margin-right: 8px;
					vertical-align: -3px;
				}

				span{
					display: inline-block;
					font-size: 1.4rem;
    				color: #252525;
				}
			}

			ul{
				width: 100%;
				overflow: hidden;
				li{
					width: 100%;
					height: 10rem;
					border-bottom: 1px solid #d0d0d0;
					a{
						width: 100%;
						height:100%;
						padding: 10px; 
						i{
							width: 25px;
							height: 25px;
							margin-right: 8px;
							float: left;
							display: inline-block;
							background: url(/static/images/shopping.png) no-repeat 0 0;
							background-size: 150px 150px;
							margin-top: 3rem;
						}

						.select-check{
							background-position: -2px -115px;
						}

						.not-check{
							background-position: -27px -115px;
						}

						img{
							float: left;
							width: 8rem;
							border: 1px solid #bfc2c4;
						}

						.content{
							float: right;
							width: 21.8rem;
							overflow: hidden;

							p.title{
								width: 100%;
								height: 3.6rem;
								line-height: 18px;
								font-size: 1.4rem;
								color: #333;
								margin-bottom: 5px;
							}

							p.price{
								font-size: 12px;
    							color: #ff0000;
								margin-bottom: 5px;
							}

							p.modify{
								.modify-box{
									float: left;
									background-color: #f3f5f6;
									border: 1px solid #d0d0d0;
									height: 1.8rem;
									span{
										width: 2rem;
										display: inline-block;
										overflow: hidden;
										color: #666;
										height: 1.8rem;
										text-align: center;
										font-size: 16px;
										line-height: 1.6rem;
										
									}

									input{
										width: 3rem;
										display: inline-block;
										height: 1.7rem;
										line-height: 1.5rem;
										text-align: center;
										border-bottom: 1px solid #d0d0d0;
										
									}
								}

								span.right{
									float: right;
									display: inline-block;
									margin-right:1rem;

								}
							}
						}
					}
				}
			}
		}
	}



</style>