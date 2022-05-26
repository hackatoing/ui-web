<template>
  <div>
    <div class="my-pet-code">
      Pet code home
    </div>
    <Button
      label="Cadastrar usuário"
      icon="pi pi-plus"
      iconPos="right"
      @click="navigateToRegisterUser()"
    />
  </div>
</template>

<script>
export default {
  name: 'MainHome',
  methods: {
    navigateToRegisterUser() {
      this.$router.push('/register/user')
    }
  }
}
</script>

<style scoped>

</style>
