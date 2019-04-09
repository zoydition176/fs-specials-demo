<template>
<div id="productList">
  <ul class="productList">
    <li v-for="product in allProducts">
      <div :product-id="product.id">
        <h3>
          name:<span v-html="product.name"></span>
        </h3>
        <p v-html="product.price"></p>
        <div>
          num:
          <label :for="product.id">
            <input type="text" :value="product.quantification"/>
          </label>
        </div>
        <div>
          <button @click="addtoCart(product)">add to cart</button>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
  import {mapState,mapActions} from 'vuex';
  export default {
    computed:{
      ...mapState({
        allProducts: state => state.products.allProducts
      })
    },
    methods:{
      ...mapActions('cart',[
        'addtoCart'
      ])
    }
  }
</script>
<style>

</style>
