import React, { FC, useState } from 'react';

const AboutPage: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>About Page</div>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </div>
  );
};

export default AboutPage;
