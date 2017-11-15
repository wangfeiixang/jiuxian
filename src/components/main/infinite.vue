<template>
	<div id="infinite">
		<p class="h8"></p>
		<h3>爆款推荐</h3>
		<ul
	  v-infinite-scroll="loadMore"
	  infinite-scroll-disabled="loading"
	  infinite-scroll-distance="10">
			<li >
				<a >
					<span class="title"><i >掌上秒拍</i><i>满得</i></span>
				</a>
			</li>
			<li >1</li>
			<li >1</li>
			<li >1</li>
			<li >1</li>
			<li >1</li>
			<li >1</li>
			<li >1</li>
			<li >1</li>
			<li >1</li>
			<li >1</li>
			<li >1</li>
			<li >1</li>
			<li >1</li>
			<li >1</li>
			<li >1</li>
			<li >1</li>
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
				list:null,
			}
		},
		mounted(){
//			console.log(111)
			this.ajax()
		},
		methods:{
			ajax(){
				let that = this;
				this.$axios.get('https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=1')
					.then( (data)=>{
						that.list = data.data.promoList;
						console.log(that.list)
					})
					.catch( (error)=>{
						console.log(error)
					})
			},
			loadMore() {
			  this.loading = true;
			  console.log('正在加载')
			  /* setTimeout(() => {
			  	console.log( this.list.length )
			  	if ( this.img.length >4 ) {
			  		
			  		this.infiniteBoolean = true
			  		this.confirmBoolean = false
			  	} else{
			  		this.confirmBoolean = true
			  	}
			    this.img.splice(this.img.length,this.img.length-1,'/static/images/3.jpg')
			    this.loading = false;
			  },500); */
//			  Indicator.open('正在加载');
			  
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
				li{
					width: 49.5%;
					background: #fff;
					float: left;
					overflow: hidden;
					position: relative;
					padding: 2rem 1rem .5rem;
					box-sizing: border-box;
					margin: 0 1% 1% 0;
					overflow: hidden;
					z-index: 1;
					a{
						display:block;

					}
				}
			}
			
		}
	
    

</style>