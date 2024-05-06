<template lang="pug">
.app-products-panel
  .app-products-panel__heading
    h2(class="app-products-panel__title") Мои товары
    <IconQuestion />
    span(class="app-products-panel__products-counter") 4 из 30
  .app-products-panel__info
    p(class="app-products-panel__paragraph") Добавьте товары вашего магазина из одной товарной и ценовой категории (разница цены не больше 15%)
    p(class="app-products-panel__paragraph") Для добавления нескольких товаров введите несколько артикулов через запятую или используя клавишу Enter
  .app-products-panel__adding-item-block
    <AppInput inputLabel="Добавление товаров" inputPlaceholder="Введите артикул продавца, артикул WB или ссылку на товар" inputMaxWidth="648px"><slot><span class="app-products-panel__example-info">Например ваши товары: <span>119203059</span>, <span>124366343</span>, <span>59801844</span></span></slot></AppInput>
    <AppButton btnText="Добавить" style="padding: 15px 70px 15px 30px; margin: 0 0 20px 20px" :isBtnDisabled="true" />
  <AppProductsGrid :products="products" :totalCount="totalCount" :currentPage="currentPage" :perPage="perPage" :loading="loading" @change-page="$emit('change-page', $event)" />
</template>

<script>
import IconQuestion from '@/components/icons/IconQuestion.vue'
import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'
import AppProductsGrid from '@/components/AppProductsGrid.vue'

export default {
  name: 'AppProductsPanel',
  components: {
    IconQuestion,
    AppInput,
    AppButton,
    AppProductsGrid
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
  }
}
</script>