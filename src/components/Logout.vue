<template>
  <div class="navBar">

    <el-button @click="logout">退出登录</el-button>


  </div>
</template>

<script>

  export default {
    name: "Login",
    data() {
      return {
        codeUrl: "",
      }
    },
    watch: {
      $route: {
        handler: function (route) {
          // this.redirect = route.query && route.query.redirect; // todo
        },
        immediate: true
      }
    },
    created() {

    },
    methods: {

    }
  };
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
