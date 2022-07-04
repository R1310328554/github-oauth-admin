<template>
  <NavBar ></NavBar>
  <div v-if="!hasLogin">

  </div>
  <div v-else>
    首页123
  </div>

</template>

<script>
import Moment from 'moment'
import ElImage from "element-plus";
// import { useRouter } from 'vue-router'
import NavBar from './NavBar'

export default {
  components: {ElImage, NavBar},
  data() {
    return {
      count: 0,
      hasLogin: false,
      userInfo: {},
      list: [],
      thirdType: ''
    }
  },
  props: ['msg'],
  methods: {
    initDate(date) {
      return Moment(date).format('YYYY-MM-DD HH:mm:ss')
    },
    tourist() {
      this.$router.push('tourist')
    },
    async gologin() {
      this.$router.push('login')
    },
  },
  created() {

  }
}

</script>

<style>
.github-info {
  /* width: 100%; */
  height: auto;
  padding: 20px;
  border: 1px solid #efefef;
}
.info-item {
  margin-bottom: 10px;
  text-align: left;
  display: flex;
}
.me {
  margin-right: 10px;
  color: #42b983;
  width: 100%;
  text-align: right;
  right: 10px;
  top: 20px;
  position: absolute;
}
</style>
