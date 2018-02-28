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
			<h3>【京东配送，品质保证】 {{list.title}}</h3>
			<p class="title">【京东配送，品质保证】 {{list.title}}</p>
			<p class="price">
				<span class="new">￥{{list.price}}</span><span class="old">￥1533.00</span>
			</p>
			<p class="sale">
				<span class="orange">限时抢购</span>
			</p>
			<p class="background"></p>
			<div class="coupon">
				<span class="get">领券</span>	
				<span class="img">
					<img src="/static/images/con_1.png" ><span class="convert">满1212减123</span><img src="/static/images/con_2.png" class="img-padding">
					<img src="/static/images/con_1.png" ><span class="convert">满1212减123</span><img src="/static/images/con_2.png" class="img-padding">
					<img src="/static/images/con_1.png" ><span class="convert">满1212减123</span><img src="/static/images/con_2.png" >
				</span>
				<span class="right"></span>
			</div>
			<p class="background"></p>	
			<div class="address">
				<div class="count">
					<span>数量</span>
					<span class="input">
						<span @click="reduce">-</span><input id="count" type="text" placeholder="1"><span @click="add">+</span>
					</span>
				</div>
				<div class="goods">
					<span>送至</span>
					<span>北京</span><span>北京市</span><span>东城区</span>
					<p>有货，预计1-2天可到达</p>
				</div>
				<div class="hint">
					<span>提示</span>
					<span>此商品无原厂手提袋</span>
				</div>	
			</div>
			<p class="background"></p>	
			<div class="bigImg">
				<img src="/static/images/list13.jpg" >
				<img src="/static/images/list14.jpg" >
				<img src="/static/images/list15.jpg" >
				<img src="/static/images/list16.jpg" >
			</div>
		</div>
		<div class="footer">
			<ul>
				<li ><a ><img src="/static/images/list01.png" ></a></li>
				<li class="border-right"><a ><img src="/static/images/list02.png" ></a></li>
				<li ><a href="#/shopping"><img src="/static/images/list03.png" ></a><i v-show="shopping" id="shopping"></i></li>
				<li><a @click="addShopping">加入购物车</a></li>
				<li><a >立即购买</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {mapState,mapGetters,mapActions} from 'vuex'
	//加入购物车的信息提示框
	import { Indicator } from 'mint-ui';
	
	export default {
		
		data(){
			return{
				detail:null,//这是控制详情页面的swiper
				id:null,//传入的参数
				list:[],//获取单条数据
				oCount:null,//选择input元素
				oShopping:null,//选择i元素
				shopping:false,//选择i元素
				count:1,//商品的数量
				allCount:0,//这是总数量
				isMessage:true//显示弹出加入购物车的信息框

			}
		},
		computed:{
			...mapState({totalNum:'totalNum'})

		},
		mounted(){
			// console.log( this.$route.params.id )
			this.oCount = document.getElementById('count');
			this.oShopping = document.getElementById('shopping');
			this.oCount.value = this.count;
			this.id = this.$route.params.id;
			this.swiperDetail();
			this.ajax();
			// console.log( "mounted",this.totalNum )
			this.showGoodsNum();
			// if ( this.totalNum>0 ) {
			// 	this.shopping = true;
			// 	this.oShopping.innerHTML = this.totalNum;
			// } 

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
			},
			ajax(){
				let that = this;
				this.$axios.get('list.json')
				.then( (data)=>{
					data.data.list.forEach((ele,i)=>{
						// console.log(ele.number);
						if ( ele.number==that.id ) {
							// console.log('这个是符合条件',ele);
							that.list = ele;
						} else {
							return;
							// console.log('这个不是符合条件');
						}
					})
					// console.log( '这是商品',that.list )
				})
				.catch((error)=>{
					console.log('error',error)
				})
			},
			reduce(){//商品数量的减少
				// console.log('这是减')
				if ( this.count<=1 ) {
					this.count =1;
				} else {
					this.count--;
				}

				this.oCount.value = this.count;
			},
			add(){//商品数量的增加
				// this.oCount=document.getElementById('count');
				// this.lastCount = this.count;
				this.count++;
				this.oCount.value = this.count;
				
				// console.log('这是数量',this.count)

			},
			addShopping(){//加入购物车
				// this.showPopBox();
				// this.resolvePromise(); 
				let count = 0; //上一次总数量
				this.allCount += parseInt( this.oCount.value );
				count = parseInt( this.oCount.value );
				// console.log( "detail 加入购物车总数量",this.allCount,"上一次总数量",count );
				this.shopping = true;
				// this.oShopping.innerHTML = this.allCount;
				let detail = {
					count:this.allCount,
					lastCount:count,
					id:this.$route.params.id,
					el:this
				}

				// console.log( "detail goods",detail )
				this.$store.dispatch( "getNum",detail )
			},
			showPopBox(){//判断是否显示弹出框
				if ( this.isMessage ) {
					Indicator.open('购物成功');
				} else {
					Indicator.close();
				}
			},
			resolvePromise(){//处理异步问题
				let that = this;
				let num = 0;
				let promise = new Promise( (resolve, reject)=>{//使用promise的基本方法
					let timer = setInterval(()=>{
						num++;
						if ( num%2 === 0 ) {
							// console.log("running")
							Indicator.close();
							resolve();
						}else if(num>2){
							num = 0;
							clearInterval(timer);
						}
						// console.log( num )
					},1000)

				});

				promise.then(function() {
					that.isMessage = true;
					// console.log( "success" )
				}, function(error) {
					// that.showPopBox()
					console.log( "error" )
				}); 
			},
			showGoodsNum(){
				if ( this.totalNum>0 ) {
					this.shopping = true;
					this.oShopping.innerHTML = this.totalNum;
				} 
			}
			
		},
		watch:{
			totalNum(_new,_old){
				// console.log("watch"	,_new)
				this.oShopping.innerHTML = _new;
				this.showGoodsNum();
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
			margin-top: 4rem;
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
				overflow:hidden;
				text-overflow:ellipsis;
				white-space:nowrap;
				width: 100%;
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
				position: relative;
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

					img.img-padding{
						margin-right: 10px;
					}
				}

				span.right{
					display: inline-block;
					background: url(/static/images/catIcon.png) no-repeat 0 0;
					background-size: 150px;
					background-position: -130px -40px;
					width: 12px;
					height: 13px;
					position: absolute;
					z-index: 1;
					top: 15px;
					right: 10px;
				}
			}

			div.address{
				width: 100%;
				padding: 10px 10px 5px;
				span.input{
					margin-left: 10px;
					
					span,input{
						width: 22px;
						height: 22px;
						line-height: 22px;;
						display: inline-block;
						text-align: center;
						border: 1px solid #bfbfbf;
						vertical-align: middle;
						font-size: 14px;
					}

					input{
						width: 32px;
						height: 21px;
						border: 1px solid #bfbfbf;
						border-left:0;
						border-right: 0;
						vertical-align: -1px;
					}
					
				}
			}

			div.goods{
				span{
					display: inline-block;
				}

				span:nth-child(2){
					font-size: 13px;
					padding:0 5px 0 6px;
				}

				span:nth-child(3),span:nth-child(4){
					font-size: 13px;
					padding:0 5px;
				}

				p{
					color:red;
					font-size: 11px;
					margin: -18px 0 0 40px;
				}

			}

			div.hint{
				margin-top: -15px;
				span:nth-child(2){
					font-size: 12px;
					display: inline-block;
					margin-left: 5px;
				}
			}

			div.bigImg{
				width: 100%;
				padding: 2rem 1rem;
				
				img{
					width: 100%;
					display: block;
				}
			}
			
		}

		div.footer{
			width: 100%;
			background-color: #fafafa;
			position: fixed;
			height: 45px;
			bottom: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			ul{
				width: 100%;
				height: 100%;
				// overflow: hidden;
				li{
					float: left;
					width: 18%;
					height: 100%;
					a{
						display: block;
						text-align: center;
						margin-top: 2px;
						img{
							width:41px;
						
						}

					}
					
				}

				li.border-right{
					border: 1px solid #d5cfcf;
					border-top: 0;
					border-bottom: 0;
				}

				li:nth-child(3){
						position: relative;
						i{
							position: absolute;
							top: 3px;
							left: 50%;
							height: 14px;
							line-height: 14px;
							display: block;
							padding: 0 5px;
							color: #fff;
							border-radius: 7px;
							background-color: #fc5a5a;
							font-size: 8px;
							font-style: normal;
						}
				}

				li:nth-child(4),li:nth-child(5){
					width: 22%;
					a{
						line-height:45px;
						font-size: 1.4rem;
						color:#fff;
						padding: 0 6px;
					}
				}

				li:nth-child(4){
					width: 24%;
					a{
						background:#fc5a5a;
					}
				}

				li:nth-child(5){
					a{
						background:#3c3f51;
					}
				}
			}
		}
	}

</style>