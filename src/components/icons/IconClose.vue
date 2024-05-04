<template>
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" @click="$emit('click')" @mouseover="setColor('#2ED2BA')" @mouseleave="setColor('#FFFFFF')">
    <g clip-path="url(#clip0_1_1164)">
    <path d="M0.600098 1.10013L14.4001 14.9001" :stroke="color" />
    <path d="M14.3999 1.10013L0.599903 14.9001" :stroke="color" />
    </g>
    <defs>
    <clipPath id="clip0_1_1164">
    <rect width="15" height="14.9998" fill="white" transform="translate(0 0.500122)" />
    </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  name: 'IconClose',
  data () {
    return {
      color: '#FFFFFF'
    }
  },
  methods: {
    setColor (color) {
      this.color = color
    }
  }
}
</script>
