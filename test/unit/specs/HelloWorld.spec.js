import Vue from 'vue';
import SideHome from '@/components/side-home';

describe('side-home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SideHome);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.home h1').textContent)
      .toEqual('Welcome to Your Vue.js App');
  });
});
