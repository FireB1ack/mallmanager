import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import Users from '@/components/users/users.vue'
import Right from '@/components/roles/right.vue'
import Role from '@/components/roles/role.vue'

import {Message} from 'element-ui'
Vue.use(Router);

const router = new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    }, {
      name: 'home',
      path: '/',
      component: Home,
      children: [{
        name: 'users',
        path: 'users',
        component: Users
      }, {
        name: 'rights',
        path: 'rights',
        component: Right
      }, {
        name: 'roles',
        path: 'roles',
        component: Role
      }]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next();
  } else {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push({name: 'login'});
      Message.warning('请先登陆')
    } else {
      next()
    }
  }
});

export default router;
