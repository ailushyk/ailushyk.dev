import * as React from 'react';
import { Suspense } from 'react';
import { configApp } from './config';
import { Route, Routes } from 'react-router-dom';
import { Loading } from './components/Loading';

const Layout = React.lazy(() => import('./components/Layout'));
const HomePage = React.lazy(() => import('./pages/HomePage'));
const PostsPage = React.lazy(() => import('./pages/posts/PostsPage'));
const SkillFactoryPage = React.lazy(
  () => import('./pages/skill-factory/SkillFactoryPage')
);
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const PostPage = React.lazy(() => import('./pages/posts/PostPage'));

configApp();

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts">
            <Route index element={<PostsPage />} />
            <Route path=":post" element={<PostPage />} />
          </Route>
          <Route path="skill-factory" element={<SkillFactoryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
