import Vue from "vue"
import VueRouter from "vue-router"
import indexs from "../views/index"
import mains from "../views/main"
import cars from "../views/car"
import classify from "../views/classify"

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
               }
           ]
       },
   ]
});

export default router