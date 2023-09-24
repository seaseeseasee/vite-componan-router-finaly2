import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainpage from '../views/mainpage.vue'
import Allshop from '../components/Allshop.vue'

import Shop_1 from '../components/Shop_1.vue';
import Shop_2 from '../components/Shop_2.vue';
import Shop_3 from '../components/Shop_3.vue';
import Shop_4 from '../components/Shop_4.vue';
import Shop_5 from '../components/Shop_5.vue';



const shopRoutes = [
  { name: 'shop_1', component: Shop_1, shop: 'WTF Coffee Camp' },
  { name: 'shop_2', component: Shop_2, shop: 'Yonma' },
  { name: 'shop_3', component: Shop_3, shop: 'PIZZA PHU PING'},
  { name: 'shop_4', component: Shop_4, shop: 'Cat Brothers Cafe'},
  { name: 'shop_5', component: Shop_5, shop: 'Box Box Dog Cafe'},
];

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/shops',
    name: 'allshops',
    component: Allshop
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
];

shopRoutes.forEach((route) => {
  routes.push({
    path: `/shops/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
