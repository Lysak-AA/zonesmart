<template lang="pug">
.app-products-grid
  .app-products-grid__header
    <AppCheckbox checkboxType="line" :isChecked="checkedProducts.length > 0" @input="generalCheckboxHandler" />
    span(class="app-products-grid__header-item") Фото
    span(class="app-products-grid__header-item") Артикул продавца
    span(class="app-products-grid__header-item") Бренд
      <IconArrowDown />
    span(class="app-products-grid__header-item") Название
    span(class="app-products-grid__header-item") Остаток, шт
      <IconArrowDown />
    span(class="app-products-grid__header-item") Текущая цена
      <IconArrowDown />
    span(class="app-products-grid__header-item") Минимальная цена
      <IconArrowDown />
    span(class="app-products-grid__header-item") Максимальная цена
      <IconArrowDown />
    span(class="app-products-grid__header-item") Удалить
  <AppProductsGridManagePanel v-if="checkedProducts.length" :checkedAmount="checkedProducts.length" :productsAmount="products.length" @delete-checked="deleteCheckedProducts" @min-price-input="minPriceInputHandler" @max-price-input="maxPriceInputHandler" />
  <AppProduct v-if="products.length && !loading" v-for="product, index in populatedProducts" :key="product.id" :product="product" :isChecked="isProductChecked(product.id)" @checkbox-input="productCheckboxHandler($event, product.id)" @product-min-price-input="productMinPriceHandler($event, product.id)" @product-max-price-input="productMaxPriceHandler($event, product.id)"/>
  <AppProductSkeleton v-if="loading" />
  <AppPagination :pages="Math.ceil(totalCount / perPage)" :currentPage="currentPage" @change-page="$emit('change-page', $event)" />
</template>

<script>
import AppCheckbox from '@/components/AppCheckbox.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import AppProduct from '@/components/AppProduct.vue'
import AppProductsGridManagePanel from '@/components/AppProductsGridManagePanel.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppProductSkeleton from '@/components/AppProductSkeleton.vue'

export default {
  name: 'AppProductsGrid',
  components: {
    AppCheckbox,
    IconArrowDown,
    AppProduct,
    AppProductsGridManagePanel,
    AppPagination,
    AppProductSkeleton
  },
  props: {
    products: {
      type: Array,
      default: () => []
    },
    totalCount: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 10
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checkedProducts: [],
      populatedProducts: [],
    }
  },
  watch: {
    products: {
      handler () {
        this.populatedProducts = [...this.products]
      },
      deep: true
    }
  },
  methods: {
    generalCheckboxHandler (e) {
      e.preventDefault()
      if (e.target.checked) {
        this.checkedProducts = this.products.map(product => product.id)
      } else {
        this.checkedProducts = []
      }
    },
    productCheckboxHandler (e, id) {
      e.preventDefault()
      if (e.target.checked) {
        this.checkedProducts.push(id)
      } else {
        this.checkedProducts = this.checkedProducts.filter(productId => productId !== id)
      }
    },
    isProductChecked (id) {
      return !!this.checkedProducts.includes(id)
    },
    deleteCheckedProducts () {
      console.log('deleted products with ids: ' + this.checkedProducts.join(', '))
      this.checkedProducts = [] 
    },
    minPriceInputHandler (e) {
      this.checkedProducts.forEach(id => {
        this.populatedProducts.forEach(product => {
          if (product.id === id) {
            product.min_price = e.target.value
          }
        })
      })
    },
    maxPriceInputHandler (e) {
      this.checkedProducts.forEach(id => {
        this.populatedProducts.forEach(product => {
          if (product.id === id) {
            product.max_price = e.target.value
          }
        })
      })
    },
    productMinPriceHandler (e, id) {
      this.populatedProducts.forEach(product => {
        if (product.id === id) {
          product.min_price = e.target.value
        }
      })
    },
    productMaxPriceHandler (e, id) {
      this.populatedProducts.forEach(product => {
        if (product.id === id) {
          product.max_price = e.target.value
        }
      })
    }
  }
}
</script>