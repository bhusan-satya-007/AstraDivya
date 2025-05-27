import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Mic } from 'lucide-react';
import SanskritSymbol from './SanskritSymbol';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'madhav';
  timestamp: Date;
}

const MadhavChatInterface = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Greetings! I am Madhav, your cosmic guide. How are you feeling today?",
      sender: 'madhav',
      timestamp: new Date()
    }
  ]);
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate Madhav's response
    setTimeout(() => {
      const responses = [
        "The stars reveal a path of growth ahead. Your spiritual journey will be illuminated in the coming days.",
        "I sense a shift in your cosmic energy. This alignment suggests new opportunities will present themselves soon.",
        "The celestial patterns indicate a time of reflection. Trust your intuition during this lunar cycle.",
        "Your aura shows remarkable strength. The universe supports your current endeavors.",
        "The ancient wisdom speaks of patience in your situation. Allow the cosmic forces to align naturally."
      ];
      
      const madhavResponse: Message = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'madhav',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, madhavResponse]);
    }, 1000);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    // Simulate voice recognition
    if (!isRecording) {
      setTimeout(() => {
        setInput("What does my future hold?");
        setIsRecording(false);
      }, 2000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-center p-4 border-b border-cosmic-700">
        <div className="flex items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/Madhav2.png" 
              alt="Madhav" 
              className="w-10 h-10 object-cover rounded-full border-2 border-mystic-400"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-cosmic-800 rounded-full"></span>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-semibold mystic-gradient">Madhav</h3>
            <p className="text-xs text-gray-400">Cosmic Guide</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'madhav' && (
              <div className="mr-2">
                <img 
                  src="/lovable-uploads/Madhav2.png" 
                  alt="Madhav" 
                  className="w-8 h-8 object-cover rounded-full border border-mystic-400"
                />
              </div>
            )}
            <div 
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.sender === 'user' 
                  ? 'bg-mystic-500/20 text-white' 
                  : 'bg-cosmic-700 border border-cosmic-600'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs text-gray-500 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-cosmic-700">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className={`rounded-full ${isRecording ? 'bg-red-500/20 text-red-500' : 'hover:bg-cosmic-700'}`}
            onClick={toggleRecording}
          >
            <Mic className="h-5 w-5" />
          </Button>
          
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Madhav about your cosmic path..."
            className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
          />
          
          <Button 
            size="icon" 
            className="rounded-full bg-gradient-mystic hover:opacity-90"
            onClick={handleSend}
            disabled={!input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MadhavChatInterface;
