<template lang="pug">
input(type="text", class="app-price-input", placeholder="₽", :value="price" @input="$emit('input')")
</template>

<script>
export default {
  name: 'AppPriceInput',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    price () {
      return this.value > 0 ? this.value + ' ₽' : ''
    }
  }
}
</script>