import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import TableView from '../components/TableView.vue';

const routes = [
  { path: '/', name: 'Home', component: HelloWorld },
  { path: '/table', name: 'Table', component: TableView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
