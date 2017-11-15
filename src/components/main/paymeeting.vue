<template>
	<div id="meeting">
		<ul>
			<li v-for="(item,key,index) in meeting" v-bind:key="item.id" >
				<a><img v-lazy="item" alt=""></a>
			</li>
		</ul>
		<div class="pictureBox">
			<img v-for="(item,key,index) in pictureBox" v-bind:key="item.id" v-lazy="item">
		</div>
		<div class="swiper-container swiper-wine" >
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,key,index) in wineBox" v-bind:key="item.id">
					 <img v-lazy="item">
				</div>
			</div>
		</div>
		<div class="classify" v-for="(items,key,index) in classify" v-bind:key="items.id">
			<img  class="line" :src="items.title" alt="">
			<ul>
				<li v-for="(item,key,index) in items.img" v-bind:key="item.id" >
					<a ><img v-lazy="item"></a>
				</li>
			</ul>
			
		</div>
		<div class="spirit" v-for="(items,key,index) in spirit" v-bind:key="items.id">
			<img class="line" :src="items.title" alt="">
			<ul>
				<li><a ><img :src="items.big_img"></a></li>
				<li>
					<a v-for="(item,key,index) in items.img" v-bind:key="item.id"><img :src="item"></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'

	export default {
		data(){
			return{
				meeting:null,
				pictureBox:null,
				wineBox:null,
				classify:[],
				spirit:[],
				swiperWine:null
			}
		},
		mounted(){
//			console.log( this.$axios )
			// console.log( VueLazyload )
			let that = this;
			this.$axios.get('paymeeting.json')
			     .then( (data)=>{
					 that.meeting = data.data.meeting;
					 that.pictureBox = data.data.pictureBox;
					 that.wineBox = data.data.wineBox;
					 that.classify = data.data.classify;
					 that.spirit = data.data.spirit;
					//  console.log( that.meeting, that.pictureBox,that.wineBox )
					setTimeout( ()=>{
						that.swiperWine = new Swiper('.swiper-wine', {
							slidesPerView: 'auto',
							spaceBetween: 0,
						});
					},0)
					 
				 })
				 .catch( (error)=>{
					  console.log(error)
				 })

			
		},
		methods:{

		},

		
		
	}

	 

	
</script>

<style lang="scss" scoped>

	#meeting{
		width: 100%;
		// height: 100%;
		ul{
			li{
				a{
					width: 100%;
					display: block;
					img{
						width: 100%;
					}
					
				}
			}
		}
		.pictureBox{
			width: 100%;
			overflow: hidden;
			img:first-child{
				border-right:1px solid #e8e5e5; 
			}

			img:nth-child(2){
				border-bottom: 1px solid #e4dbdb;
			}

			img{
				width:50%;
				float: left;
			}

			img[lazy=loading]{
				width: 50%;
			}
		}

		.swiper-container {
			width: 100%;
			height: 100%;
			.swiper-slide {
				text-align: center;
				width: 33%;
					img {
					width:100%;
					height: 8.5rem;
					display: block;
				}
			}
		
		}

		.classify{
			width: 100%;
			height: 100%;
			.line{
				width: 100%;
				display: block;
				border-bottom: 1px solid #f1eeee;
			}
			ul{
				width: 100%;
				overflow: hidden;
				li{
					float: left;
					width: 33%;
					
				}
				li:first-child,li:nth-child(2){
					width: 50%;
					img{
						border-bottom: 1px solid #f1eeee;
					}
				}
			}
		}

		.spirit{
			width: 100%;
			height: 100%;
			.line{
				width: 100%;
				display: block;
				border-bottom: 1px solid #f1eeee;
				border-top: 1px solid #f1eeee;
			}
			ul{
				width: 100%;
				overflow: hidden;
				li{
					width: 100%;
					height: 100%;
					float: left;
					a{
						width: 100%;
						height: 100%
					}
				}

				li:first-child{
					width: 39%;
					border-right: 1px solid #fef9f9;
				}

				li:nth-child(2){
					width: 61%;
					a{
						float: left;
					}

					a:first-child{
						 border-bottom: 1px solid #f1eeee;
					}

					a:nth-child(2),a:nth-child(3){
						width: 50%;
						border-right: 1px solid #fef9f9;
						
					}
				}
			}
		}

			
			
		
		
	}
 
	
</style>