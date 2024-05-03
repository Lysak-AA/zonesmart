<template lang="pug">
  header(class='app-header')
    <AppLogo />
    <AppContactsPanel />
</template>


<script>
import AppLogo from '@/components/icons/AppLogo.vue'
import AppContactsPanel from '@/components/AppContactsPanel.vue'

export default {
  name: 'AppHeader',
  components: {
    AppLogo,
    AppContactsPanel
  }
}
</script>