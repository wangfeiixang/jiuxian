import Vue from 'vue'
// import HelloWorld from '@/components/HelloWorld'
import List from '@/components/list/list.vue'

describe.skip('List', () => {
  it('has a created hook', () => {
    // expect(typeof List.created).toBe('function');
    // console.log( List );
    const vm = new Vue(List).$mount()
    expect(vm.$el.querySelector('p').textContent)
      .toBe('加入购物车')
  });
  
 /*  it('should correctly set the msg when created', () => {
    const vm = new Vue(List).$mount()
    expect(vm.msg).toBe('bye');
    // expect(vm.$el.textContent).to.contain('数据');
  });

  it('renders the correct message', () => {
    const Constructor = Vue.extend(List)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toBe('bye!')
  }) */

 
})
