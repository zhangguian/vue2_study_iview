<template>
  <div class="user-avatar-dropdown">
    <Dropdown @on-click="handleClick">
      <Badge :dot="!!messageUnreadCount">
        <Avatar :src="userAvatar" />
      </Badge>
      <Icon :size="18" type='md-arrow-dropdown'></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="message">
          消息中心<Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
        </DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import './user.less'
export default {
  name: 'IviewUser',

  components: {  },

  props: {
    userAvatar: {
      type: String,
      default: ''
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    logout () {
      window.sessionStorage.removeItem('token')
      this.$Notice.info({title: '退出登录'})
      this.$router.push({
        name: 'login'
      })
    },
    message () {
    },
     handleClick (name) {
      switch (name) {
        case 'logout': this.logout()
          break
        case 'message': this.message()
          break
      }
    }
  },
};
</script>
