
import myFooter from './footer.vue'
import myHead from './head.vue'

const MyUI = {
	install:(Vue)=>{
		Vue.component('my-footer',myFooter);
		Vue.component('my-head',myHead);
	}
}

export default MyUI