import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BlogCard from '@/components/BlogCard.jsx';
import { Input } from '@/components/ui/input';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      title: 'Understanding OAuth 2.0 and OpenID Connect',
      excerpt: 'A deep dive into modern authentication protocols, exploring how OAuth 2.0 and OpenID Connect work together to secure web applications.',
      date: '2026-06-18',
      category: 'Cybersecurity',
      slug: 'understanding-oauth-openid-connect',
    },
    {
      title: 'Building scalable React applications with TypeScript',
      excerpt: 'Best practices for structuring large React applications using TypeScript, including type safety patterns and component architecture.',
      date: '2026-06-10',
      category: 'Web Development',
      slug: 'scalable-react-typescript',
    },
    {
      title: 'Common web vulnerabilities and how to prevent them',
      excerpt: 'An overview of OWASP Top 10 vulnerabilities with practical examples and mitigation strategies for modern web applications.',
      date: '2026-05-28',
      category: 'Cybersecurity',
      slug: 'common-web-vulnerabilities',
    },
    {
      title: 'Optimizing Next.js performance for production',
      excerpt: 'Techniques for improving load times, reducing bundle sizes, and implementing effective caching strategies in Next.js applications.',
      date: '2026-05-15',
      category: 'Web Development',
      slug: 'nextjs-performance-optimization',
    },
    {
      title: 'Introduction to penetration testing methodologies',
      excerpt: 'A beginner-friendly guide to ethical hacking, covering reconnaissance, scanning, exploitation, and reporting phases.',
      date: '2026-05-02',
      category: 'Cybersecurity',
      slug: 'penetration-testing-intro',
    },
    {
      title: 'State management patterns in modern React',
      excerpt: 'Comparing different state management solutions including Context API, Redux, Zustand, and Jotai for various use cases.',
      date: '2026-04-20',
      category: 'Web Development',
      slug: 'react-state-management',
    },
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Blog - Portfolio</title>
        <meta
          name="description"
          content="Technical articles on web development, cybersecurity, and software engineering. Learn about modern frameworks, security best practices, and development workflows."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                Blog
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Technical insights, tutorials, and thoughts on web development and cybersecurity
              </p>

              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles by title or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card text-card-foreground"
                />
              </div>
            </motion.div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <BlogCard {...post} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;