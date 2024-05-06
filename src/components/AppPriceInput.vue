<template lang="pug">
input(type="text", class="app-price-input", placeholder="₽", :value="currentPrice" @input="$emit('input', $event)")
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