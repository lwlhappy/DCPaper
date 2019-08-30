import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'userIndex',
      component: () => import('@/components/user/userIndex')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/components/user/userIndex')
    },
    {
      path: '/createPaper',
      name: 'createPaper',
      component: () => import('@/components/user/createPaper/createPaper'),
    },
    {
      path: '/previewPaper',
      name: 'previewPaper',
      component: () => import('@/components/user/createPaper/previewPaper')
    },
    {
      path: '/selectQuestions',
      name: 'selectQuestions',
      component: () => import('@/components/user/createPaper/selectQuestions')
    },
    {
      path: '/allQuestion',
      name: 'allQuestion',
      component: () => import('@/components/user/questionBank/allQuestion')
    },
    {
      path: '/downPaper',
      name: 'downPaper',
      component: () => import('@/components/user/downPaper/downPaper')
    },
    {
      path: '/knowledgeList',
      name: 'knowledgeList',
      component: () => import('@/components/user/knowledgePoints/knowledgeList')
    }
  ]
})
