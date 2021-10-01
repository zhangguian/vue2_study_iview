import Main from '../components/main'
/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */
export default  [
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      // hideInMenu: true,
    },
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页',
        },
        component: () => import('@/views/single-page/home')
      }
    ]
  },
  {
    path: '/workbench',
    name: 'workbench',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'workbench_page',
        name: 'workbench_page',
        meta: {
          icon: 'md-notifications',
          title: '工作台'
        },
        component: () => import('@/views/workbench/workbench.vue')
      }
    ]
  },
  {
    path: '/system-settings',
    name: 'system-settings',
    component: Main,
    meta: {
      hideInBread: true,
      title: '系统设置'
    },
    children: [
      {
        path: 'role-settings_page',
        name: 'role-settings_page',
        meta: {
          icon: '_qq',
          title: '角色管理'
        },
        component: () => import('@/views/system-settings/role-settings.vue')
      },
      {
        path: 'permissions-settings_page',
        name: 'permissions-settings_page',
        meta: {
          icon: '_qq',
          title: '权限管理'
        },
        component: () => import('@/views/system-settings/permissions-settings.vue')
      },
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'user_page',
        name: 'user_page',
        meta: {
          icon: 'md-notifications',
          title: '个人设置'
        },
        component: () => import('@/views/user/user-info.vue')
      }
    ]
  },
  {
    path: '/task',
    name: 'task',
    component: Main,
    meta: {
      hideInBread: true,
      title: '个人任务'
    },
    children: [
      {
        path: 'pendingTaskList_page',
        name: 'pendingTaskList_page',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '我的待办'
        },
        component: () => import('@/views/task/pendingTaskList.vue')
      },
      {
        path: 'doneTaskList_page',
        name: 'doneTaskList_page',
        meta: {
          icon: 'md-trending-up',
          title: '我的已办'
        },
        component: () => import('@/views/task/doneTaskList.vue')
      },
    ]
  },
  {
    path: '/components',
    name: 'components',
    component: Main,
    meta: {
      hideInBread: true,
      title: '组件库'
    },
    children: [
      {
        path: 'atable_page',
        name: 'atable_page',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '表格'
        },
        component: () => import('@/views/components/ATable.vue')
      },
      {
        path: 'doneTaskList_page',
        name: 'doneTaskList_page',
        meta: {
          icon: 'md-trending-up',
          title: '我的已办'
        },
        component: () => import('@/views/task/doneTaskList.vue')
      },
      {
        path: 'login_page',
        name: 'login_page',
        meta: {
          title: '登录验证'
        },
        component: () => import('@/views/components/Login/Login.vue')
      }
    ]
  },
]