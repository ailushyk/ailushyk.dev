import React, { FC, Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Loading } from 'ui/components';
import { Layout } from 'ui/templates/Layout';

const LayoutPage: FC = () => (
  <Layout>
    <Layout.Nav>
      <Link to="/">Home</Link> |<Link to="/posts">My posts</Link> |{' '}
      <Link to="/skill-factory">Skill Factory</Link> |{' '}
      <Link to="/about">About</Link> | <Link to="/notfound">404</Link> |{' '}
    </Layout.Nav>
    <Layout.Main>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Layout.Main>
  </Layout>
);

export default LayoutPage;
