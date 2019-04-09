<template>
  <div id="fsContent">
    <productList></productList>
    <br>
    <cart></cart>
  </div>
</template>

<script>
  import productList from '@/components/singlepage/product_list.vue'
  import cart from '@/components/procedure/shopping_cart.vue'
  export default {
    components: {
      cart,
      productList
    }
  }
</script>

<style>

</style>
