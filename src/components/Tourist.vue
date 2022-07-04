<template>

  <div>

    <router-link to="/logout">退出</router-link> <br/>
    <router-link to="/login">Go to login</router-link>
    不需要登录， 游客也能看到本页面

  </div>
</template>

<script>

import Moment from 'moment'
import ElImage from "element-plus";

export default {
  components: {ElImage},
  data() {
    return {
      count: 0,
      hasLogin: false,
      list: [],
    }
  },
  methods: {
    initDate(date) {
      return Moment(date).format('YYYY-MM-DD HH:mm:ss')
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
.info-key {
  margin-right: 10px;
  color: #42b983;
  width: 200px;
  text-align: right;
}
</style>
