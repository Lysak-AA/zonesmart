<template lang="pug">
button(:class="{'app-button': true, 'app-button--disabled': isBtnDisabled}", :style="btnStyle" :disabled="isBtnDisabled") {{ btnText }}
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
    },
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>
