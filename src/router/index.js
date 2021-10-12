import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Single from '../views/Single.vue'
import Driver from '../views/Driver.vue'
import Payment from '../views/Payment.vue'
import Done from '../views/Done.vue'
import Cabinet from '../views/Cabinet.vue'
import Booking from '../views/Booking.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/single/:slug',
    name: 'single',
    component: Single
  },
  {
    path: '/single/:slug/driver',
    name: 'driver',
    component: Driver
  },
  {
    path: '/single/:slug/payment',
    name: 'payment',
    component: Payment
  },
  {
    path: '/single/:slug/done',
    name: 'done',
    component: Done
  },
  {
    path: '/cabinet',
    name: 'cabinet',
    component: Cabinet
  },
  {
    path: '/booking',
    name: 'booking',
    component: Booking
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
