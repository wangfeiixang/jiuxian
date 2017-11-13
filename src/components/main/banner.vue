<template>
	<div class="swiper-container swiper-banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,key,index) in list" :key="item.id"><img :src="item" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
	import Vue from 'vue'
	
	export default {
		data(){
			return{
				list:null,
				swiperBanner:null,
			}
		},
		mounted(){
//			console.log(111)
			let that = this;
			this.$axios.get('banner.json')
			     .then( (data)=>{
					 that.list = data.data.banner;
					//  console.log( that.list )
					 setTimeout( ()=>{
						 that.swiperBanner = new Swiper('.swiper-banner', {
							pagination: '.swiper-pagination',
							slidesPerView: 1,
							paginationClickable: true,
							autoplayDisableOnInteraction: false,
							spaceBetween: 0,
							autoplay: 1500,
							loop: true
						});
					 },0)
					 
				 })
				 .catch( (error)=>{
					  console.log(error)
				 })
		},
		
		
	}
</script>

 <style lang="scss" scoped>
	
	 .swiper-banner {
        width: 100%;
        min-height: 132px;
        margin-left: auto;
		margin-right: auto;
		.swiper-slide {
			text-align: center;
			font-size: 18px;
			background: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			img{
				width: 100%;
			}
		}
		.swiper-pagination{
			text-align: right;
		}
		

	}
	
	
    

</style>