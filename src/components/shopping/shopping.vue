<template>
	<div id="shopping">
		<my-head>购物车</my-head>
		<div class="car">
			<h3> 
				<i @click="changeAll" :class="[isCheck?'select-check':'not-check']"></i><img src="../../assets/img/jx.png" > <span>酒仙自营</span>
			</h3>
			<ul>
				<li v-for="(items,index,key) in list" :key="items.id" >
					<a >
						<i @click="items.isCheck=!items.isCheck;chooseSingle(items.id,items.isCheck)" :class="[items.isCheck?'select-check':'not-check']"></i><img :src="items.img" />
						<div class="content">
							<p class="title">{{items.title}}</p>
							<p class="price">{{items.price}}</p>
							<p class="modify">
								<span class="modify-box">
								<span @click="reduceCount(items.id)">-</span><span id="singleCount">{{items.count}}</span><span @click="addCount(items.id)" >+</span>
								</span>
								<span class="right">删除</span>
							</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<div class="footer">
			<span class="allCheck">
				<i @click="changeAll" :class="[isCheck?'select-check':'not-check']"></i> <span>全选</span>
			</span>
			<span class="allMoney">
				<span>合计:</span><span>￥{{totalPrice}}</span>
			</span>
			<span id="accont" class="account" >结算(<span id="accontNum">{{totalNum}}</span>)</span>
			
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {mapState,mapGetters,mapActions} from 'vuex'
	
	export default {
		data(){
			return{
				isCheck:true,//全选按钮
				// totalNum:0
			}
		},
		computed:{
			...mapState({list:'goods',totalNum:'totalNum',totalPrice:'totalPrice'}),
			/* list:{ //这是解决v-model与vuex中改变store中某一个变量，用setter解决
				get: function () {
					return this.$store.state.goods;
				}
			},
			changeTotalNum:{
				get: function () {
                        return this.$store.state.totalNum;
                    },
				// setter
				set: function (newValue) {
					this.$store.state.totalNum = newValue;
				}
			}, */
		},
		mounted(){
			this.judgeColor(this.isCheck);
			// this.$data._list = this.list;
		},
		methods:{
			changeAll(){//选择所有
				this.isCheck = !this.isCheck ;
				this.$store.dispatch( "checkAll",this.isCheck );
			},
			chooseSingle(id,boolean){//选择单个
				// console.log("chooseSingle",id,boolean);
				let type = {
					id:id,
					boolean:boolean
				}
				this.$store.dispatch( "checkSingle",type );
			},
			judgeColor(type){ //更改结算样式
				
				let Oaccount  = document.getElementById("accont");
				let OaccontNum  = document.getElementById("accontNum");
				let num = OaccontNum.innerHTML;
				// console.log("更改结算样式",num,this.totalNum)
				if (  this.totalNum>0  ) {
					Oaccount.style.background="#fd5a5b"
				} else {
					Oaccount.style.background = "#d9d9d9";
				}
			},
			addCount(id){ //数量相加
				// console.log("购物车页面数量相加",id);
				this.$store.dispatch("addCount",id)
			},
			reduceCount(id){ //数量相减
				// console.log("购物车页面数量相减",id);
				this.$store.dispatch("reduceCount",id)
			}
		},
		watch:{
			isCheck(_new,_old){
				this.judgeColor(_new);
				// console.log("watch")
			},
			totalNum(_new,_old){
				//  console.log("watch",_new)
				this.judgeColor(_new);
			},
			list:{
				deep:true,
				handler(_new,_old){
					// console.log( _new )
					for (let i = 0; i < _new.length; i++) {
						// console.log( _new[i] );
						if ( _new[i].isCheck ) {
							this.isCheck = true;
						} else{
							this.isCheck = false;
							return;
						}
					}
				}
			},
			
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
					background: url(../../assets/img/shopping.png) no-repeat 0 0;
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
							background: url(../../assets/img/shopping.png) no-repeat 0 0;
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
									

									#singleCount{
										display: inline-block;
										height: 1.7rem;
										line-height: 1.7rem;
										background: #fff;
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

		div.footer{
			width: 100%;
			height: 5.1rem;
			position: absolute;
			border: 1px solid #bbbbbb;
			border-left: 0;
			border-right: 0;
			left: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 1.4rem;

			span.allCheck,span.allMoney,span.account{
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
			}

			span.active{
				background:#fd5a5b;
			}

			span.account{
				color: #fff;
   				background-color: #d9d9d9;
				font-size: 1.8rem;
			}

			span.allMoney span:first-child{
				color: #252525;
			}

			span.allMoney span:last-child{
				color: #ff3333;
			}

			i{
				width: 25px;
				height: 25px;
				margin-right: 8px;
				float: left;
				display: inline-block;
				background: url(../../assets/img/shopping.png) no-repeat 0 0;
				background-size: 150px 150px;
				// margin-top: 3rem;
			}

			.select-check{
				background-position: -2px -115px;
			}

			.not-check{
				background-position: -27px -115px;
			}
		}
	}




</style>