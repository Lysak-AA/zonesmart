<template lang="pug">
  header(class='app-header')
    <AppLogo />
</template>


<script>
import AppLogo from '@/components/icons/AppLogo.vue'

export default {
  name: 'AppHeader',
  components: {
    AppLogo
  }
}
</script>