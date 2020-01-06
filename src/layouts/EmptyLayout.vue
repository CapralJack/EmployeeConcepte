<template>
  <div class="darken-1 empty-layout login-wrap" >
    <router-view/>
  </div>
</template>

<script>
import messages from '@/utils/messages'

export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || 'Что-то пошло не так')
    }
  }
}
</script>

<style scoped>
 .login-wrap {
   background: url("../img/back_auth.png");
 }

 
</style>
