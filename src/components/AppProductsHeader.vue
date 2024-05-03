<template lang="pug">
.app-products-page-header
  <IconBell />
  span(class="app-products-page-header__user-email") {{ userEmail }}
</template>

<script>
import IconBell from '@/components/icons/IconBell.vue'

export default {
  name: 'AppProductsHeader',
  components: {
    IconBell
  },
  props: {
    userEmail: {
      type: String,
      default: ''
    }
  }
}
</script>