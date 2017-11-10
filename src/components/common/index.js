
import myFooter from './footer.vue'

const MyUI = {
	install:(Vue)=>{
		Vue.component('my-footer',myFooter);
	}
}

export default MyUI