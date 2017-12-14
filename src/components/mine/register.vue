<template>
	<div id="register">
		<my-head>用户注册</my-head>
		<div class="register-box">
			<div class="phone">
				<i></i><input type="text" placeholder="请输入手机号" v-model="phone" v-on:blur="phoneBlur">
				<p v-show="isPhone"><i class="error"></i>请输入手机号</p>
			</div>
			<div class="verify">
				<input type="text" placeholder="验证码"> <a ><img :src="src" alt=""  @click="change"></a>
				<span @click="change">换一张</span>
			</div>
			<div class="getVerify">
				<input type="text"  placeholder="请输入校验码"><button  @click="btn"  :class="[isGetverify?'change':'active']"  v-text="getVerify"></button>
			</div>
			<div class="password">
				<i></i><input type="text"  placeholder="请输入密码" v-model="password" v-on:blur="passwordBlur" >
				<p v-show="isPassword"><i class="error"></i>请输入密码</p>
			</div>
			<div class="again_password">
				<i></i><input type="text"  placeholder="再次输入密码" v-model="again_password" v-on:blur="again_passwordBlur">
				<p v-show="is_password"><i class="error"></i>请重新输入密码</p>
			</div>
			<mt-button type="danger" size="large" class="mtBtn" @click.native="register">确认注册</mt-button>
			<div class="absolut" v-show="isMessage">
				<mt-spinner :size="60" color="#ef4f4f"  :type="1"></mt-spinner>
				<p>{{message}}</p>
			</div>
		
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	
	export default {
		
		data(){
			return{
				phone:null,//手机号验证部分
				isPhone:false,
				rulePhone:/^\d{11}$/,
				rulePassword:/^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/,//密码验证部分
				password:null,
				isPassword:false,
				again_password:null,//第二次密码部分
				is_password:false,
				getVerify:'获取校验码',//获取校验码部分
				isGetverify:false,
				num:60,
				message:null,//注册后返回的信息
				isMessage:false,
				src:null,
				timestamp:null
			}
		},

		mounted(){
			this.timestamp = new Date( this.getNowFormatDate() ).getTime();
			this.src = "https://mlogin.jiuxian.com/captchaimg?t="+this.timestamp;
			// console.log( this.src )
			// this.register();

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

			change(){//更换验证码
				this.timestamp = new Date( this.getNowFormatDate() ).getTime();
				this.src = "https://mlogin.jiuxian.com/captchaimg?t="+this.timestamp;
				console.log( this.src )
			},

			register(){//注册账号
				// console.log( '这是注册',this.$router )
				// this.isMessage = !this.isMessage;
				let that = this;
				if ( this.phone ==null || this.password ==null ) {
					return;
				} 

				// console.log('发送数据')

				this.$axios.get('http://datainfo.duapp.com/shopdata/userinfo.php?',{
					params:{
						status:'register',
						userID:this.phone,
						password:this.password
					}
				 })
				.then( (data)=>{
					let type = data.data;
					//  console.log( type)
					switch( type ){
						case 0:that.message='用户名重名';that.isMessage=true;break;
						case 1:that.message='注册成功,2秒后跳转登录页面';that.isMessage=true;break;
						case 2:that.message='服务器炸了！！！';that.isMessage=true;break;
						default:that.isMessage=false;
					}

					setTimeout( ()=>{
						that.isMessage=false;
						if ( type==1 ) {
							that.$router.push({path: '/mine/login'});
						}
					},2000 )
					
				})
				.catch( (error)=>{
					console.log(error)
				})
			},

			phoneBlur(){//验证手机号
				if ( !this.rulePhone.test( this.phone ) ) {
					// console.log( "手机号验证error" )
					this.isPhone = true;
				} 
			},

			passwordBlur(){//验证手机密码
				if ( !this.rulePassword.test( this.password ) ) {
					// console.log( "手机号验证error" )
					this.isPassword = true;
				} 
			},

			again_passwordBlur(){//再次验证手机密码
				if ( this.password==this.again_password ) {
					// console.log( "手机号验证error" )
					this.is_password = false;
				} else{
					this.is_password = true;
				}
			},

			btn(e){//获取校验码
				// console.log(e.target.disabled=true)
				this.isGetverify = !this.isGetverify;
				// console.log(this.isGetverify)
				let timer = setInterval( ()=>{
					
					this.num--;
					this.getVerify = this.num+"秒后在获取";
					this.isGetverify = true;
					e.target.disabled = true;

					if ( this.num==0 ) {
						this.getVerify = '获取校验码';
						this.isGetverify = false;
						e.target.disabled = false;
						clearInterval(timer);
					} 
						
						
					
					
				},1000)
				
			}
			
		},
		
		watch:{
			phone(_new,_old){//验证手机号码
				if ( _new.length>=11  ) {
					// console.log('success')
					if ( this.rulePhone.test( _new ) ) {
						// console.log('success')
						this.isPhone = false;
					} else {
						// console.log('error')
						this.isPhone = true;
					}
					
				} 
				// console.log( rule.test( _new ) );
			},
			password(_new,_old){//验证密码
				
				if ( _new.length>=6  ) {
					// console.log('success')
					if ( this.rulePassword.test( _new ) ) {
						this.isPassword = false;
						if ( this.again_password  ) {
							this.again_passwordBlur()
						}
						
					} else {
						// console.log('error')
						this.isPassword = true;
					}
					
				} 
			},
			again_password(_new,_old){//再次验证密码

				if ( this.password.length == _new.length ) {

					if ( this.password == _new ) {
						// console.log( "密码正确" )
						this.is_password = false;
					} else {
						// console.log( "密码错误" )
						this.is_password = true;
					}
					
				} else if(  this.password.length<_new.length ){
					this.is_password = true;
				}

				
				
				
			}

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
					color: #fff;
					width: auto;
					height:4rem;
					line-height:4rem;
					float: right;
					border-radius: 5px;
					color: #ffffff;
					padding: 0 15px;
				}

				button.active{
					background: #df3832;
				}

				button.change{
					background: #827b7b;
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

			.mtBtn{
				font-size: 1.6rem;
			}

			.absolut{
				position:absolute;
				// width: 12rem;
				height: 6rem;
				left: 0;
				top:0;
				right: 0;
				bottom:0;
				margin: auto;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				z-index: 999;
				p{
					font-size: 1.2rem;
					color:goldenrod;
				}
			}
		}
	}
</style>