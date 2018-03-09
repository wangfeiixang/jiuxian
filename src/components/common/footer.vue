
<template>
	<footer>
       <ul>
           <li>
               <router-link to="/main"><img src="../../assets/img/01.png" alt=""></router-link>
           </li>
           <li>
               <router-link to="/classify"><img src="../../assets/img/02.png" alt=""></router-link>
           </li>
           <li>
               <router-link to="/mainPlace"><img src="../../assets/img/05.png" alt=""></router-link>
           </li>
           <li>
               <router-link  to="/shopping"><img src="../../assets/img/03.png" alt=""></router-link>
           </li>
           <li>
               <router-link  to="/mine/register"><img src="../../assets/img/04.png" alt=""></router-link>
           </li>
       </ul>
    </footer>
		
</template>

<script>
	import Vue from 'vue'
	
	export default {
		data(){
			return{
			}
		},
		
	}
</script>

<style lang="scss" scoped>
    footer{
        height: 42px;
        border-top: 1px solid #cccccc;
        background: #f1f1f1;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        ul{
            text-align: center;
            line-height: 42px;
            li{
                float: left;
                width: 20%;
                a{
                    img{
                        width: 42px;
                    }
                }
            }
        }
    }
</style>
