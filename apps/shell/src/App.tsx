import * as React from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from 'ui/components';

const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const HomePage = React.lazy(() => import('./pages/HomePage'));
const LayoutPage = React.lazy(() => import('./pages/LayoutPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const PostPage = React.lazy(() => import('./pages/posts/PostPage'));
const PostsPage = React.lazy(() => import('./pages/posts/PostsPage'));
const SkillFactoryPage = React.lazy(
  () => import('./pages/skill-factory/SkillFactoryPage')
);

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="posts">
            <Route index element={<PostsPage />} />
            <Route path=":slug" element={<PostPage />} />
          </Route>
          <Route path="skill-factory" element={<SkillFactoryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
