<template lang="pug">
.login-page
  <AppSnackbar v-if="loginError.length" :text="loginError" @close-snackbar="loginError = ''" />
  <AppHeader />
  main(class='login-page-main')
    <AppLoginForm @email-input="emailInputHandler" :isFormInvalid="v$.$invalid" :validationErrorMessages="validation_errors" :isLoading="loading" @password-input="passwordInputHandler" @submit="submitForm" @email-field-change="v$.$touch()" @password-field-change="v$.$touch()" />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppLoginForm from '@/components/AppLoginForm.vue'
import AppSnackbar from '@/components/AppSnackbar.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'
import { login } from '@/api/index.js'

export default {
  name: 'login',
  components: {
    AppHeader,
    AppLoginForm,
    AppSnackbar
  },
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data () {
    return {
      email: '',
      password: '',
      validation_error_messages: {
        email_required: 'Email обязателен для заполнения',
        email: 'Невалидный email, проверьте правильность заполнения',
        password_requred: 'Пароль обязателен для заполнения',
        password_min_length: 'Пароль не должен быть короче 5 символов',
        password_max_length: 'Пароль не должен быть длиннее 20 символов'
      },
      loginError: '',
      loading: false
    }
  },
  validations () {
    return {
      email: { required, email },
      password: { required, password_min_length: minLength(5), password_max_length: maxLength(20) }
    }
  },
  computed: {
    validation_errors () {
      if (!this.v$.$invalid) { return [] }
      const errors = []
      if (this.v$.$dirty) {
        if (this.v$.email.$invalid) {
          const email_validations = {
            email: this.v$.email.email.$invalid,
            email_required: this.v$.email.required.$invalid
          }
          for (let [key, value] of Object.entries(email_validations)) {
            if (value) {
              errors.push({ [key]: this.validation_error_messages[key] })
            }
          }
        }
       if (this.v$.password.$invalid) {
          const password_validations = {
            password_requred: this.v$.password.required.$invalid,
            password_min_length: this.v$.password.password_min_length.$invalid,
            password_max_length: this.v$.password.password_max_length.$invalid
          }
          for (let [key, value] of Object.entries(password_validations)) {
            if (value) {
              errors.push({ [key]: this.validation_error_messages[key] })
            }
          }
       }
      }
      return errors
    }
  },
  methods: {
    emailInputHandler (e) {
      this.email = e.target.value
    },
    passwordInputHandler (e) {
      this.password = e.target.value
    },
    async submitForm (e) {
      e.preventDefault()
      if (this.v$.$invalid) {
        return false
      }
      try {
        this.loading = true
        const response = await login(this.email, this.password)
        localStorage.setItem('accessToken', JSON.stringify(response.data.access))
        localStorage.setItem('refreshToken', JSON.stringify(response.data.refresh))
      } catch (err) {
        console.warn(err.message)
        this.loginError = 'Пользователя с такими учетными данными нет в базе'
        setTimeout(() => {
          this.loginError = ''
        }, 5000)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>