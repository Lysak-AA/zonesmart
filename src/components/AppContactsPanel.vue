<template lang="pug">
  .app-contacts-panel
    a(class='app-contacts-panel__support-link', href="#") Поддержка
    <IconTelegram />
    <IconWhatsapp />
</template>

<script>
import IconTelegram from '@/components/icons/IconTelegram.vue'
import IconWhatsapp from '@/components/icons/IconWhatsapp.vue'
export default {
  name: 'AppContactsPanel',
  components: {
    IconTelegram,
    IconWhatsapp
  }
}
</script>