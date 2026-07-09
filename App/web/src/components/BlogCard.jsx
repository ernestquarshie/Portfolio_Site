import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BlogCard = ({ title, excerpt, date, category, slug, imageUrl }) => {
  return (
    <Card className="group flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg border-border/50 bg-card">
      {imageUrl && (
        <div className="relative aspect-[16/9] image-zoom-wrapper bg-muted">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover image-zoom"
          />
        </div>
      )}
      <CardHeader className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="text-xs px-2.5 py-0.5 font-medium">
            {category}
          </Badge>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <Calendar className="h-3.5 w-3.5" />
            <span>{date}</span>
          </div>
        </div>
        <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="leading-relaxed text-base">{excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto pt-6 border-t border-border/40">
        <Button asChild variant="ghost" size="sm" className="w-full justify-between group/btn px-2">
          <Link to={`/blog/${slug}`}>
            Read article
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
