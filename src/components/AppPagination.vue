<template lang="pug">
.app-pagination
  span(:class="{ 'app-pagination__arrow-left': true, 'arrow-disabled': currentPage === 1 }" @click="$emit('change-page', currentPage === 1 ? 1 : currentPage - 1)")
    <IconArrowLeft v-if="currentPage !== 1" />
  span(:class="{ 'app-pagination__page': true, 'app-pagination__item--active': (index + 1) === currentPage }" v-for="page, index in pages" :key="index" @click="$emit('change-page', index + 1)") {{ index + 1 }}
  span(:class="{ 'app-pagination__arrow-right': true, 'arrow-disabled': currentPage === pages }" @click="$emit('change-page', currentPage === pages ? pages : currentPage + 1)")
    <IconArrowLeft  v-if="currentPage !== pages" />
</template>

<script>
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'

export default {
  name: 'AppPaginagion',
  components: {
    IconArrowLeft
  },
  props: {
    pages: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    }
  }
}
</script>
