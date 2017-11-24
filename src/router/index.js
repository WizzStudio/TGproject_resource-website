import Vue from 'vue'
import Router from 'vue-router'
import ScrollTab from '@/components/ScrollTab'
import Nav from '@/components/Nav'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'ScrollTab',
      components: {
        Nav: Nav,
        ScrollTab: ScrollTab
      }
    }
  ]
})
