<template lang="pug">
form(class="app-login-form")
  h1(class='app-login-form__title') Вход
  span(class='app-login-form__registration-cta') Нет аккаунта? 
    a(class='app-login-form__registration-cta-link', href="#") Зарегистрироваться
  <AppInput id="email" inputLabel="Email" inputType="email" inputPlaceholder="youremail@mail.ru" :inputDisabled="loading" :validationError="email_validation_error" @input="$emit('email-input', $event)" @change="$emit('email-field-change')" />
  <AppInput id="password" inputLabel="Пароль" :inputType="passwordFieldInputType" inputPlaceholder="Ваш пароль" :inputDisabled="loading" :appendIcon="passwordFieldAppendIcon" :validationError="password_validation_error" @input="$emit('password-input', $event)" @change="$emit('password-field-change')" @eye-toggle="toggleEyeIcon($event)" @eye-closed-toggle="toggleEyeIcon($event)" />
  a(class='app-login-form__forgot-pswrd-link', href="#") Забыли пароль?
  <AppButton btnText="Войти" :isBtnDisabled="isFormInvalid" @submit="$emit('submit', $event)"/>
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
  props: {
    validationErrorMessages: {
      type: Array,
      default: () => []
    },
    isFormInvalid: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loading: false,
      passwordFieldAppendIcon: {
        isIcon: true,
        icon: 'eye'
      },
      passwordFieldInputType: 'password'
    }
  },
  computed: {
    email_validation_error () {
      let message = ''
      for (let error of this.validationErrorMessages) {
       const [entries] = Object.entries(error)
       if (entries[0] === 'email' || entries[0] === 'email_required') {
        message = entries[1]
       }
      }
      return message
    },
    password_validation_error () {
      let message = ''
      for (let error of this.validationErrorMessages) {
       const [entries] = Object.entries(error)
       if (entries[0] === 'password_requred' || entries[0] === 'password_min_length' || entries[0] === 'password_max_length') {
        message = entries[1]
       }
      }
      return message
    }
  },
  methods: {
    toggleEyeIcon (value) {
      if (value) {
        this.passwordFieldAppendIcon.icon = 'eye'
        this.passwordFieldInputType = 'password'
      } else {
        this.passwordFieldAppendIcon.icon = 'eye-closed'
        this.passwordFieldInputType = 'text'
      }
    }
  }
}
</script>