<template lang="pug">
main(class="app-products-page")
  <AppProductsHeader :userEmail="userEmail" />
  <AppProductsPanel :products="products" :totalCount="totalCount" :perPage="perPage" :currentPage="currentPage" :loading="loading" @change-page="changePage" />
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
      totalCount: 0,
      perPage: 10,
      currentPage: 1,
      loading: false
    }
  },
  computed: {
    ...mapGetters(['userEmail'])
  },
  watch: {
    currentPage: {
      async handler () {
        await this.fetchProducts()
      }
    }
  },
  async mounted () {
    await this.fetchProducts()
  },
  methods: {
    async fetchProducts () {
      try {
        this.loading = true
        const limit = this.perPage
        const offset = (this.currentPage - 1) * this.perPage
        const response = await getProducts(limit, offset)
        console.log(response)
        this.products = response?.data?.results
        this.totalCount = response?.data?.count
      } catch (err) {
        console.warn(err.message)
      } finally {
        this.loading = false
      }
    },
    changePage (page) {
      this.currentPage = page
    }
  }
}
</script>