import { createHashRouter } from 'react-router-dom';
import Layout from '@/layouts/Layout';

const router = createHashRouter([
  {
    id: 'root',
    path: '/',
    loader() {
      // Our root route always provides the user, if logged in
      // return { user: fakeAuthProvider.username };
      return true;
    },
    Component: Layout,
    children: [
      {
        index: true,
        Component: () => <div>222</div>,
      },
      {
        path: 'login',
        // action: loginAction,
        // loader: loginLoader,
        Component: () => <div>333</div>,
      },
      {
        path: 'protected',
        // loader: protectedLoader,
        Component: () => <div>444</div>,
      },
    ],
  },
  {
    id: 'abc',
    path: '/abc',
    loader() {
      // Our root route always provides the user, if logged in
      // return { user: fakeAuthProvider.username };
      return true;
    },
    Component: () => <div>333</div>,
    children: [
      {
        index: true,
        Component: () => <div>222</div>,
      },
      {
        path: 'login',
        // action: loginAction,
        // loader: loginLoader,
        Component: () => <div>333</div>,
      },
      {
        path: 'protected',
        // loader: protectedLoader,
        Component: () => <div>444</div>,
      },
    ],
  },
  {
    path: '/logout',
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      // await fakeAuthProvider.signout();
      // return redirect('/');
    },
  },
]);

export default router;
