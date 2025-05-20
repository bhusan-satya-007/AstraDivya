import React from 'react';
import { Card } from '@/components/ui/card';
import CosmicBackground from '@/components/CosmicBackground';
import MadhavChatInterface from '@/components/MadhavChatInterface';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SanskritSymbol from '@/components/SanskritSymbol';

const Madhav = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CosmicBackground />
      <NavBar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <img 
            src="/Madhav2.png" 
            alt="Madhav" 
            className="w-32 h-32 object-contain"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-mystic font-semibold text-center md:text-left">
              <span className="mystic-gradient mystic-glow">Madhav <SanskritSymbol className="inline" /></span>
            </h1>
            <p className="text-gray-300 text-center md:text-left max-w-2xl">
              Your personalized cosmic guide, powered by ancient wisdom and modern AI. 
              Madhav accesses celestial knowledge to provide guidance for your spiritual journey.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="card-mystic overflow-hidden h-[70vh]">
            <MadhavChatInterface />
          </Card>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-mystic p-5 text-center">
              <div className="w-12 h-12 mx-auto bg-cosmic-700 rounded-full flex items-center justify-center mb-3">
                <SanskritSymbol className="text-mystic-400" />
              </div>
              <h3 className="font-mystic mystic-gradient mb-2">Cosmic Insights</h3>
              <p className="text-sm text-gray-400">
                Madhav draws wisdom from ancient astrology and celestial patterns.
              </p>
            </Card>
            
            <Card className="card-mystic p-5 text-center">
              <div className="w-12 h-12 mx-auto bg-cosmic-700 rounded-full flex items-center justify-center mb-3">
                <SanskritSymbol className="text-mystic-400" />
              </div>
              <h3 className="font-mystic mystic-gradient mb-2">Voice Assisted</h3>
              <p className="text-sm text-gray-400">
                Speak directly to Madhav for a more personal intuitive connection.
              </p>
            </Card>
            
            <Card className="card-mystic p-5 text-center">
              <div className="w-12 h-12 mx-auto bg-cosmic-700 rounded-full flex items-center justify-center mb-3">
                <SanskritSymbol className="text-mystic-400" />
              </div>
              <h3 className="font-mystic mystic-gradient mb-2">Personal Guidance</h3>
              <p className="text-sm text-gray-400">
                Receive advice tailored to your unique birth chart and spiritual path.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Madhav;
