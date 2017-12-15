
import myFooter from './footer.vue'
import myHead from './head.vue'
import listHead from './list-head.vue'

const MyUI = {
	install:(Vue)=>{
		Vue.component('my-footer',myFooter);
		Vue.component('my-head',myHead);
		Vue.component('list-head',listHead);
	}
}

export default MyUI