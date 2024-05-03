<template lang="pug">
.app-login-form
  h1(class='app-login-form__title') Вход
  span(class='app-login-form__registration-cta') Нет аккаунта? 
    a(class='app-login-form__registration-cta-link', href="#") Зарегистрироваться
  <AppInput id="email" inputLabel="Email" inputType="email" inputPlaceholder="youremail@mail.ru" :inputDisabled="loading" />
  <AppInput id="password" inputLabel="Пароль" inputType="password" inputPlaceholder="Ваш пароль" validationError="" :inputDisabled="loading" />
  a(class='app-login-form__forgot-pswrd-link', href="#") Забыли пароль?
</template>

<script>
import AppInput from '@/components/AppInput.vue'

export default {
  name: 'AppLoginForm',
  components: {
    AppInput
  },
  data () {
    return {
      loading: false
    }
  }
}
</script>