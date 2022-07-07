<template>
  <div v-if="!hasLogin">
    <h2>第三方登录</h2>
<!--    <div><span>指定用户</span><a :href="github_url">{{github_url}}</a></div>-->
<!--    <a href="https://www.baidu.com/" onclick="return true">去百度(禁止默认事件:return false)</a><br>-->

    <div><el-avatar shape="circle" :size="size" :src="iconGithub"></el-avatar><a :href="github_url" @click="thirdLogin('github/')">GITHUB</a></div>
    <div><el-avatar shape="circle" :size="size" :src="iconWechat"></el-avatar><a :href="my_url"  @click="myLogin('my/')">my登录</a></div>
    <div><el-avatar shape="circle" :size="size" :src="iconWechat"></el-avatar><a :href="wechat_url"  @click="thirdLogin('wechat/')">微信登录</a></div>
    <div><el-avatar shape="circle" :size="size" :src="iconWeibo"></el-avatar><a :href="weibo_url"  @click="thirdLogin('weibo/')">微博登录</a></div>
    <div><el-avatar shape="circle" :size="size" :src="iconFacebook"></el-avatar><a :href="facebook_url"  onclick="thirdLogin('facebook/')">Facebook登录</a></div>
<!--    <div><span>FACEBOOK</span><a :href="login_url">FACEBOOK</a></div>-->
<!--    <div><span>Google</span><a :href="login_url">{{login_url}}</a></div>-->
<!--    <div><span>Gmail</span><a :href="login_url">{{login_url}}</a></div>-->
<!--    <div><span>Line</span><a :href="login_url">{{login_url}}</a></div>-->
<!--    <div><span>微软</span><a :href="login_url">{{login_url}}</a></div>-->
<!--    <div><el-avatar shape="square" :size="size" :src="url"></el-avatar><a :href="baidu_url">百度</a></div>-->
<!--    <div><span>淘宝</span><a :href="login_url">{{login_url}}</a></div>-->
<!--    <div><span>Twitter</span><a :href="login_url">{{login_url}}</a></div>-->
<!--    <div><span>抖音</span><a :href="login_url">{{login_url}}</a></div>-->
<!--    <div><span>Tik Tok</span><a :href="login_url">{{login_url}}</a></div>-->
  </div>
  <div v-else>
    当前已经登录
  </div>

<!--  <el-button @click="router3">返回</el-button>-->

</template>

<script>
import Moment from 'moment'
import { getUserInfo } from './../api/user'
import UserProfile from './UserProfile'
import Cookies from 'js-cookie'
import weibo from '../assets/weibo.0cd39f5.png';
import wechat from '../assets/wechat.ce329e6.png';
import iconGithub from '../assets/OIP-C.jpg';
import iconFacebook from '../assets/fb.jpg';

const GITHUB_OAUTH = {
  url: 'https://github.com/login/oauth/authorize',
  clientid: 'ee0e0710193b7cac1e68',
  redirectUri: 'http://192.168.1.103:8999/v1/github/user/login'
}
export default {
  data() {
    return {
      count: 0,
      github_url: `http://192.168.1.103:8082/oauth2/authorization/github`,
      weibo_url: `http://192.168.1.103:8082/oauth2/authorization/weibo`,
      my_url: `http://192.168.1.103:8082/oauth2/authorization/custom-client`,
      wechat_url: `https://api.weibo.com/oauth2/authorize?client_id=973886123&response_type=code&redirect_uri=http%3A%2F%2F192.168.1.103%3A8999%2FsecuredPage`,
      gmail_url: `https://api.weibo.com/oauth2/authorize?client_id=973886123&response_type=code&redirect_uri=http%3A%2F%2F192.168.1.103%3A8999%2FsecuredPage`,
      facebook_url: `https://api.weibo.com/oauth2/authorize?client_id=973886123&response_type=code&redirect_uri=http%3A%2F%2F192.168.1.103%3A8999%2FsecuredPage`,
      twitter_url: `https://api.weibo.com/oauth2/authorize?client_id=973886123&response_type=code&redirect_uri=http%3A%2F%2F192.168.1.103%3A8999%2FsecuredPage`,
      microsoft_url: `https://api.weibo.com/oauth2/authorize?client_id=973886123&response_type=code&redirect_uri=http%3A%2F%2F192.168.1.103%3A8999%2FsecuredPage`,
      baidu_url: `https://api.weibo.com/oauth2/authorize?client_id=973886123&response_type=code&redirect_uri=http%3A%2F%2F192.168.1.103%3A8999%2FsecuredPage`,
      userInfo: {},
      iconWeibo: weibo,
      iconWechat: wechat,
      iconGithub: iconGithub,
      iconFacebook: iconFacebook,
      hasLogin: false,
      list: [],
      thirdType: ''
    }
  },
  props: ['msg'],
  components: {
    UserProfile
  },
  methods: {
    initDate(date) {
      return Moment(date).format('YYYY-MM-DD HH:mm:ss')
    },
    async getUserInfo() {
      console.log('getUserInfo', getUserInfo)
      const res = await getUserInfo(this.thirdType)
      this.userInfo = res.data
      console.log('UserProfile', this.userInfo)
    },
    thirdLogin(type = "weibo") {
      let thirdType = type;
      this.thirdType = thirdType;
      return true;
    },
    myLogin(type = "weibo") {
      this.thirdType = "my";
      return true;
    },
    async checkLogin() {
      const hasLogin = Cookies.get('aimee-test-token')
      console.log('Cookies token ----', hasLogin);
      this.hasLogin = hasLogin
      if (hasLogin) {
        const thirdTypeCookie = Cookies.get('thirdType')
        console.log('thirdTypeCookie----', thirdTypeCookie);
      }
    },
    async tourist() {
      this.$router.push('tourist')
    },

  },
  created() {
    this.checkLogin()
  }
}
</script>

<style scoped>
a {
  color: #b94242;
}
</style>
