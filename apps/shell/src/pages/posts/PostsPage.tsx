import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    name: 'Santa Monica',
    number: 1995,
    amount: '$10,800',
    due: '12/05/1995',
  },
  {
    name: 'Stankonia',
    number: 2000,
    amount: '$8,000',
    due: '10/31/2000',
  },
  {
    name: 'Ocean Avenue',
    number: 2003,
    amount: '$9,500',
    due: '07/22/2003',
  },
  {
    name: 'Tubthumper',
    number: 1997,
    amount: '$14,000',
    due: '09/01/1997',
  },
  {
    name: 'Wide Open Spaces',
    number: 1998,
    amount: '$4,600',
    due: '01/27/2998',
  },
];

const PostsPage: FC = () => (
  <div>
    <h2>Posts</h2>
    {posts.map((post) => (
      <div key={post.number}>
        <Link to={post.number.toString()}>{post.name}</Link>
      </div>
    ))}
  </div>
);

export default PostsPage;
