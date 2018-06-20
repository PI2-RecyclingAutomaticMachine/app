
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', redirect: () => '/get-in' },
      { path: 'get-in', name: 'Entrar', component: () => import('pages/GetIn/index') },
      { path: 'login', name: 'Log In', component: () => import('pages/LogIn/index') },
    ],
  },

  {
    path: '/signup',
    component: () => import('layouts/go-back-header'),
    children: [
      { path: '', name: 'Cadastro', component: () => import('pages/SignUp/index') },
    ],
  },

  {
    path: '/home',
    component: () => import('layouts/home'),
    meta: { auth: true },
    children: [
      { path: '', name: 'Início', component: () => import('pages/Home/index') },
      { path: 'profile', name: 'Perfil', component: () => import('pages/Profile/index') },
      { path: 'history', name: 'Histórico', component: () => import('pages/History/index') },
      { path: 'statistics', name: 'Estatísticas', component: () => import('pages/Statistics/index') },
    ],
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
