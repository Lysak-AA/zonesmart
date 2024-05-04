<template lang="pug">
main(class="app-products-page")
  <AppProductsHeader :userEmail="userEmail" />
  <AppProductsPanel :products="products" />
</template>

<script>
import AppProductsHeader from '@/components/AppProductsHeader.vue'
import AppProductsPanel from '@/components/AppProductsPanel.vue'
import { mapGetters } from 'vuex';
import { getProducts } from '@/api/index.js';

export default {
  name: 'ProductsView',
  components: {
    AppProductsHeader,
    AppProductsPanel
  },
  data () {
    return {
      products: [],
      totalCount: 0
    }
  },
  computed: {
    ...mapGetters(['userEmail'])
  },
  async mounted () {
    try {
      const response = await getProducts()
      console.log(response)
      this.products = response?.data?.results
      this.totalCount = response?.data?.count
    } catch (err) {
      console.warn(err.message)
    }
  }
}
</script>