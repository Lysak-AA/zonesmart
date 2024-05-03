<template lang="pug">
.app-products-grid
  .app-products-grid__header
    <AppCheckbox checkboxType="line" />
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
</template>

<script>
import AppCheckbox from '@/components/AppCheckbox.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'

export default {
  name: 'AppProductsGrid',
  components: {
    AppCheckbox,
    IconArrowDown
  }
}
</script>