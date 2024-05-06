<template lang="pug">
  div(class="app-product-skeleton" v-for="line, index in linesAmount" :key="index")
</template>

<script>
export default {
  name: 'AppProductSkeleton',
  props: {
    linesAmount: {
      type: Number,
      default: 10
    }
  }
}
</script>
