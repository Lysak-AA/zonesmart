<template lang="pug">
form(class="app-login-form")
  h1(class='app-login-form__title') Вход
  span(class='app-login-form__registration-cta') Нет аккаунта? 
    a(class='app-login-form__registration-cta-link', href="#") Зарегистрироваться
  <AppInput id="email" inputLabel="Email" inputType="email" inputPlaceholder="youremail@mail.ru" :inputDisabled="loading" @input="$emit('email-input', $event)" />
  <AppInput id="password" inputLabel="Пароль" inputType="password" inputPlaceholder="Ваш пароль" validationError="" :inputDisabled="loading" @input="$emit('password-input', $event)" />
  a(class='app-login-form__forgot-pswrd-link', href="#") Забыли пароль?
  <AppButton btnText="Войти" :isBtnDisabled="false" @submit="$emit('submit', $event)"/>
</template>

<script>
import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'

export default {
  name: 'AppLoginForm',
  components: {
    AppInput,
    AppButton
  },
  data () {
    return {
      loading: false
    }
  }
}
</script>