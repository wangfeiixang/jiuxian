<template>
	<div id="classify">
		<my-head>选酒</my-head>
		<div class="search">
			<input type="search" placeholder="茅台"><button>搜索</button>
		</div>
		<ul>
			<li><router-link to="/list"><i></i><span>白酒</span></router-link></li>
			<li><router-link to="/list"><i></i><span>葡萄酒</span></router-link></li>
			<li><router-link to="/list"><i></i><span>洋酒</span></router-link></li>
			<li><router-link to="/list"><i></i><span>整箱购</span></router-link></li>
			<li><router-link to="/list"><i></i><span>老酒</span></router-link></li>
			<li><router-link to="/list"><i></i><span>清仓特卖</span></router-link></li>
			<li><router-link to="/list"><i></i><span>海外直采</span></router-link></li>
			<li><router-link to="/list"><i></i><span>精美大坛</span></router-link></li>
			<li><router-link to="/list"><i></i><span>红酒整箱</span></router-link></li>
			<li><router-link to="/list"><i></i><span>值得买</span></router-link></li>
			<li><router-link to="/list"><i></i><span>销量排行</span></router-link></li>
			<li><router-link to="/list"><i></i><span>礼尚往来</span></router-link></li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'
	
	export default {
		
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		mounted(){

        }
		
	}
	
	
	
</script>

<style lang="scss" scoped>
	 #classify{
		width: 100%;
		height: 100%;
		.search{
			width: 100%;
			margin-top: 4rem;
			padding: 0 5%;
			height: 50px;
    		background-color: #e2e2e2;
			input{
				width: 85%;
				height: 30px;
				line-height: 30px;
				margin-top: 10px;
				padding-left: 10px;
				box-sizing: border-box;
				vertical-align: 0;
			}
			button{
				width: 15%;
				border: none;
				background-color: #de4943;
				color: #fff;
				font-size: 14px;
				line-height: 30px;
				padding: 0 3px;
				text-align: center;
			}
		}

		ul{
			width: 100%;
			li{
				width: 33%;
				height: 80px;
				float: left;
				border-left: 1px solid #f6f6f6;
    			border-bottom: 1px solid #f6f6f6;
				padding-bottom:10px; 
				a{
					display: block;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					i{
						display: block;
						width: 36px;
						height: 36px;
						display: block;
						margin: 10px auto;
						background: url(/static/images/08.png) no-repeat;
					}

					span{
						display: block;
						width: 100%;
						text-align: center;
						color:#666;
					}
				}
			}

			li:first-child i{
				background-position: 0px 0px;
			}

			li:nth-child(2) i{
				background-position: -84px 0px;
			}

			li:nth-child(3) i{
				background-position: -165px 1px;
			}

			li:nth-child(4) i{
				background-position: 0px -70px;
			}

			li:nth-child(5) i{
				background-position: -84px -70px;
			}

			li:nth-child(6) i{
				background-position:-165px -70px;
			}

			li:nth-child(7) i{
				background-position:0 -141px;
			}

			li:nth-child(8) i{
				background-position:-84px -141px;
			}

			li:nth-child(9) i{
				background-position:-165px -141px;
			}

			li:nth-child(10) i{
				background-position:0 -217px;
			}

			li:nth-child(11) i{
				background-position:-84px -218px;
			}

			li:nth-child(12) i{
				background-position:-165px -217px;
			}

			
		}
	 }

</style>