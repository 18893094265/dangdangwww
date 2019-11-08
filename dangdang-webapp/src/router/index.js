import Vue from "vue"
import VueRouter from "vue-router"
import indexs from "../views/index"
import mains from "../views/main"
import cars from "../views/car"
import classify from "../views/classify"
import buying from "../views/buying"
import my from "../views/my"
import detail from "../views/detail"
import login from "../views/login"

Vue.use(VueRouter);

let router = new VueRouter({
   routes:[
       {
           path: '/',
           redirect: "/main/index",
       },
       {
           path: '/main',
           component: mains,
           children:[
               {
                   path: 'index',
                   component: indexs
               },
               {
                   path: 'car',
                   component: cars
               },
               {
                   path: 'classify',
                   component: classify
               },
               {
                   path: 'buying',
                   component: buying
               },
               {
                   path: 'my',
                   component: my
               },
               {
                   path:'detail',
                   component:detail
               }
           ]
       },
       {
           path: '/login',
           component:login
       }
   ]
});

export default router