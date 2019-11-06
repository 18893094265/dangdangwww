import Vue from "vue"
import VueRouter from "vue-router"
import index from "../views/index"
import main from "../views/main"
import car from "../views/car"

Vue.use(VueRouter);

let router = new VueRouter({
   router:[
       {
           path: '/',
           redirect: main,
       },
       {
           path: '/main',
           component: index,
       },
       {
           path: '/car',
           component: car
       }
   ]
});

export default router