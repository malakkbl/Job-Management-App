import { createRouter, createWebHistory } from 'vue-router';
import PageHome from '../components/PageHome.vue';
import AddJob from '../components/AddJob.vue';
import EditJob from '../components/EditJob.vue';
import JobDetail from '../components/HomePages/JobDetail.vue';

const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: PageHome
  },
  {
    path: '/add-job',
    name: 'AddJob',
    component: AddJob
  },
  {
    path: '/job/:id/edit-job',
    name: 'EditJob',
    component: EditJob
  },
  {
    path: '/job/:id',
    name: 'JobDetail',
    component: JobDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
