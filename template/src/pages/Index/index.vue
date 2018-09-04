<template>
  <div class="demo-page">
    <h3 class="title"><span>欢迎打开\{{title}}</span></h3>
    <button class="btn" @click="routeDetail">跳转到TodoMVC</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '示例页面'
    }
  },
  methods: {
    routeDetail () {
      this.$router.push({
        path: '/TodoMVC',
        query: { userInfo: {name: 'John', id: 100}, flag: true, flag2: 'true' }
      })
    }
  }
}
</script>

<style>
  /* quick app ignore start */
  @import '../../css/web-reset.css';
  /* quick app ignore end */
  @import '../../css/reset.css';

  .demo-page {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 40px;
    text-align: center;
  }

  .btn {
    width: 550px;
    height: 86px;
    margin-top: 75px;
    border-radius: 43px;
    background-color: #09ba07;
    font-size: 30px;
    color: #ffffff;
  }
</style>
