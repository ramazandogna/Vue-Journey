<template>
   <Title :titleText="text" />

   <br />
   <input
      type="text"
      ref="inputText"
   />
   <br />
   <br />
   <Button @clean="cleanInput" />
   <br />
   <img
      alt="Vue logo"
      src="./assets/logo.png"
   />
   <h3>{{ title }}</h3>
   <input
      type="text"
      ref="name"
      placeholder="name"
   />
   <br />
   <br />
   <input
      type="text"
      ref="password"
      placeholder="password"
   />
   <br />
   <br />
   <button @click="login">Giriş</button>
   <br />
   <p v-if="isLogin">Giriş başarılı</p>
</template>

<script>
import './assets/css/style.css';
import Title from './components/Title.vue';
import Button from './components/Button.vue';
export default {
   name: 'App',
   components: {
      Title: Title,
      Button: Button,
   },
   data() {
      return {
         title: 'Login',
         name: 'Ramazan',
         password: '123321',
         isLogin: false,
         text: "Vue 3'e Giriş",
      };
   },
   methods: {
      login() {
         this.$refs.name.value === this.name &&
         this.$refs.password.value === this.password
            ? (this.isLogin = true)
            : false;
         console.log(this.name);
      },
      cleanInput() {
         this.$refs.inputText.value = '';
      },
   },
};
</script>

<style></style>
