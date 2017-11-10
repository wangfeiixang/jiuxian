
import Vue from 'vue'

Vue.filter("sum", function(value) {   
	//全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
    return value + 10;  
}); 

Vue.filter("reduce", function(value) {   
	//全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
    return value - 1;  
});

Vue.filter("change",{   
   add:function(value){
// 	console.log( value )
   	let arr = [];
   	value.forEach( (val,i)=>{
// 		console.log(val)
   		arr.push(val+1)
   	} )
// 	  console.log( arr )
   	  return arr
   },
   redu:function(value){
   	   return value-2
   }
});


var evenNumbers = (value) => {
  if (!Array.isArray(value)) {
    return value
  }
//console.log( value )
  return value.filter(function (number) {
    return number % 2 === 0
  })
}
var capitalize = (value) => {
  if (!value) {
    return ''
  }
  value = value.toString()
//console.log( value )
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export { evenNumbers, capitalize }
