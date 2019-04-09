import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import fsContent from '@/components/fscontent.vue'
import product_list from '@/components/singlepage/product_list.vue'
import shopping_cart from '@/components/procedure/shopping_cart.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    /*{
      path: '/products',
      name: 'product_list',
      component: product_list
    },*/
    {
      path: '/c/:product_type',
      name: 'fsContent',
      component: fsContent,
      children:[]
    },
    {
      path: '/shopping_cart',
      name: 'shopping_cart',
      component: shopping_cart
    }
  ]
})
