<template lang="pug">
label(class="app-checkbox")
  input(type="checkbox", :checked="isChecked" @input.stop="$emit('input', $event)")
  span(class="app-checkbox__checkmark")
  <IconCheckmark v-if="checkboxType === 'default'" />
  <IconCheckmarkLine v-else />
</template>

<script>
import IconCheckmark from '@/components/icons/IconCheckmark.vue'
import IconCheckmarkLine from '@/components/icons/IconCheckmarkLine.vue'

export default {
  name: 'AppCheckbox',
  components: {
    IconCheckmark,
    IconCheckmarkLine,
  },
  props: {
    checkboxType: {
      type: String,
      default: 'default'
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>