<template>
	<div id="register">
		<my-head>用户注册</my-head>
		<div class="register-box">
			<div class="phone">
				<i></i><input type="text" placeholder="手机号" v-model="phone">
				<p v-show="isPhone"><i class="error"></i>请输入手机号</p>
			</div>
			<div class="verify">
				<input type="text" placeholder="验证码"> <a ><img :src="src" alt=""  @click="change"></a>
				<span @click="change">换一张</span>
			</div>
			<div class="getVerify">
				<input type="text"  placeholder="请输入校验码"><button>获取校验码</button>
			</div>
			<div class="password">
				<i></i><input type="text"  placeholder="请输入密码">
				<p><i class="error"></i>请输入密码</p>
			</div>
			<div class="again_password">
				<i></i><input type="text"  placeholder="再次输入密码">
				<p><i class="error"></i>请输入密码</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	
	export default {
		
		data(){
			return{
				phone:null,
				isPhone:false,
				getVerify:null,
				again_password:null,
				src:null,
				timestamp:null
			}
		},
		methods:{

			getNowFormatDate() {
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
			},

			change(){
				this.timestamp = new Date( this.getNowFormatDate() ).getTime();
				this.src = "https://mlogin.jiuxian.com/captchaimg?t="+this.timestamp;
				console.log( this.src )
			}
			
		},
		mounted(){
			this.timestamp = new Date( this.getNowFormatDate() ).getTime();
			this.src = "https://mlogin.jiuxian.com/captchaimg?t="+this.timestamp;
			// console.log( this.src )

        }
		
	}

</script>

<style lang="scss" scoped>
	#register{
		width: 100%;
		height: 100%;
		
		.register-box{
			padding: 25px 8% 0;
			width: 100%;
			height: 100%;
			
			i.error{
				width: 15px;
				height: 15px;
				display: inline-block;
				background: url(/static/images/loginIcon.png) no-repeat;
				
			}
			.phone{
				width: 100%;
				margin-bottom: 40px;
				position: relative;
				input{
					padding: 0  2.5rem 0 3.5rem;
					width: 100%;
					height: 4rem;
					border: 1px solid #cccccc;
					border-radius: 3px;
					font-size: 1.6rem
				}

				i{
					position: absolute;	
					display:inline-block;
					width: 20px;
    				height: 20px;
					background: url(/static/images/loginIcon.png) no-repeat;
					background-position: -138px -34px;
					left: 10px;
					top:10px;
				}

				p{
					float: right;
					color:#de4943;
					margin-top: 2px;
					font-size: 1.4rem;
					i{
						position: static;
						background-position: -202px -34px;
						vertical-align: -7px;
					}
				}
			}

			.verify{
				overflow: hidden;
				width: 100%;
				input{
					height: 4rem;
					width: 38%;
					border: 1px solid #cccccc;
					border-radius: 3px;
					margin-bottom: 4rem;
					float: left;
					padding-left:10px; 
				}

				a{
					height: 4rem;
					float: left;
					width: 11rem;
					// display: block;
					margin-left:3rem;
					img{
						height: 100%;
						width: 100%;
					}
				}

				span{
					float: right;
					height: 4rem;
					line-height: 4rem;
					vertical-align: 0;
				}
			}

			.getVerify{
				overflow: hidden;
				width: 100%;
				input{
					height: 4rem;
					width: 48%;
					border: 1px solid #cccccc;
					border-radius: 3px;
					margin-bottom: 4rem;
					float: left;
					padding-left:10px; 
				}
				button{
					outline: none;
					background: #df3832;
					color: #fff;
					width: auto;
					height:4rem;
					line-height:4rem;
					float: right;
					border-radius: 5px;
					color: #ffffff;
					padding: 0 15px;
				}
			}

			.password,.again_password{
				width: 100%;
				height: 4rem;
				border: 1px solid #cccccc;
				border-radius: 3px;
				margin-bottom: 40px;
				position: relative;
				input{
					width: 100%;
					height: 100%;
					padding: 0 2.5rem 0 3.5rem;
				}

				i{
					display:inline-block;
					position: absolute;
					width: 20px;
    				height: 20px;
					background: url(/static/images/loginIcon.png) no-repeat;
					background-position: -72px -34px;
					left: 10px;
					top:7px;
				}

				p{
					float: right;
					color:#de4943;
					margin-top: 2px;
					font-size: 1.4rem;
					i{
						position: static;
						background-position: -202px -34px;
						vertical-align: -7px;
					}
				}

			}
		}
	}
</style>