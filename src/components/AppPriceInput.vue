<template lang="pug">
label(class="app-price-input__label")
  input(type="text", class="app-price-input", placeholder="₽", :value="currentPrice" @input="$emit('input', $event)")
  span(v-if="currentPrice") ₽
</template>

<script>
export default {
  name: 'AppPriceInput',
  props: {
    currentPrice: {
      type: [Number, String],
      default: ''
    }
  }
}
</script>