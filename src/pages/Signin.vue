<template>
  <div class="container">
    <div class="w-full p-3 lg:w-4">
      <p class="text-center text-xl lg:text-3xl font-bold">Авторизация в систему КРОН-ТМ</p>
      <InputText placeholder="Введите логин" type="text" class="w-full mb-3" v-model="login" />
      <InputText placeholder="Введите пароль" type="password" class="w-full mb-3" v-model="password" />
      <Button label="Войти" class="w-full" @click="auth" :disabled="password.length > 6 ? false : true"></Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    auth() {
      return this.$api.auth(this.login, this.password).then((e) => {
        if (e.status != 200) {
          this.$toast.add({severity:'error', detail: e.data, life: 3000});
        }
      });
    }
  },

}
</script>

<style scoped>
  .container {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>