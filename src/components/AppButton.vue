<template lang="pug">
button(:class="{'app-button': true, 'app-button--disabled': isBtnDisabled}", v-if="!isLoading" :style="btnStyle" :disabled="isBtnDisabled", @click="$emit('submit', $event)") {{ btnText }}
button(class="app-button app-button--disabled app-button__loader", v-else :style="btnStyle" :disabled="isBtnDisabled", @click="$emit('submit', $event)")
  .app-button__loader-item
  .app-button__loader-item
  .app-button__loader-item
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
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
