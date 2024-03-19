import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: 'n86ta8jrtelp', // Replace with your space ID
  environment: 'master', // defaults to 'master' if not set
  accessToken: '1i07xG_wGZ64qcPIZ_-8x0fuJzLI0rZSJtP3ENGaRq8' // Replace with your access token
});

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'portfolioblog' }) // Make sure the content_type matches your Contentful setup
      .then((response) => {
        setPosts(response.items.map(item => item.fields));
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <article key={index}>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
          <p>{post.summary}</p>
          <p>{post.date}</p>
        </article>
      ))}
    </div>
  );
}

export default Blog;