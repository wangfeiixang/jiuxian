<template>
  <div id="app">
		<keep-alive>
				<router-view/>
		</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
	width: 100%;
	overflow: hidden;
}

.swiper-pagination-bullet{
	width: 6px;
    height: 6px;
    opacity: 0.6;
	background: #fff ;
}

.swiper-pagination-bullet-active {
		opacity: 1;
		background: #fff ;
	}

	.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
		margin: 0 3px;
		
	}
	.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
			width:95%;
			bottom:5px;
	}

	img{
				transition:all 1s;
			}

	img[lazy=loading]{
		width: 100%;
		animation:fade 1s;
	}

	img[lazy=loaded]{
		animation:fade 1s;
	}

	@keyframes fade {
		0%{
			opacity: 0;
		}
		100%{
			opacity: 1;
		}
	}
</style>
