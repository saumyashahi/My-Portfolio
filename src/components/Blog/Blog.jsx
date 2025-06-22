import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // In a real app, you might fetch this from a server or a static file index.
    // For now, we'll hardcode the known posts.
    const postFiles = ['my-first-post.md']; // Add new .md files here

    const fetchPosts = async () => {
      const postsData = await Promise.all(
        postFiles.map(async (file) => {
          const response = await fetch(`/blogs/${file}`);
          const text = await response.text();
          // This is a simple frontmatter parser. A library might be better for complex cases.
          const frontmatterMatch = text.match(/---\s*([\s\S]*?)\s*---/);
          const content = text.replace(/---\s*[\s\S]*?\s*---/, '').trim();
          const frontmatter = frontmatterMatch[1].split('\n').reduce((acc, line) => {
            const [key, ...value] = line.split(':');
            if(key) acc[key.trim()] = value.join(':').trim().replace(/"/g, '');
            return acc;
          }, {});

          return {
            slug: file.replace('.md', ''),
            ...frontmatter,
            description: frontmatter.description || content.substring(0, 150) + '...',
          };
        })
      );
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-page-container">
      <h1 className="blog-title text-accent">My Musings</h1>
      <p className="blog-subtitle">A collection of thoughts on technology, creativity, and life.</p>
      
      <div className="blog-list">
        {posts.map(post => (
          <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-post-card">
            <div className="card-content">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="post-description">{post.description}</p>
              <span className="read-more">Read More &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog; 