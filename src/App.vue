<template>
  <div id="app">
    <router-view/>
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
	height: 100%;
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
</style>
