<template>
	<div id="list">
		<list-head>商品列表</list-head>
		<ul class="tab">
			<li><a @click="change('综合')" :class="[synthesize?'active':'']">综合</a></li>
			<li><a @click="change('销量')" :class="[judgeType==='销量'?'active':'']">销量</a></li>
			<li><a @click="change('价格')" :class="['price',judgeType==='价格'?'active':'']" >价格<i :class="[priceColor?'default':(rise?'goUp':'down')]"></i></a></li>
			<li><a @click="change('显示')" class="tab4"> <i :class="[isShow?'active':'']" ></i> </a></li>
		</ul>
		<ul
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="loading"
			infinite-scroll-distance="10" class="list-infinite">
			<li :class="[isShow?'half':'full']" v-for="(items,key,index) in list"  :key="items.id" >
				<!-- <router-link :to="{path:'/detail/'+110}"> -->
				<a :href="'#/detail/'+items.number">
					<img :src="items.img" >
					<div class="right">
						<p class="title">{{items.title}}</p>
						<p class="label">
							<span v-for="(item,index,key) in items.label"  :key="item.id" :class="[item==='限时抢购'?'orange':'blue']">{{item}}</span>
						</p>
						<p class="sale">￥{{items.price}}</p>
						<p class="content">
						<i v-show="items.content[0].type"></i><span>{{items.content[1].count}}</span><span>{{items.content[2].comment}}</span>
						</p>
					</div>
				</a>
				<!-- </router-link> -->
			</li>
			<span class="confirm" v-show="confirmBoolean">没有数据</span>
			<span class="infite-box" v-show="infiniteBoolean">
				<mt-spinner :type="0" color="#26a2ff" :size="18"></mt-spinner>加载中...
			</span>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'
	
	export default {
		data(){
			return{
				list:[],//存贮数据
				loading:true,
				confirmBoolean:false,
				infiniteBoolean:false,//显示加载按钮
				isExist:true,
				judgeType:null,
				synthesize:true,//控制综合开关
				rise:false,//控制价格排序开关
				isShow:true,//控制显示布局开关
				support:null,//判断是否是自营
				arrSale:[],//销量数据
				priceColor:true,//控制价格排序颜色
				
			}
		},
		computed:{

		},
		mounted(){
			this.loadMore();
		},
		methods:{
			change(type){
				// console.log(111,type)
				switch(type){
					case '综合':this.judgeType=type;this.synthesize=!this.synthesize;this.priceColor=true;
					break;
					case '销量':this.judgeType=type;this.synthesize=false;this.sales();this.priceColor=true;
					break;
					case '价格':this.judgeType=type;this.rise =! this.rise;this.priceColor=false;this.synthesize=false;this.changePrice();
					break;
					case '显示':this.judgeType=type;this.isShow =! this.isShow;this.synthesize=false;this.priceColor=true;
					break;
				}

				// console.log( this.judgeType )
				
			},
			ajax(){//请求数据
				let that = this;
				this.$axios.get('list.json')
				.then( (data)=>{
					if ( data.data.list ) {//当请求的接口有数据时
						that.isExist = true;
						if ( that.list.length>0 ) {
							data.data.list.forEach( ele => {//有新数据插入原来的数组
								// console.log(ele)
								that.list.push( ele )
							});
						} else {
							that.list = data.data.list;
						}

					} else{
						that.isExist = false;
						that.infiniteBoolean = false;
					} 
					// console.log( that.list )
				})
				.catch( (error)=>{
					console.log(error)
				})
			},
			loadMore() {//无限滚动
				setTimeout(() => {
					//  console.log( this.isExist )
					if ( this.list.length > 9 ) {
						this.infiniteBoolean = true
						this.confirmBoolean = false
					} else{
						this.confirmBoolean = true
					}
					
					if ( this.isExist ) {//当请求的接口有数据时
						this.ajax()
					} else{
						// console.log("不存在")
						this.infiniteBoolean = false;
						this.confirmBoolean = true;
					}
				  	//   console.log('正在加载',this.pageNum)
					this.loading = false;

			    },1000); 
			},
			sales(){//销量排序
				// console.log('这是销量',this.list);

				this.list.sort( (a,b)=>{
					// console.log(a.title.length)
					return b.sale-a.sale;
				} )

				console.log(this.list);

				return this.list;
				
			},
			changePrice(){//价格排序
				// console.log('价格排序开关',this.rise);
				this.list.sort( (a,b)=>{
					if ( this.rise ) {
						return a.price-b.price;
					} else {
						return b.price-a.price;
					}
					// console.log(a.title.length)
				} )
				// console.log(this.list);
				return this.list;
			}
		}
	}
	
	
	
	
</script>

<style lang="scss" scoped>

	#list{
		width: 100%;
		height: 100%;
	}

	.tab{
		width: 100%;
		overflow: hidden;
		height: 40px;
		border-bottom: 1px solid #f6f6f6;
		

		li{
			width: 25%;
			float: left;
			text-align: center;
			a{
				color: #252525;
				display: block;
				line-height: 40px;
				height: 40px;
				font-size: 1.4rem;

			}

			a.price{
				position: relative;
				i{
					position: absolute;
					width: 5px;
					height: 8px;
					display: inline-block;
					vertical-align: top;
    				margin: 16px 0 0 5px;
					background: url(/static/images/listIcon.png) no-repeat;
    				background-size: 100px 70px;
				}

				i.default{
					background-position: -23px 0px;
				}

				i.goUp{
					background-position: 0px 0px;
				}

				i.down{
					background-position: -12px 0px;
				}
			}

			a.tab4{
				position: relative;
				display: block;
				width: 85%;
				float: right;
				height: 20px;
				margin-top: 10px;
				border-left: 1px solid #e6e6e6;

				i{
					position: absolute;
					width: 24px;
					height: 24px;
					margin: -3px 0 0px -10px;
					background: url(/static/images/listIcon.png) no-repeat ;
					background-size: 100px 70px;
					background-position: 0 -45px;
				}

				i.active{
					background-position:-28px -45px;
				}
				
			}

			a.active{
				color: #fc5a5a;
			}
			
			
		}
	}

	.list-infinite{
		width: 100%;
		overflow: hidden;
		background: #eeeeee;
		
		li.half{
			width: 48%;
			float: left;
			background: #fff;
			margin: 5px 1% 0;
			a{
				display: block;
				width: 100%;
				height: 100%;
				color: #666;
				padding: 10px 0;
				
				img{
					width: 110px;
					height: 110px;
					margin: auto;
					display: block;
				}
			}

			p.title{
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
				font-size: 1.4rem;
				padding-left: 5px;
			}

			p.label{
				padding-top: 2px;
				margin-left: 5px;
				height: 38px;
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

				span.blue{
					background-color: #87aef1;
				}
			}

			p.sale{
				margin-left: 5px;
				height: 20px;
				line-height: 20px;
				margin-top: 8px;
				overflow: hidden;
				white-space: nowrap;
				font-size: 1.5rem;
				color: #fc5a5a;
			}

			p.content{
				margin-left: 5px;
				i{
					display: inline-block;
					width: 38px;
					height: 13px;
					margin-right: 10px;
					background: url(/static/images/listIcon.png) no-repeat;
					background-size: 100px 70px;
					background-position: -62px -15px;
				}

				/* i.support{
					background-position: -62px -15px;
				}

				i.plant{
					background-position: -62px -30px;
				} */
				
				span{
					color: #aaa;
					display: inline-block;
					font-size: 1rem;
				}

				span:nth-child(2){
					margin-right:10px;
				}
			}
			
		}
		

		li.full{
			background: #fff;
			width: 100%;
			overflow: hidden;
			padding-top: 15px;
			a{
				display: block;
				width: 100%;
				overflow: hidden;
				img{
					width: 110px;
					height: 110px;
					display: block;
					float: left;
				}
				div.right{
					margin-left: 110px;
					padding: 5px 0 5px 10px;
					border-bottom: 1px solid #e8e8e8;
					p.title{
						color: #000000;
						font-size: 1.4rem;
					}

					p.label{
						padding-top: 2px;
						margin-left: 2px;
						height: 38px;
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

						span.blue{
							background-color: #87aef1;
						}
					}

					p.sale{
						 height: 20px;
						line-height: 20px;
						margin-top: 8px;
						overflow: hidden;
						white-space: nowrap;
						font-size: 1.5rem;
    					color: #fc5a5a;
					}

					p.content{
						i{
							display: inline-block;
							width: 38px;
							height: 13px;
							margin-right: 10px;
							background: url(/static/images/listIcon.png) no-repeat;
    						background-size: 100px 70px;
							background-position: -62px -15px;
						}

						/* i.support{
							background-position: -62px -15px;
						}

						i.plant{
							background-position: -62px -30px;
						} */
						
						span{
							color: #aaa;
							display: inline-block;
							margin-right: 10px;
   						    font-size: 12px;
						}
					}
				}
			}
		}

		span.infite-box{
			background: #fff;
			display: inline-block;
			width: 100%;
			text-align: center;
			margin: auto;
			margin-top: 5px;
			padding: 1rem  0  1rem;
			span{
				display: inline-block;
				vertical-align: -6px;
				margin-right: 3px;
			}
			
		}
		span.confirm{
			background: #fff;
			display: inline-block;
			width: 100%;
			text-align: center;
			margin: auto;
			padding: 1rem  0  1rem;
		}
	}


</style>