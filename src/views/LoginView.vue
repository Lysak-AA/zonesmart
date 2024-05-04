<template lang="pug">
.login-page
  <AppHeader />
  main(class='login-page-main')
    <AppLoginForm @email-input="emailInputHandler" :isFormInvalid="v$.$invalid" :validationErrorMessages="validation_errors" @password-input="passwordInputHandler" @submit="login" @email-field-change="v$.$touch()" @password-field-change="v$.$touch()" />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppLoginForm from '@/components/AppLoginForm.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'

export default {
  name: 'login',
  components: {
    AppHeader,
    AppLoginForm
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
      }
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
    login (e) {
      e.preventDefault()
      // if (this.v$.$invalid) {
      //   return false
      // }
      this.v$.$touch()
      let emailMsg = ''
      for (let error of this.validation_errors) {
       const [entries] = Object.entries(error)
       if (entries[0] === 'email' || entries[0] === 'email_required') {
        emailMsg = entries[1]
       }
      }
      console.log(emailMsg)
    }
  }
}
</script>