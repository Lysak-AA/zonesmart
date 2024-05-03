<template lang="pug">
.app-product
  <AppCheckbox checkboxType="default" />
</template>

<script>
import AppCheckbox from '@/components/AppCheckbox.vue'

export default {
  name: 'AppProduct',
  components: {
    AppCheckbox
  }
}
</script>
