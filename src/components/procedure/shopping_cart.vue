<template>
  <div class="cart-module" id="shopcart">
    <ul v-if="cartList.length>0">
      <li v-for="products in cartList">
        <h3 v-html="products.id"></h3>
        <div>
          数量：<span v-html="products.quantification"></span>
        </div>
        <div>
          合计：{{(products.quantification)*(products.price-0)}}
        </div>
      </li>
      <li class="total-price">
        总价：{{cartTotal}}
      </li>
    </ul>
    <div v-else="cartList.length===0">
      your shopcart is empty
    </div>
  </div>
</template>
<script>
  import {mapState,mapGetters} from 'vuex';
  export default {
    computed:{
      ...mapState({
        cartList: state => state.cart.shopcartList
      }),
      ...mapGetters('cart',{
        cartTotal: 'cartTotal'
      })
    }
  }
</script>
<style>

</style>
