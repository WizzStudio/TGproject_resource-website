import Vue from 'vue'
import Router from 'vue-router'
import ScrollTab from '@/components/ScrollTab'
import Nav from '@/components/Nav'
import DetailPage from '../components/DetailPage.vue'
import Comment from '@/components/Comment'
import mainPage from '../components/mainPage.vue'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: mainPage
    },
    {
      path: '/detailPages',
      name: 'detailPages',
      component: DetailPage
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment
    }
  ]
})
