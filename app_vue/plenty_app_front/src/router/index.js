import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login'
import Signin from '@/components/Signin'
import Contact from '@/components/Contact'
import Profile from '@/components/Profile'
import MyPlants from '@/components/MyPlants'
import Reminders from '@/components/Reminders'
import AllPlants from '@/components/AllPlants'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/profile/id',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/profile/id/myplants',
      name: 'MyPlants',
      component: MyPlants
    },
    {
      path: '/profile/id/reminders',
      name: 'Reminders',
      component: Reminders
    },
    {
      path: '/allplants',
      name: 'AllPlants',
      component: AllPlants
    }
  ]
})
