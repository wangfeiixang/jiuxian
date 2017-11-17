<template>
	<div id="infinite">
		<p class="h8"></p>
		<h3>爆款推荐</h3>
		<ul
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="loading"
			infinite-scroll-distance="10">
			<li v-for="(items,index,key) in list" v-bind:key="items.id" >
				<a >
					<span class="title"><i v-for="(item,index,key) in items.promo" v-bind:key="item.id"  :style="{background:item.backColor}"  v-text="item.name"></i></span>
					<img v-lazy="items.commonProductInfo.imgPath" alt="">
					<span class="content" v-text="items.commonProductInfo.pname"></span>
					<span class="price"><i>¥{{items.commonProductInfo.actPrice}}</i><i>¥{{items.commonProductInfo.jxPrice}}</i></span>
				</a>
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
				confirmBoolean:false,
				infiniteBoolean:false,
				list:[],
				loading:true,
				topicId:1165,
				isExist:true,
				pageNum:0
			}
		},
		mounted(){
//			console.log(111)
			// this.ajax()
			this.loadMore();
		},
		methods:{
			ajax(){
				let that = this;
				this.$axios.get('https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId='+this.topicId+'&pageNum='+this.pageNum)
					.then( (data)=>{

						if ( data.data.promoList ) {//当请求的接口有数据时
							that.isExist = true;
							if ( that.list.length>0 ) {
								data.data.promoList.forEach( ele => {//有新数据插入原来的数组
									// console.log(ele)
									that.list.push( ele )
								});
							} else {
								that.list = data.data.promoList;
							}

						} else{
							that.isExist = false;
							that.infiniteBoolean = false;
						}
						//  console.log(that.list.length)
					})
					.catch( (error)=>{
						console.log(error)
					})
			},
			loadMore() {

			  	setTimeout(() => {
					//  console.log( this.isExist )
					if ( this.list.length > 9 ) {
						this.infiniteBoolean = true
						this.confirmBoolean = false
					} else{
						this.confirmBoolean = true
					}
					
					if ( this.isExist ) {//当请求的接口有数据时
						this.pageNum++;
						this.ajax()
					} else{
						// console.log("不存在")
						this.infiniteBoolean = false;
						this.confirmBoolean = true;
					}
				  	//   console.log('正在加载',this.pageNum)
					this.loading = false;

			    },1000); 
			  
			}
		},
		watch:{
			list:{
				deep:true,
				handler(newVal,oldVal){
					// console.log( newVal.length,oldVal.length )
				}
			}
		}
		
		
	}
</script>

 <style lang="scss" scoped>
	
		#infinite{
			width: 100%;
			overflow: hidden;
			background: #f3f5f6;

			h3{
				line-height: 3.3rem;
				height: 3.3rem;
				text-align: center;
				color: #666666;
				font-size: 1.2rem;
				margin-top: 8px;
				background: #fff;
			}

			ul{
				width: 100%;
				overflow: hidden;
				li{
					width: 49.5%;
					background: #fff;
					float: left;
					position: relative;
					padding: 2rem 1rem .5rem;
					box-sizing: border-box;
					margin:.5% 0;
					a{
						width: 100%;
						display:block;
						span{
							display:inline-block;
						}

						span.title{
							position: absolute;
							height: 1.6rem;
							display: block;
							left: 5px;
							top: 5px;
							z-index: 100;
							i{
								display: inline-block;
								font-style: normal;
								color:white;
								line-height: 1.6rem;
								border-radius: 3px;
								padding: 0 3px;
							}

							i:first-child{
								margin-right: 5px;
							}

						}

						img{
							width: 100%;
							display: block;
						}

						span.content{
							display: block;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
							height: 3.2rem;
						}

						span.price{
							i{
								font-style: normal;
								display: inline-block;
							}

							i:first-child{
								font-size: 1.4rem;
								color: #fc5a5a;
								margin-right: 5px;
							}

							i:nth-child(2){
								color: #999;
								font-size: 1.2rem;
								text-decoration: line-through;
							}
						}

						
					}
				}

				li:nth-of-type(odd){
					margin-right: 1%;
				}
				li:nth-of-type(even){
					margin-right: 0;
				}

				span.infite-box{
					display: inline-block;
					width: 100%;
					text-align: center;
					margin: auto;
					margin-top: 5px;
					padding: 1rem  0  5rem;
					span{
						display: inline-block;
						vertical-align: -6px;
						margin-right: 3px;
					}
					
				}
				span.confirm{
					display: inline-block;
					width: 100%;
					text-align: center;
					margin: auto;
					padding: 1rem  0  5rem;
				}

			}
			
		}
	
    

</style>