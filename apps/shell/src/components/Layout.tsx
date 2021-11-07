import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: FC = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> | <Link to="/posts">My posts</Link> |{' '}
      <Link to="/skill-factory">Skill Factory</Link> |{' '}
      <Link to="/about">About</Link> |{' '}
    </nav>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
