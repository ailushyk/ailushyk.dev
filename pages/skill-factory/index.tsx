import React, { FC } from 'react'
import { Layout } from '@/components/Layout'

const SkillFactory: FC = () => {
  return (
    <Layout>
      <h1>Skill Factory</h1>
      <article>
        <h2>Epic React</h2>
        <ul>
          <li>React Fundamentals ✔️</li>
          <li>React Hooks ✔️</li>
          <li>Advanced React Hooks ✔️</li>
          <li>Advanced React Patterns</li>
          <li>React Performance</li>
          <li>Testing React Apps</li>
          <li>React Suspense</li>
          <li>Build an Epic React App</li>
          <li>Epic React Expert Interviews</li>
        </ul>
      </article>

      <article>
        <h2>Testing JavaScript</h2>
        <ul>
          <li>Fundamentals of Testing in JavaScript</li>
          <li>JavaScript Mocking Fundamentals</li>
          <li>Static Analysis Testing JavaScript Applications</li>
          <li>Use DOM Testing Library to test any JS framework</li>
          <li>Test React Components with Jest and React Testing Library</li>
          <li>Install, Configure, and Script Cypress for JavaScript Web Applications</li>
          <li>Configure Jest for Testing JavaScript Applications</li>
          <li>Test Node.js Backends</li>
        </ul>
      </article>

      <article>
        <h2>Google UX Design Professional Certificate</h2>
        <a href="https://www.coursera.org/professional-certificates/google-ux-design">
          https://www.coursera.org/professional-certificates/google-ux-design
        </a>
      </article>

      <article>
        <hgroup>
          <h2>DAPPS</h2>
          <p>Decentralized applications</p>
        </hgroup>
        <ul>
          <li><a href="https://ethereum.org/en/dapps/">https://ethereum.org/en/dapps/</a></li>
          <li>https://www.youtube.com/user/boyindasouth</li>
        </ul>
      </article>

      <article>
        <h2>Supabase</h2>
        <p><a href="https://supabase.io/">https://supabase.io/</a></p>
      </article>

      <article>
        <h2>Firebase</h2>
        <p><a href="https://firebase.google.com/docs/guides/">https://firebase.google.com/docs/guides/</a> ✔</p>
      </article>
    </Layout>
  )
}

export default SkillFactory
