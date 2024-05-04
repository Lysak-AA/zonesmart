<template lang='pug'>
.app-input(:style="`max-width: ${inputMaxWidth}`")
  label(class="app-input__label", :for="id") {{ inputLabel }}
  input(class="app-input__field", :type="inputType", :id="id", :placeholder="inputPlaceholder", :disabled="inputDisabled", @input="$emit('input', $event)" @change="$emit('change')")
  <IconEye v-if="appendIcon.isIcon && appendIcon.icon === 'eye'" @click="$emit('eye-toggle', false)" />
  <IconEyeClosed v-if="appendIcon.isIcon && appendIcon.icon === 'eye-closed'" @click="$emit('eye-closed-toggle', true)" />
  p(class='app-input__validation-error' v-if="validationError.length") {{ validationError }}
  <slot></slot>
</template>

<script>
import IconEye from '@/components/icons/IconEye.vue'
import IconEyeClosed from '@/components/icons/IconEyeClosed.vue'

export default {
  name: 'AppInput',
  components: {
    IconEye,
    IconEyeClosed
  },
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
    },
    inputDisabled: {
      type: Boolean,
      default: false
    },
    inputMaxWidth: {
      type: String,
      default: '100%'
    },
    appendIcon: {
      type: Object,
      default: () => ({
        isIcon: false,
        icon: 'eye'
      })
    }
  }
}
</script>
