import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Shield, PenTool } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const roles = [
    {
      icon: Code2,
      title: 'Web developer',
      description: 'Building modern, responsive web applications with cutting-edge technologies',
    },
    {
      icon: Shield,
      title: 'Cybersecurity researcher',
      description: 'Analyzing vulnerabilities and developing secure solutions for digital systems',
    },
    {
      icon: PenTool,
      title: 'Technical writer',
      description: 'Creating clear, comprehensive documentation and educational content',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - Web developer, cybersecurity researcher, and technical writer</title>
        <meta
          name="description"
          content="Professional portfolio showcasing web development projects, cybersecurity research, and technical writing. Explore my work and get in touch."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1587637721784-024d2b51e1dd)',
            }}
          />
          <div className="absolute inset-0 hero-overlay" />
          
          <div className="relative z-10 container-custom py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Building secure digital experiences through code and research
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                I craft robust web applications, investigate security vulnerabilities, and share knowledge through technical writing. Let's create something exceptional together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base">
                  <Link to="/projects">
                    View projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/blog">Read blog</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="text-base">
                  <Link to="/contact">Contact me</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Roles Section */}
        <section className="py-20 bg-muted/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What I do</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Combining technical expertise across multiple disciplines to deliver comprehensive solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;