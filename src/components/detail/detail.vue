<template>
	<div id="detail">
		<my-head>商品详情</my-head>
		<div class="swiper-container swiper-detail">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="/static/images/detail01.jpg" ></div>
				<div class="swiper-slide"><img src="/static/images/detail02.jpg" ></div>
				<div class="swiper-slide"><img src="/static/images/detail03.jpg" ></div>
				<div class="swiper-slide"><img src="/static/images/detail04.jpg" ></div>
				<div class="swiper-slide"><img src="/static/images/detail05.jpg" ></div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
		</div>
		<div class="content">
			<h3>【京东配送，品质保证】 路易十四珍藏XO干邑白兰地</h3>
			<p class="title">【京东配送，品质保证】 路易十四珍藏XO干邑白兰地</p>
			<p class="price">
				<span class="new">￥533.00</span><span class="old">￥1533.00</span>
			</p>
			<p class="sale">
				<span class="orange">限时抢购</span>
			</p>
			<p class="background"></p>
			<div class="coupon">
				<span class="get">领券</span>	
				<span class="img">
					<img src="/static/images/con_1.png" alt=""><span class="convert">满1212减123</span><img src="/static/images/con_2.png" alt="">
				</span>
			</div>
			<p class="background"></p>	
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	
	export default {
		
		data(){
			return{
				detail:null,
			}
		},
		computed:{
			
		},
		mounted(){
			console.log( this.$route.params.id )
			this.swiperDetail();
			this.$axios.post('https://m.jiuxian.com/m_v1/goods/detailPromo/55511')
				.then( (data)=>{
					console.log(data.data)
				})
				.catch((error)=>{
					console.log('error',error)
				})
		},
		methods:{
			swiperDetail(){//手势滑动
				this.detail = new Swiper('.swiper-detail', {
					pagination: '.swiper-pagination',
					slidesPerView: 1,
					paginationClickable: true,
					autoplayDisableOnInteraction: false,
					spaceBetween: 0,
					autoplay: 1500,
					loop: true
				});
			}
			
		}
		
	}
	
	
	
</script>

<style lang="scss" scoped>
	#detail{
		width:100%;
		height: 100%;

		.swiper-container {
			width: 100%;
			height: 100%;
		}

		.swiper-detail .swiper-pagination-bullet{
			background: #ccc;
			opacity: .6;
		}
		
		.swiper-slide {
			text-align: center;
			font-size: 18px;
			background: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			img{
				width: 320px;
				display: block;
			}
		}

		.content{
			font-size: 15px;
			color: #252525;
			line-height: 35px;
			p.title{
				font-size: 13px;
				padding-left: 5px;
    			color: #fc5a5a;
			}

			p.price{
				margin:-10px 0 0 5px;
				span.new{
					display: inline-block;
					color: #fc5a5a;
					font-size: 19px;
					padding-right: 10px;
				}

				span.old{
					display: inline-block;
					font-size: 12px;
    				color: #999;
					text-decoration: line-through;
				}
			}

			p.sale{
				margin:-15px 0 0 10px;
				span{
					margin-right: 5px;
					font-size: 10px;
					display: inline-block;
					padding: 0 2px;
					color: #fff;
					height: 14px;
					line-height: 14px;
					border-radius: 2px;
				}

				span.orange{
					background-color: #ffa855;
				}
			}

			p.background{
				background-color: #f3f5f6;
				width: 100%;
				height: 8px;
			}

			div.coupon{
				line-height: 18px;
				padding: 12px 10px;
				span.get{
					display: inline-block;
					margin-right: 10px;
				}
				span.img{
					display: inline-block;
					// width: 90px;
					margin-right: 10px;
    				height: 18px;
					span.convert{
						display: inline-block;
						height: 16px;
						line-height: 16px;
						padding: 0 3px;
						text-align: center;
						border-bottom: 1px solid #fc5a5a;
						border-top: 1px solid #fc5a5a;
						font-size: 12px;
						color: #fc5a5a;
						background: #fff1f1;
					}

					img{
						width: 4px;
						transition: none;
					}
				}
			}
		}
	}

</style>