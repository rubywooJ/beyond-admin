import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import HomePage from '../views/HomePage.vue'
import Personal from '../views/Personal.vue'
import Article from '../views/Article.vue'
import Tag from '../views/Tag.vue'
import Friend from '../views/Friend.vue'
import Accessory from '../views/Accessory.vue'
import EditArticle from '../views/EditArticle.vue'
import AmendArticle from '../views/AmendArticle.vue'
import Comment from '../views/Comment.vue'
import Setting from '../views/Setting.vue'
import referArticle from '../views/referArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'Login'
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/HomePage',
    component: HomePage
  },
  {
    path: '/Personal',
    component: Personal
  },
  {
    path: '/Article',
    component: Article
  },
  {
    path: '/EditArticle',
    component: EditArticle
  },
  {
    path: '/AmendArticle',
    component: AmendArticle
  },
  {
    path: '/Tag',
    component: Tag
  },
  {
    path: '/Accessory',
    component: Accessory
  },
  {
    path: '/referArticle',
    component: referArticle
  },
  {
    path: '/Friend',
    component: Friend
  },
  {
    path: '/Comment',
    component: Comment
  },
  {
    path: '/Setting',
    component: Setting
  },
  // {
  //   path: '/Article',
  //   name: 'Article',
  //   // route level code-splitting
  //   // this generates a separate chunk (Article.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "Article" */ '../views/Article.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
