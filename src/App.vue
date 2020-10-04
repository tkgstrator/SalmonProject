<template>
  <v-app>
    <Header />
    <img alt="SeedHack" src="./assets/logo.png" width="300" />
    <router-view />
  </v-app>
</template>

<script>
import Header from "./views/Header"
export default {
  name: "App",
  components: {
    Header,
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #191919;
  color: #eeeeee;
}

img {
  margin: 0 auto;
  // padding-bottom: 30px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
