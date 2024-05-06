<template lang="pug">
.app-product
  <AppCheckbox checkboxType="default" :isChecked="productChecked" @input="$emit('checkbox-input', $event)" />
  img(v-if="product.images.length" :src="product.images[0]")
  img(v-else src="../assets/images/default_image.jpg")
  .app-product__vendor-code
    <IconLink />
    span(class="app-product__vendor-code-value") {{ product.remote_id || 'Артикул отсутствует' }}
  span(class="app-product__brand") {{ product.brand_name || 'Нет бренда' }}
  span(class="app-product__title") {{ product.title }}
  span(class="app-product__balance") {{ product.quantity }}
  span(class="app-product__current-price") {{ product.price + ' &#8381'}}
  <AppPriceInput :currentPrice="product.min_price" @input="$emit('product-min-price-input', $event)" />
  <AppPriceInput :currentPrice="product.max_price" @input="$emit('product-max-price-input', $event)" />
  <IconDelete @delete="deleteProduct(product.id)" />
</template>

<script>
import AppCheckbox from '@/components/AppCheckbox.vue'
import IconLink from '@/components/icons/IconLink.vue'
import IconDelete from '@/components/icons/IconDelete.vue'
import AppPriceInput from '@/components/AppPriceInput.vue'

export default {
  name: 'AppProduct',
  components: {
    AppCheckbox,
    IconLink,
    IconDelete,
    AppPriceInput
  },
  props: {
    product: {
      type: Object,
      default: () => {}
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    productChecked () {
      return this.isChecked
    }
  },
  methods: {
    deleteProduct (id) {
      console.log('delete product with id: ' + id)
    }
  }
}
</script>
