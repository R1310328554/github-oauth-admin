<template>
  <div class="info-key">welcome :    {{userInfo.username}}</div>
  <el-image datasrc="userInfo.avatar" >avatar</el-image>
  <div class="info-value">  {{userInfo.avatar}}</div>

  <button @click="router3">router3 1 --- {{this.$data}}</button>

  <el-button @click="logout">退出登录</el-button>
  <a target="_blank" href="currentUser" style="color: blue;font-weight: bold;">当前用户信息</a>

  需要登录, 管理员才能看到本页面

  <h3>用户列表 111</h3>
  <el-table :data="list"
            element-loading-text="Loading"
            border
            fit
            highlight-current-row
            style="width: 100%">
    <el-table-column prop="userId"
                     label="userId"
                     align="center" />
    <el-table-column prop="username"
                     align="center"
                     label="用户名" />
    <el-table-column label="github 用户信息"
                     align="center">
      <template #default="scope">
        <el-tooltip placement="top">
          <template #content>
            <GithubInfo :githubInfo="getInfoList(scope.row.githubInfo)" />
          </template>
          <el-button>详情</el-button>
        </el-tooltip>

      </template>
    </el-table-column>
    <el-table-column label="最近登录时间"
                     align="center">
      <template #default="scope">
        <span>{{ initDate(scope.row.lastLoginDate) }}</span>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
import Moment from 'moment'
import { getUserInfo, getAllUser, logout } from './../api/user'
import Cookies from 'js-cookie'
import ElImage from "element-plus";

export default {
  components: {ElImage},
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
      console.log('getUserInfo', getUserInfo)
      const res = await getUserInfo(this.thirdType)
      this.userInfo = res.data
      console.log('userInfo', this.userInfo)
    },
    async checkLogin() {
      const hasLogin = Cookies.get('aimee-test-token')
      console.log('hasLogin----', hasLogin);
      this.hasLogin = hasLogin
      if (hasLogin) {
        await this.getUserInfo()
      } else {
        window.location = "/";
      }
    },
    async getAllUser() {
      const res = await getAllUser(this.thirdType)
      this.list = res.data
    },
    async logout() {
      const res = await logout(this.thirdType)
      window.location.reload()
    },
    router3() {
      this.$router.push('router3')
    },
  },
  created() {
    // console.log('res----', this.$data);
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
