<template lang='pug'>
.app-input
  label(class="app-input-label", :for="id") {{ inputLabel }}
  input(class="app-input-field" :type="inputType", :id="id", :placeholder="inputPlaceholder")
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    id: {
      type: String,
      default: ''
    },
    inputLabel: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      default: 'text'
    },
    inputPlaceholder: {
      type: String,
      default: ''
    }
  }
}
</script>
