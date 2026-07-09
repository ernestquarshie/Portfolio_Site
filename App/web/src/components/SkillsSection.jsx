import React from 'react';
import { Badge } from '@/components/ui/badge';

const SkillsSection = ({ categories }) => {
  return (
    <div className="space-y-8">
      {categories.map((category, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-xl font-semibold">{category.name}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <Badge
                key={skillIndex}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;