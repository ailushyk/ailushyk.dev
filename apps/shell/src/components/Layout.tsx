import React, { FC, Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Loading } from './Loading';
const RemoteComponent = React.lazy(() => import('ui/components/CoolComponent'));

const Layout: FC = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> |<Link to="/posts">My posts</Link> |{' '}
      <Link to="/skill-factory">Skill Factory</Link> |{' '}
      <Link to="/about">About</Link> |{' '}
    </nav>
    <main>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <RemoteComponent />
      </Suspense>
    </main>
  </div>
);

export default Layout;
