import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectCard = ({ title, description, technologies, demoUrl, githubUrl, imageUrl }) => {
  return (
    <Card className="group flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50">
      {imageUrl && (
        <div className="relative aspect-video image-zoom-wrapper bg-muted">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover image-zoom"
          />
          <div className="absolute inset-0 image-overlay opacity-80" />
        </div>
      )}
      <CardHeader className={imageUrl ? "relative z-10 -mt-8 pt-0" : ""}>
        <CardTitle className="text-xl leading-tight">{title}</CardTitle>
        <CardDescription className="leading-relaxed mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs font-medium">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex gap-3 pt-6">
        {demoUrl && (
          <Button asChild size="sm" className="flex-1 transition-transform active:scale-95">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button asChild variant="outline" size="sm" className="flex-1 transition-transform active:scale-95">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;