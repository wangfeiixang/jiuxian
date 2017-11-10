<template>
	<div class="content" >
		<ul>
			<li v-for="(item,key,index) in classify" v-bind:key="item.id"><a ><img  :src="item" alt=""></a></li>
			
		</ul>
		<p class="img">
			<img v-for="(item,key,index) in middle" v-bind:key="item.id"  :src="item" alt="">
			<!-- <img src="../../assets/img/12.jpg" alt="">
			<img src="../../assets/img/13.jpg" alt=""> -->
		</p>
		<div class="news" >
			<a ><img :src="images" alt=""></a>
			<div class="swiper-container swiper-news">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(items,key,index) in data" v-bind:key="items.id"> <p v-text="items"></p> </div>
				</div>
			</div>
		</div>
		<div class="seckill">
			<h3>掌上秒拍</h3>
			<p>距结束
				<span class="hours"></span>:<span class="minutes"></span>:
				<span class="seconds"></span>
			</p>
			<p class="more">
				更多商品的你来抢!<i></i>
			</p>
		</div>
		 
	</div>
</template>

<script>
	import Vue from 'vue'
	
	export default {
		data(){
			return{
				swiperNews:null,
				list:null,
				classify:null,
				middle:null,
				news:null,
				images:null,
				data:null,
				time:{
					timer:null,
					now:null,
					day:null,
					hour:null,
					minute:null,
					second:null
				}
					

			}
		},
		mounted(){

				this.axios('content.json',1);

				clearInterval(this.time.timer);
				//倒计时开启
				// this.time.timer=setInterval(()=>{
						this.time.now = new Date().getTime(); 
						this.countDown()
				// },1000)
				
				// this.axios('https://m.jiuxian.com/m_v1/promote/qgajax.do?t=1510299473058&pagenum=1&tabnum=1');
				

			
			 
		},
		methods:{
			countDown(){//倒计时
				
				let dateYear =  new Date().toLocaleString();//截取日期
					dateYear=dateYear.replace("/","-").replace("/","-").slice(0,10)

				let dateHour = new Date().getHours();//小时
					dateHour = dateHour>10?dateHour:"0"+dateHour;
					
				let dateMinute = new Date().getMinutes();//分钟
					dateMinute = dateMinute>10?dateMinute:"0"+dateMinute;

				let dateSeconds = new Date().getSeconds();//秒
					dateSeconds = dateSeconds>10?dateSeconds:"0"+dateSeconds;

				let dateTime = dateYear+"  "+dateHour+":"+dateMinute+":"+dateSeconds;//拼接字符串时间

				console.log( dateTime )
				
				var endDate = new Date(dateTime).getTime(); 
				console.log( endDate )
				
				var leftTime = parseInt(endDate-this.time.now)/1000;
				this.time.day=Math.floor(leftTime/(60*60*24)); 
				this.time.hour=Math.floor((leftTime-this.time.day*24*60*60)/3600); 
				this.time.minute=Math.floor((leftTime-this.time.day*24*60*60-this.time.hour*3600)/60); 
				this.time.second=Math.floor(leftTime-this.time.day*24*60*60-this.time.hour*3600-this.time.minute*60); 

				this.time.hour=this.time.hour<10?"0"+this.time.hour:this.time.hour;
				this.time.minute = this.time.minute<10?"0"+this.time.minute:this.time.minute;
				this.time.second = this.time.second<10?"0"+this.time.second:this.time.second;
				
				let hours = document.getElementsByClassName("hours")[0];
				let minutes = document.getElementsByClassName("minutes")[0];
				let seconds = document.getElementsByClassName("seconds")[0];
				// console.log( this.time.hour,this.time.minute,this.time.second )
				hours.innerHTML = this.time.hour;
				minutes.innerHTML = this.time.minute;
				seconds.innerHTML = this.time.second;
				
				// console.log( "天数"+this.time.day+"小时:"+this.time.hour+"分钟:"+this.time.minute+"秒:"+this.time.second )
			},
			axios(url,type){
				let that = this;
				this.$axios.get(url)
					.then( (data)=>{//获取静态图片数据
						if ( type==1 ) {
							that.list = data.data;
							that.classify = that.list.classify;
							that.middle =  that.list.middle;
							that.news =  that.list.news;
							that.images = that.news.images;
							that.data = that.news.data;
							//  console.log(  that.list.classify )
							setTimeout( ()=>{
								that.swiperNews = new Swiper('.swiper-news',{
									direction: 'vertical',
									spaceBetween: 0,
									autoplay: 1000,
									loop: true
								});
							},0)

						}else{
							console.log( data.data )
						}
						
						
					})
					.catch( (error)=>{
						console.log(error)
					})
			}
		},
		watch:{
			/* time:{
				deep:true,
				handler(newVal,oldVal){
					
				}
			} */

		}
		
		
	}
</script>

 <style lang="scss" scoped>
	.content{
		width:100%;
		overflow: hidden;
		ul{
			width:100%;
			overflow: hidden;
			li{
				width:20%;
				float: left;
				height: 7.6rem;
				a{
					display: block;
					img{
						width:100%;
						vertical-align:bottom;
					}
				}
				
			}
		}
		p.img{
			width:100%;
			overflow: hidden;
			img:first-child{
				width:100%;
			}
			img{
				width:50%;
				float: left;
			}
		}
		.news{
			width:100%;
			position: relative;
			overflow: hidden;
			padding:.8rem 1rem;
			box-sizing: border-box;
			a{
				float: left;
				padding-right: 1rem;
				margin-right: 1rem;
				// vertical-align: middle;
				border-right: 1px solid #ededed;
				img{
					width: 8.3rem;
					height:2rem;
				}
			}

			div.swiper-container{
				float: left;
				height:2rem;
				width:23.5rem;
				.swiper-slide {
					height: 100%;
					text-align: center;
					display: -ms-flexbox;
					display: -webkit-flex;
					display: flex;
					-webkit-box-pack: center;
					-ms-flex-pack: center;
					-webkit-justify-content: center;
					justify-content: center;
					-webkit-box-align: center;
					-ms-flex-align: center;
					-webkit-align-items: center;
					align-items: center;
					p{
						width:23.5rem;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
				}

			}
			
		}

		.seckill{
			width: 100%;
			height: 3rem;
			padding: 0 1rem;
			position: relative;
			line-height: 3rem;
			border-bottom: 1px solid #ededed;
			h3{
				float: left;
				font-weight: bold;
				padding-right: .8rem;
			}
			p{
				float: left;
				span{
					background: #858585;
					width: 1.6rem;
					height: 1.6rem;
					color: #fff;
					border-radius: 2px;
					text-align: center;
					padding: 1px 2px;
				}
			}

			p.more{
				float: right;
				color: #999;
				font-size: 1.2rem;
					
				i{
					display: inline-block;
					vertical-align:middle;
					margin-left: 5px;
					width: 14px;
					height: 13px;
					background: url(../../assets/img/06.png) no-repeat  -88px 0px;
					background-size: 200px 73px;
				}
			}
		}
	}
</style>