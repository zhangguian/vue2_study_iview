<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios"
import request from "./api/request";
export default {
  data() {
    return {
      property: 'value',
    };
  },
  created() {
    // request('get', '/test',{page: 1,pageSize: 10}).then(res => {
    //   console.log('res', res);
    // })
    // axios.post('/api/addgoods', {title: 'f二分法', content: '电饭锅和国大药房贵妃椅'}).then(res => {
    //   console.log('res', res);
    // })
    // axios.post('/api/dele', {id: 111}).then(res => {
    //   console.log('res', res);
    // })
  }
}
</script>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
</style>
