<template>
  <div class="user-avatar-dropdown">
    <Dropdown @on-click="handleClick">
      <Badge :dot="!!messageUnreadCount">
        <Avatar :src="userAvatar" size="large"/>
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
      // return 2
      console.log('logout :>> ', logout);
    },
    message () {
      console.log('message :>> ', message);
    },
     handleClick (name) {
      // const a = await this.logout()
      // console.log('this :>> ', a);
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
