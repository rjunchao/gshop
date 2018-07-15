import Vue from 'vue'
import Vuerouter from 'vue-router'

//路由组件
import MSite from '../pages/MSite/MSite.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Search from '../pages/Search/Search.vue';
import Login from '../pages/login/Login.vue';

Vue.use(Vuerouter)
export default new Vuerouter({
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta:{
        /**
         * 元数据，可以通过$route获取
         */
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        /**
         * 元数据，可以通过$route获取
         */
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        /**
         * 元数据，可以通过$route获取
         */
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        /**
         * 元数据，可以通过$route获取
         */
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
