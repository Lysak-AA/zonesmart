<template lang="pug">
.app-product
  <AppCheckbox checkboxType="default" />
  img(src="../assets/images/image.png")
  .app-product__vendor-code
    <IconLink />
    span(class="app-product__vendor-code-value") 987453647
  span(class="app-product__brand") Название бренда
  span(class="app-product__title") Название продукта
  span(class="app-product__balance") 10
  span(class="app-product__current-price") 1000
  span(class="app-product__min-price") 1000
  span(class="app-product__max-price") 3000
  <IconDelete @delete="deleteProduct" />
</template>

<script>
import AppCheckbox from '@/components/AppCheckbox.vue'
import IconLink from '@/components/icons/IconLink.vue'
import IconDelete from '@/components/icons/IconDelete.vue'

export default {
  name: 'AppProduct',
  components: {
    AppCheckbox,
    IconLink,
    IconDelete
  },
  methods: {
    deleteProduct () {
      console.log('delete product')
    }
  }
}
</script>
