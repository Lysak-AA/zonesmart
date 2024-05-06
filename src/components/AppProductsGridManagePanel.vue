<template lang="pug">
.app-product-grid-manage-panel
  span(class="app-product-grid-manage-panel__checked-counter") Выбрано {{ checkedAmount }} из {{ productsAmount }}
  button(class="app-product-grid-manage-panel__checked-delete", @click="$emit('delete-checked')")
    <IconDeleteSmall />
    span Удалить выбранные
  span(class="app-product-grid-manage-panel__price-manage-title") Для всех выделенных
  <AppPriceInput :currentPrice="minPrice" @input="minPriceInputHandler"  />
  <AppPriceInput :currentPrice="maxPrice" @input="maxPriceInputHandler"  />
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
  props: {
    checkedAmount: {
      type: Number,
      default: 0
    },
    productsAmount: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      minPrice: '',
      maxPrice: ''
    }
  },
  methods: {
    minPriceInputHandler (e) {
      this.minPrice = e.target.value
      this.$emit('min-price-input', e)
    },
    maxPriceInputHandler (e) {
      this.maxPrice = e.target.value
      this.$emit('max-price-input', e)
    }
  }
}
</script>