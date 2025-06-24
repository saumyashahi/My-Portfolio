import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState({ content: '', frontmatter: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/blogs/${slug}.md`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const text = await response.text();
        const frontmatterMatch = text.match(/---\s*([\s\S]*?)\s*---/);
        const content = text.replace(/---\s*[\s\S]*?\s*---/, '').trim();
        const frontmatter = frontmatterMatch[1].split('\n').reduce((acc, line) => {
          const [key, ...value] = line.split(':');
          if (key) acc[key.trim()] = value.join(':').trim().replace(/"/g, '');
          return acc;
        }, {});
        
        setPost({ content, frontmatter });
      } catch (error) {
        console.error("Failed to fetch post:", error);
        setPost({ content: '## Post Not Found\n\nSorry, we could not find the post you were looking for.', frontmatter: { title: 'Not Found' } });
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-post-container">
        <div className="skeleton-title" />
        <div className="skeleton-date" />
        <div className="skeleton-content" />
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <h1 className="blog-post-title">{post.frontmatter.title}</h1>
      <p className="blog-post-date">{new Date(post.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <div className="markdown-content">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            img: (props) => <img {...props} loading="lazy" />
          }}
        >{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost; 