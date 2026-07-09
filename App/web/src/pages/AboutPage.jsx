import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SkillsSection from '@/components/SkillsSection.jsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AboutPage = () => {
  const skillCategories = [
    {
      name: 'Web development',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Express',
        'PostgreSQL',
        'MongoDB',
        'TailwindCSS',
        'GraphQL',
        'REST APIs',
      ],
    },
    {
      name: 'Cybersecurity',
      skills: [
        'Penetration testing',
        'OWASP Top 10',
        'Network security',
        'Cryptography',
        'Security auditing',
        'Vulnerability assessment',
        'Incident response',
        'Secure coding',
      ],
    },
    {
      name: 'Technical writing',
      skills: [
        'Documentation',
        'API documentation',
        'Technical tutorials',
        'Security advisories',
        'Code reviews',
        'Technical blogging',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>About - Portfolio</title>
        <meta
          name="description"
          content="Learn about my background in web development, cybersecurity research, and technical writing. Discover my skills, experience, and professional journey."
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
              className="max-w-4xl mx-auto"
            >
              {/* Header */}
              <div className="text-center mb-12">
                <Avatar className="h-32 w-32 mx-auto mb-6 rounded-xl">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=professional" alt="Professional avatar" />
                  <AvatarFallback className="text-2xl rounded-xl">JD</AvatarFallback>
                </Avatar>
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                  About me
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionate about building secure, scalable web applications and sharing knowledge
                </p>
              </div>

              {/* Background Story */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Background</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My journey into technology started with a curiosity about how systems work and how they can be broken. This dual interest led me to pursue both web development and cybersecurity, finding the intersection between building and securing digital products fascinating.
                  </p>
                  <p>
                    Over the years, I've worked on projects ranging from small business websites to enterprise-level security audits. Each project has taught me the importance of writing clean, maintainable code while keeping security at the forefront of every decision.
                  </p>
                  <p>
                    I believe in continuous learning and sharing knowledge with the community. Through technical writing and open-source contributions, I aim to help others navigate the complex landscape of modern web development and security.
                  </p>
                </div>
              </motion.section>

              {/* Professional Summary */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Professional summary</h2>
                <div className="bg-card rounded-2xl p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Web developer</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Specializing in React-based applications with a focus on performance, accessibility, and user experience. Experienced in building full-stack solutions using modern frameworks and cloud infrastructure.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cybersecurity researcher</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Conducting security assessments, vulnerability research, and developing secure coding practices. Experienced in penetration testing methodologies and security architecture design.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technical writer</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Creating comprehensive documentation, tutorials, and technical articles that make complex concepts accessible. Focused on helping developers build better, more secure applications.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Skills */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills & expertise</h2>
                <SkillsSection categories={skillCategories} />
              </motion.section>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;