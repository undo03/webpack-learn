import asyncComponent from './asyncComponent';

const Home = asyncComponent(() => import('../views/Home'));
const Profile = asyncComponent(() => import('../views/Profile'));

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  }
]