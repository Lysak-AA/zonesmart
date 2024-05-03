<template lang="pug">
button(class="app-button", :disabled="isBtnDisabled") {{ btnText }}
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnText: {
      type: String,
      required: true
    },
    isBtnDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
