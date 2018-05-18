import Vue from 'vue'
import Router from 'vue-router'
// home landing page stuff
import Home from '@/components/home/Home'
import contacts from '@/components/home/contacts'
import events from '@/components/home/events'
import gallery from '@/components/home/gallery'
import history from '@/components/home/history'
// management bog and pta
import Management from '@/components/management/management'
// academic stuff
import achievers from '@/components/academics/achievers'
import alumni from '@/components/academics/alumni'
import departments from '@/components/academics/departments'
import feestructure from '@/components/academics/feestructure'
import results from '@/components/academics/results'
// staff stuff
import teachingstaff from '@/components/staff/teachingstaff'
import nonteachingstaff from '@/components/staff/nonteachingstaff'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/history',
      name: 'history',
      component: history
    },
    {
      path: '/management',
      name: 'Management',
      component: Management
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: contacts
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery
    },
    {
      path: '/achievers',
      name: 'achievers',
      component: achievers
    },
    {
      path: '/alumni',
      name: 'alumni',
      component: alumni
    },
    {
      path: '/departments',
      name: 'departments',
      component: departments
    },
    {
      path: '/feestructure',
      name: 'feestructure',
      component: feestructure
    },
    {
      path: '/results',
      name: 'results',
      component: results
    },
    {
      path: '/teachingstaff',
      name: 'teachingstaff',
      component: teachingstaff
    },
    {
      path: '/nonteachingstaff',
      name: 'nonteachingstaff',
      component: nonteachingstaff
    }
  ],
  mode: 'history',
  hashbang: false
})
