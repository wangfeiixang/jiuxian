<template>
	<div class="content" >
		<ul>
			<li v-for="(item,key,index) in classify" v-bind:key="item.id"><a ><img  :src="item" alt=""></a></li>
			
		</ul>
		<p class="img">
			<img v-for="(item,key,index) in middle" v-bind:key="item.id"  :src="item" alt="">
		</p>
		<div class="news" >
			<a ><img :src="images" alt=""></a>
			<div class="swiper-container swiper-news">
				<div class="swiper-wrapper">
					<div class="swiper-slide swiper-no-swiping" v-for="(items,key,index) in data" v-bind:key="items.id"> <p v-text="items"></p> </div>
				</div>
			</div>
		</div>
		<div class="seckill">
			<h3>掌上秒拍</h3>
			<p id="time">距开始
				<span v-show="timeShow">
					<span class="hours"></span>:<span class="minutes"></span>:
					<span class="seconds"></span>
				</span>
				
			</p>
			<p class="more">
				更多商品的你来抢!<i></i>
			</p>
		</div>
		<div class="spikeWrap" >
			<div class="swiper-container swiper-goods">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item,key,index) in detail" v-bind:key="item.id">
						<img v-lazy="item.proImg" alt="">
						<span class="name">{{item.proName}}</span>
						<span class="new-price">¥{{item.proPrice}}</span>
						<span class="old-price">¥{{item.jxPrice}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'

	export default {
		data(){
			return{
				swiperNews:null,
				swiperGoods:null,
				timeShow:true,
				detail:null,
				list:null,
				classify:null,
				middle:null,
				news:null,
				images:null,
				data:null,
				timestamp:new Date().getTime(),
				time:{
					timer:null,
					now:null,
					day:null,
					hour:null,
					minute:null,
					second:null
				},
				pagenum:1,
				tabnum:1,
					

			}
		},
		mounted(){
			let that = this;

			this.axios('content.json',1);
			clearInterval(this.time.timer);

			Date.prototype.toLocaleString = function () {
				// console.log( this.getFullYear() )
				return this.getFullYear()+'-'+(this.getMonth()+1)+'-'+this.getDate()+' '+this.getHours()+':'+this.getMinutes()+':'+this.getSeconds()
			}
			
			//倒计时开启
			this.time.timer=setInterval(()=>{

					//console.log( that.getNowFormatDate(),that.countDown() )

					that.time.now = eval("new Date("+ that.getNowFormatDate().replace(/\D+/g,",")+")").getTime();  
					 //console.log( that.time.now )
					that.countDown()
			},1000)

			this.axios('https://m.jiuxian.com/m_v1/promote/qgajax.do?t='+this.timestamp+'&pagenum='+this.pagenum+'&tabnum='+this.tabnum,3);
			
			

			 
		},
		methods:{
			countDown(){//倒计时

				let dateYear =  new Date().toLocaleString();//截取日期
					dateYear=dateYear.slice(0,10);
					// console.log( new Date() )

				let dateHour = new Date().getHours();//小时

					if ( dateHour<=16 ) {
						dateHour=16;
					}

					if ( 16<dateHour && dateHour<=18 ) {
						dateHour=18;
					}

					if ( 18<dateHour && dateHour<=20 ) {
						dateHour=20;
					}

					if (20<dateHour && dateHour<=22 ) {
						dateHour=22;
					}

					if ( 22<dateHour && dateHour<=24 ) {
						dateHour=24;
					}

				let dateMinute = "0";//分钟
					// dateMinute = dateMinute>10?dateMinute:"0"+dateMinute;
				let dateSeconds = "0";//秒
					// dateSeconds = dateSeconds>10?dateSeconds:"0"+dateSeconds;

				let dateTime = dateYear+" "+dateHour+":"+dateMinute+":"+dateSeconds;//拼接字符串时间
				// let endDate = new Date(dateTime).getTime(); 
				//eval("new Date("+ dateTime.replace(/\D+/g,",")+")").getTime() 兼容苹果手机
				let endDate = eval("new Date("+ dateTime.replace(/\D+/g,",")+")").getTime(); 
				let endTime = document.getElementById("time");
				let hours = document.getElementsByClassName("hours")[0];
				let minutes = document.getElementsByClassName("minutes")[0];
				let seconds = document.getElementsByClassName("seconds")[0];
				// console.log( dateTime )

				if ( endDate < this.time.now ) {//判断活动是否结束
					this.timeShow = false;
					endTime.innerHTML = "正在抢购中"
				}else{
					//倒计时转换
					this.timeShow = true;
					var leftTime = parseInt(endDate-this.time.now)/1000;
					this.time.day=Math.floor(leftTime/(60*60*24)); 
					this.time.hour=Math.floor((leftTime-this.time.day*24*60*60)/3600); 
					this.time.minute=Math.floor((leftTime-this.time.day*24*60*60-this.time.hour*3600)/60); 
					this.time.second=Math.floor(leftTime-this.time.day*24*60*60-this.time.hour*3600-this.time.minute*60); 

					this.time.hour=this.time.hour<10?"0"+this.time.hour:this.time.hour;
					this.time.minute = this.time.minute<10?"0"+this.time.minute:this.time.minute;
					this.time.second = this.time.second<10?"0"+this.time.second:this.time.second;
					
					// console.log( this.time.hour,this.time.minute,this.time.second )
					hours.innerHTML = this.time.hour;
					minutes.innerHTML = this.time.minute;
					seconds.innerHTML = this.time.second;
					
					// console.log( "天数"+this.time.day+"小时:"+this.time.hour+"分钟:"+this.time.minute+"秒:"+this.time.second )
				}
				
				
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
									noSwiping : true,
									loop: true
								});
							},0)

						}else{

							if ( type==3 ) {
								that.detail = data.data.killProList; 
							} 
							
							if ( type==2 ) {

								data.data.killProList.forEach( (item,i)=>{
									// console.log(item)
									that.detail.push(item)
								})
								// console.log( "第二次请求触发",that.detail )
							} 

							setTimeout( ()=>{
								that.swiperGoods = new Swiper('.swiper-goods', {
									slidesPerView:'auto',
									spaceBetween: 0,
									lazyLoading : true
								});
								// console.log('swiperGoods update')
							},0)
							
						}
						
						
					})
					.catch( (error)=>{
						console.log(error)
					})
			},
			sliding(){
				this.pagenum ++;
				if ( this.pagenum==2 ) {
					// console.log( this.pagenum )
					this.axios('https://m.jiuxian.com/m_v1/promote/qgajax.do?t='+this.timestamp+'&pagenum='+this.pagenum+'&tabnum='+this.tabnum,2);
				} 
				
				
			},
			getNowFormatDate() {/*获取当前时间*/
				var date = new Date();
				var seperator1 = "-";
				var seperator2 = ":";
				var month = date.getMonth() + 1;
				var strDate = date.getDate();

				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}

				if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				}
				var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
						+ " " + date.getHours() + seperator2 + date.getMinutes()
						+ seperator2 + date.getSeconds();
				return currentdate;
			}
		},
		watch:{
			swiperGoods:{
				deep:true,
				handler(newVal,oldVal){
					// console.log('正在监听',newVal.activeIndex,this.detail.length)
					if ( this.detail.length<=10 && newVal.activeIndex==6 ) {
						let that = this;
						setTimeout( ()=>{
							that.sliding();
						},1000)
						
					}
				}
			},
			detail:{
				deep:true,
				handler(newVal,oldVal){
					// console.log( newVal )
				}
			}
		}
		
		
	}
</script>

 <style lang="scss" scoped>
	.content{
		width:100%;
		// height: 100%;
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
					display: flex;
					justify-content: center;
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

		.spikeWrap{
			.swiper-container {
				width: 100%;
				height: 100%;
			}
			.swiper-slide {
				text-align: center;
				background: #fff;
				padding: .5rem;
				width: 28%;
				img{
					display: block;
					width:100%;
				}

				image[lazy=loading] {
					display: block;
					width:100%;
					background: gold;
				}

				span{
					display: block;
					width: 100%;
					text-align: left;
				}

				.name{
					font-size:1.2rem;
					height: 3.2rem;
					width: 9rem;
					overflow: hidden;
					line-height: 1.6rem;
				}

				.new-price{
					color: #fc5a5a;
					font-size: 1.4rem;
					line-height: 1.4rem;
					margin-top: 5px;
				}

				.old-price{
					color: #999999;
					text-decoration: line-through;
				}
			}
		}
	}
</style>