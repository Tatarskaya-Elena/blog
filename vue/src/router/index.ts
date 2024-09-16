import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import BlogHome from '../components/pages/blog/BlogHome.vue'
import NewsBlog from '../components/pages/blog/NewsBlog.vue'
import CreateNewsBlog from '../components/pages/blog/CreateNewsBlog.vue'
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
    },
  {
    path: '/blog_home',
    name: RouteNames.BLOG_HOME,
    component: BlogHome
   },
  {
    path: '/news_blog/:id',
    name: RouteNames.NEWS_BLOG,
    component: NewsBlog
  },
  {
    path: '/create_news_blog',
    name: RouteNames.CREATE_NEWS_BLOG,
    component: CreateNewsBlog
  }
]
    
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
