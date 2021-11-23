<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-04 16:55:48
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-22 18:17:48
-->
<template>
    <Layout style="height: 100%" class="main">
      <Sider 
      hide-trigger 
      collapsible 
      :width="200" 
      :collapsed-width="64" 
      class="left-sider" 
      :style="{overflow: 'hidden'}">
        <side-menu :menuList="menuList" accordion :active-name="'/aaa'"  @on-select="toPage">
          <div style="height: 50px; backgroundColor: var( --themeColor)">
            <img src="../../assets/logo2.png" alt="" style="width: 100%; height: 100%;">
          </div>
        </side-menu>
      </Sider>

      <Layout>
        <Header class="header-con">
          <header-bar>
            <user :message-unread-count="unreadeCount" :user-avatar="userAvatar" />
            <message-icon></message-icon>
          </header-bar>
        </Header>

        <Content class="main-content-con">
          <Layout class="main-layout-con">
              <Content class="content-wrapper">
                <!-- <keep-alive> -->
                <router-view />
              <!-- </keep-alive> -->
              </Content>
          </Layout>
        </Content>
      </Layout>
    </Layout>
</template>

<script>
import HeaderBar from './components/header-bar'
import User from './components/user'
import SideMenu from './components/side-menu/side-menu.vue'
import MessageIcon from './message-icon' 


import './main.less'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Main',

  components: { HeaderBar, User, SideMenu, MessageIcon},

  data() {
    return {
      unreadeCount: 2,
      userAvatar: require('@/assets/avatar.jpg')
    };
  },
  computed: {
    ...mapGetters(['menuList'])
  },
  mounted() {
    // console.log('this.$route.name :>> ', this.$route.name);
  },

  methods: {
    handleClick() {
      // console.log('usermain :>> ', usermain);
    },
    toPage(route) {
      
      console.log('111route :>> ', route)
      let { name, params, query } = {}
        if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      this.$router.push({name, params, query})
    },
  },
};
</script>

<style lang="less" >

</style>