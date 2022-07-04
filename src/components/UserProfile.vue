<template>

  <h2>当前用户信息</h2>
  <div>{{userInfo.userId}}</div>
  <div>{{userInfo.username}}</div>

  <div class="info-item"
       v-for="item in userInfo">
    <div class="info-key">{{item.key}}</div>
    <div class="info-value">{{item.value}}</div>
    <!--    <UserProfile :userInfo="getInfoList(userInfo.userInfo)" />-->
  </div>

</template>

<script>
import Cookies from 'js-cookie'
import { getUserInfo, logout } from './../api/user'

export default {
  data() {
    return {
      count: 0,
      hasLogin: false,
      userInfo: [],
      list: [],
      thirdType: ''
    }
  },
  props: {
    userInfo2: {
      type: Array,
      default: []
    }
  },
  methods: {
    getInfoList(info = {}) {
      const list = Object.keys(info).map(item => {
        return { key: item, value: info[item] }
      })
      return list;
    },
    async getUserInfo() {
      console.log('getUserInfo', getUserInfo)
      const res = await getUserInfo(this.thirdType)
      let userData = res.data
      this.userInfo = this.getInfoList(userData.userInfo)
      console.log('userInfo', this.userInfo)
    },
    async checkLogin() {
      const hasLogin = Cookies.get('aimee-test-token')
      console.log('Cookies token ----', hasLogin);
      this.hasLogin = hasLogin
      if (hasLogin) {
        const thirdTypeCookie = Cookies.get('thirdType')
        this.thirdType = thirdTypeCookie;
        console.log('thirdTypeCookie----', thirdTypeCookie);
        await this.getUserInfo()
      }
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
.info-key {
  margin-right: 10px;
  color: #42b983;
  width: 200px;
  text-align: right;
}
</style>
