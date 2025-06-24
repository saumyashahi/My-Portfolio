import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const parseFrontmatter = (text) => {
  const frontmatterMatch = text.match(/^---\s*([\s\S]*?)\s*---/);
  if (!frontmatterMatch) return { frontmatter: {}, content: text };

  const frontmatterContent = frontmatterMatch[1];
  const content = text.substring(frontmatterMatch[0].length).trim();

  const frontmatter = frontmatterContent.split('\n').reduce((acc, line) => {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) return acc;

    const key = line.substring(0, separatorIndex).trim();
    const value = line.substring(separatorIndex + 1).trim().replace(/^"(.*)"$/, '$1');
    if (key) acc[key] = value;
    return acc;
  }, {});

  return { frontmatter, content };
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const manifestResponse = await fetch('/blogs/manifest.json');
        if (!manifestResponse.ok) {
          throw new Error('Blog manifest not found.');
        }
        const postFiles = await manifestResponse.json();

        const postsData = await Promise.all(
          postFiles.map(async (file) => {
            const response = await fetch(`/blogs/${file}`);
            const text = await response.text();
            const { frontmatter, content } = parseFrontmatter(text);

            return {
              slug: file.replace('.md', ''),
              ...frontmatter,
              excerpt: frontmatter.excerpt || content.substring(0, 150) + '...',
            };
          })
        );

        // Sort posts by date, newest first
        postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

        setPosts(postsData);
      } catch (error) {
        console.error("Failed to load blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="blog-page-container"><p>Loading posts...</p></div>;
  }

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
              <p className="post-description">{post.excerpt}</p>
              <span className="read-more">Read More &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog; 