'use client';

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';


 function Posts() {
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}
export default withPageAuthRequired(Posts);