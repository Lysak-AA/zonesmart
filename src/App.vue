<template>
  <RouterView />
</template>

<script>
export default {
  mounted () {
    const isAuthenticated = JSON.parse(localStorage.getItem('accessToken'))
    if (isAuthenticated) {
      const refreshToken = JSON.parse(localStorage.getItem('refreshToken'))
      const user = JSON.parse(localStorage.getItem('user'))
      this.$store.dispatch('setUserData', {
        email: user.email,
        accessToken: isAuthenticated,
        refreshToken: refreshToken
      })
    }
  }
}
</script>
