<template lang="pug">
.login-page
  <AppHeader />
  main(class='login-page-main')
    <AppLoginForm @email-input="emailInputHandler" @password-input="passwordInputHandler" @submit="login" />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppLoginForm from '@/components/AppLoginForm.vue'

export default {
  name: 'login',
  components: {
    AppHeader,
    AppLoginForm
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    emailInputHandler (e) {
      console.log(e)
    },
    passwordInputHandler (e) {
      console.log(e)
    },
    login (e) {
      e.preventDefault()
      console.log(e)
    }
  }
}
</script>