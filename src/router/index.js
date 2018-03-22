import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Index from '@/components/layout/Index'
import Home from '@/components/layout/Home'
import Classify from '@/components/layout/Classify'
import Community from '@/components/layout/Community'
import ShoppingCar from '@/components/layout/ShoppingCar'
import Mine from '@/components/layout/Mine'
import Detail from '@/components/layout/detail'

import Area from '@/components/home/Area'
import Product from '@/components/list/Product'

import Search from '@/components/classify/Search'
import SideNav from '@/components/classify/SideNav'
import GoodContent from '@/components/classify/GoodContent'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Index,
      redirect: '/home',
      children: [{
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: '/classify',
          redirect:'/classify/0'
        },
        {
          path: 'classify/:page',
          name: 'classify',
          component: Classify,
          props: true
        },
        {
          path: 'shoppingcar',
          name: 'shoppingcar',
          component: ShoppingCar
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        },
      ]
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/product/:class',
      name: 'product',
      component: Product
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: 'area',
      name: 'area',
      component: Area
    },

  ]
})
