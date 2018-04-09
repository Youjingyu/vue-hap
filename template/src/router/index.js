import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index/index'
import TodoMVC from '@/TodoMVC/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    {
      path: '/',
      name: 'TodoMVC',
      component: TodoMVC
    }
  ]
})
