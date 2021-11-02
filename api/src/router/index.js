import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewsView from '@/views/NewsView.vue'
import AskView from '@/views/AskView.vue'
import JobsView from '@/views/JobsView.vue'
import UserView from '@/views/UserView.vue'
import ItemView from '@/views/ItemView.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Create',
      redirect: '/news',
    },  
    {
      path: '/news',
      // name: 'Create',
      component: NewsView
    },    
    {
      path: '/ask',
      // name: 'Create',
      component: AskView
    },
    {
      path: '/jobs',
      // name: 'Create',
      component: JobsView
    },
    {
      path: '/user',
      // name: 'Create',
      component: UserView
    },
    {
      path: '/item',
      // name: 'Create',
      component: ItemView
    }

  ]
});

// 메인화면 보여주기