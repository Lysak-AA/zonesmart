<template lang="pug">
.login-page
  <AppHeader />
  main(class='login-page-main')
    <AppLoginForm />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppLoginForm from '@/components/AppLoginForm.vue'

export default {
  name: 'login',
  components: {
    AppHeader,
    AppLoginForm
  }  
}
</script>