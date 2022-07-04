<template>

  <h1>欢迎使用xx系统!</h1>

  <div class="me">
    <div v-if="!hasLogin">
      welcome:游客
<!--      <el-button @click="tourist">welcome:游客</el-button>-->
      <el-button @click="gologin">去登录</el-button>
    </div>
    <div v-else>
      <router-link to="/UserProfile">welcome:    {{userInfo.username}}</router-link>
<!--      <el-image :src="userInfo.avatar" fit="fill" style="height:100%;width:100%"></el-image>-->
      <el-avatar shape="square" :size="size" :src="userInfo.avatar"></el-avatar>
      <el-button @click="logout">退出登录</el-button>
    </div>
<!--    <div class="info-value">  {{userInfo.avatar}}</div>-->
<!--    <a target="_blank" href="currentUser" style="color: blue;font-weight: bold;">当前用户信息</a>-->
  </div>

</template>

<script>
import Moment from 'moment'
import { getUserInfo, logout } from './../api/user'
import Cookies from 'js-cookie'
import ElImage from "element-plus";
// import Logout from '../components/Logout'
// import { useRouter } from 'vue-router'

export default {
  components: {ElImage },
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
    async getUserInfo() {
      const res = await getUserInfo(this.thirdType)
      console.log('res', res.data)
      this.userInfo = res.data
      console.log('userInfo', this.userInfo)
    },
    async checkLogin() {
      const hasLogin = Cookies.get('aimee-test-token')
      console.log('hasLogin----', hasLogin);
      this.hasLogin = hasLogin
      if (hasLogin) {
        const thirdTypeCookie = Cookies.get('thirdType')
        this.thirdType = thirdTypeCookie;
        console.log('thirdTypeCookie----', thirdTypeCookie);
        await this.getUserInfo()
      }
    },
    async logout() {
      const res = await logout(this.thirdType)
      window.location.reload()
    },
    tourist() {
      this.$router.push('tourist')
    },
    async gologin() {
      this.$router.push('login')
    },
  },
  created() {
    this.checkLogin()
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
