import { createRouter, createWebHistory } from 'vue-router';


// Lazy loading de vistas
const Home = () => import('@/views/Home.vue');
const ProductDetail = () => import('@/views/ProductDetail.vue');
const Cart = () => import('@/views/Cart.vue');
const About = () => import('@/views/About.vue');
const NotFound = () => import('@/views/NotFound.vue');

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/about', name: 'About', component: About },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
];



const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
