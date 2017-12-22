<template>
  <div id="app">
		<keep-alive>
				<router-view/>
		</keep-alive>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
	  name: 'app',
	  data(){
		  return{}
	  },
	  methods:{
		  /*let num = 1;
			let promise = new Promise(function(resolve, reject) {//使用promise的基本方法
				setTimeout( ()=>{
					num++;
					console.log( num )
					if ( num>1 ){
						resolve(2);
					} else {
						reject(error);
					}
				},1000 )
					// ... some code
			});

			promise.then(function(value) {
				// success
				console.log( "success",value )
			}, function(error) {
				// failure
				console.log( "error" )
			}); */

			/* var getJSON = function(mehods,url) {//promise封装的ajax方法
				var promise = new Promise(function(resolve, reject){
					var client = new XMLHttpRequest();
					client.open(mehods, url);
					client.onreadystatechange = handler;
					client.responseType = "json";
					client.setRequestHeader("Accept", "application/json");
					client.send();
					function handler() {
						if (this.readyState !== 4) {
							return;
						}
						if (this.status === 200) {
							resolve(this.response);
						} else {
							reject(new Error(this.statusText));
						}
					};
				});
				return promise;
			};

			getJSON("get","https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=1").then(function(json) {
				console.log(json);
			}, function(error) {
				console.error('出错了', error);
			}); */

	  }
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

.swiper-detail .swiper-pagination-bullet{
	background: #ccc;
}

.swiper-detail .swiper-pagination-bullet-active{
	background: red;
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

	.mint-indicator-wrapper{
		padding: 1rem !important;
		.mint-indicator-text{
			font-size: 1.4rem;
		}
		
	}
</style>
