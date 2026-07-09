import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'SecureAuth Dashboard',
      description: 'A comprehensive authentication system with multi-factor authentication, role-based access control, and real-time security monitoring. Built with modern security best practices.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'OAuth 2.0'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Vulnerability Scanner',
      description: 'Automated security scanning tool that identifies common web vulnerabilities including XSS, SQL injection, and CSRF. Generates detailed reports with remediation suggestions.',
      technologies: ['Python', 'Flask', 'BeautifulSoup', 'SQLAlchemy'],
      demoUrl: null,
      githubUrl: 'https://github.com',
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with payment integration, inventory management, and customer analytics. Optimized for performance and SEO.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'TailwindCSS'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Network Traffic Analyzer',
      description: 'Real-time network monitoring tool that detects anomalies and potential security threats. Provides detailed packet analysis and visualization.',
      technologies: ['Python', 'Scapy', 'Django', 'Redis', 'Chart.js'],
      demoUrl: null,
      githubUrl: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with kanban boards, time tracking, and team communication features. Built for remote teams.',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSockets'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Projects - Portfolio</title>
        <meta
          name="description"
          content="Explore my web development and cybersecurity projects. From secure authentication systems to vulnerability scanners and modern web applications."
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
                Projects
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A collection of web development and cybersecurity projects showcasing my technical skills and problem-solving approach
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProjectsPage;