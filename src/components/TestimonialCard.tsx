
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  imageSrc?: string;
  date: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  rating,
  text,
  imageSrc,
  date
}) => {
  return (
    <Card className="card-mystic p-6 transition-all duration-300 hover:mystic-border-glow">
      <div className="flex items-center mb-4">
        <div className="mr-3">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover border-2 border-mystic-500/30"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-mystic-500/20 flex items-center justify-center">
              <span className="text-mystic-300 font-semibold text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3.5 w-3.5 ${i < rating ? 'text-mystic-400 fill-mystic-400' : 'text-cosmic-600'}`} 
              />
            ))}
            <span className="text-xs text-gray-400 ml-2">{date}</span>
          </div>
        </div>
      </div>
      
      <blockquote className="text-gray-300 italic">"{text}"</blockquote>
    </Card>
  );
};

export default TestimonialCard;
