<template lang="pug">
.app-product
  <AppCheckbox checkboxType="default" />
  img(v-if="product.images.length" :src="product.images[0]")
  img(v-else src="../assets/images/default_image.jpg")
  .app-product__vendor-code
    <IconLink />
    span(class="app-product__vendor-code-value") {{ product.brand_id || 'Артикул отсутствует' }}
  span(class="app-product__brand") {{ product.brand_name || 'Нет бренда' }}
  span(class="app-product__title") {{ product.title }}
  span(class="app-product__balance") {{ product.quantity }}
  span(class="app-product__current-price") {{ product.price + ' &#8381'}}
  span(class="app-product__min-price") {{ product.min_price || 'Не установлена' }}
  span(class="app-product__max-price") {{ product.max_price || 'Не установлена' }}
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
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    deleteProduct () {
      console.log('delete product')
    }
  }
}
</script>
