<template lang='pug'>
.app-input
  label(class="app-input__label", :for="id") {{ inputLabel }}
  input(class="app-input__field" :type="inputType", :id="id", :placeholder="inputPlaceholder")
  p(class='app-input__validation-error' v-if="validationError.length") {{ validationError }}
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
    },
    validationError: {
      type: String,
      default: ''
    }
  }
}
</script>
