import Home from 'src/components/pages/home';
import About from 'src/components/pages/about';
import UsersList from 'src/components/molecules/users-list';

const router = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About,
    exact: true
  },
  {
    path: '/users',
    component: UsersList,
    exact: true
  }
];

export default router;
