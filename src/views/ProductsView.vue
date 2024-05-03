<template lang="pug">
main(class="app-products-page")
  <AppProductsHeader userEmail="user@email.ru" />
  <AppProductsPanel />
</template>

<script>
import AppProductsHeader from '@/components/AppProductsHeader.vue'
import AppProductsPanel from '@/components/AppProductsPanel.vue'

export default {
  name: 'ProductsView',
  components: {
    AppProductsHeader,
    AppProductsPanel
  }
}
</script>