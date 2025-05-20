import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const MadhavChatButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        className="relative h-16 w-16 rounded-full bg-gradient-mystic shadow-lg hover:shadow-mystic-500/20 transition-all duration-300 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NavLink to="/madhav">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <img 
              src="/lovable-uploads/Madhav2.png" 
              alt="Madhav" 
              className="w-full h-full object-cover object-center scale-110 group-hover:scale-125 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmic-900/80 to-transparent"></div>
          </div>
          <MessageCircle className="relative z-10 h-6 w-6 text-white" />
          
          {/* Tooltip */}
          {isHovered && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-cosmic-800 text-white text-sm rounded-lg shadow-lg border border-mystic-500/30 whitespace-nowrap">
              Chat with Madhav
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-cosmic-800 border-r border-b border-mystic-500/30"></div>
            </div>
          )}
        </NavLink>
      </Button>
    </div>
  );
};

export default MadhavChatButton;
