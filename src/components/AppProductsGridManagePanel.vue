<template lang="pug">
.app-product-grid-manage-panel
  span(class="app-product-grid-manage-panel__checked-counter") Выбрано 2 из 4
  button(class="app-product-grid-manage-panel__checked-delete")
    <IconDeleteSmall />
    span Удалить выбранные
  span(class="app-product-grid-manage-panel__price-manage-title") Для всех выделенных
  <AppPriceInput />
  <AppPriceInput />
</template>

<script>
import IconDeleteSmall from '@/components/icons/IconDeleteSmall.vue'
import AppPriceInput from '@/components/AppPriceInput.vue'

export default {
  name: 'AppProductsGridManagePanel',
  components: {
    IconDeleteSmall,
    AppPriceInput
  },
  computed: {
    price () {
      return '&#8381'
    }
  }
}
</script>