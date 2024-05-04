<template lang="pug">
main(class="app-products-page")
  <AppProductsHeader :userEmail="userEmail" />
  <AppProductsPanel />
</template>

<script>
import AppProductsHeader from '@/components/AppProductsHeader.vue'
import AppProductsPanel from '@/components/AppProductsPanel.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'ProductsView',
  components: {
    AppProductsHeader,
    AppProductsPanel
  },
  computed: {
    ...mapGetters(['userEmail'])
  }
}
</script>