import HomePage from './components/pages/HomePage.vue';
import LoginPage from './components/pages/LoginPage.vue';
import SignupPage from './components/pages/SignupPage.vue';
import DetailPage from './components/pages/DetailPage.vue';
import UserPage from './components/pages/UserPage.vue';


export const routes = [
  {path: '/', name: 'homePage', component: HomePage},
  {path: '/signup', name: 'signup', component: SignupPage},
  {path: '/login', name: 'login', component: LoginPage},
  {path: '/recipe/:id', name: 'detailPage', component: DetailPage},
  {path: '/user', name: 'userPage', component: UserPage}
];