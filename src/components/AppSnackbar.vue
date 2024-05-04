<template lang="pug">
  .app-snackbar
    span(class='app-snackbar__text') {{ text }}
    button(class="app-snackbar__close-btn", @click="$emit('close-snackbar')") Отменить
    <IconClose @click="$emit('close-snackbar')" />
</template>

<script>
import IconClose from '@/components/icons/IconClose.vue'

export default {
  name: 'AppSnackbar',
  components: {
    IconClose
  },
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>