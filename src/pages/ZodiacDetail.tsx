import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import CosmicBackground from '@/components/CosmicBackground';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MadhavChatButton from '@/components/MadhavChatButton';
import SanskritSymbol from '@/components/SanskritSymbol';

const zodiacData = {
  aries: {
    sign: 'Aries',
    dates: 'Mar 21 - Apr 19', 
    element: 'Fire', 
    ruling: 'Mars', 
    symbol: '♈',
    imgSrc: 'https://source.unsplash.com/featured/?aries,zodiac',
    characteristics: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Optimistic', 'Impulsive'],
    horoscope: "Today brings a surge of energy and confidence, Aries. Your natural leadership abilities are heightened, making this an excellent day to take charge of projects or initiatives. However, be mindful of coming across too strongly. Balance your assertiveness with diplomacy for the best results. An unexpected opportunity may arise in your career or personal life—trust your instincts, but don't rush decisions."
  },
  taurus: {
    sign: 'Taurus',
    dates: 'Apr 20 - May 20', 
    element: 'Earth', 
    ruling: 'Venus', 
    symbol: '♉',
    imgSrc: 'https://source.unsplash.com/featured/?taurus,zodiac',
    characteristics: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Responsible', 'Stubborn'],
    horoscope: "Stability and comfort are highlighted today, Taurus. Your practical approach to challenges will serve you well, especially in financial matters. Consider reviewing your budget or investment strategies. Relationships with close friends or family members may require your attention—your naturally nurturing nature will help smooth any tensions. Take some time for self-care and indulge in small pleasures that ground you."
  },
  gemini: {
    sign: 'Gemini',
    dates: 'May 21 - Jun 20', 
    element: 'Air', 
    ruling: 'Mercury', 
    symbol: '♊',
    imgSrc: 'https://source.unsplash.com/featured/?gemini,zodiac',
    characteristics: ['Gentle', 'Affectionate', 'Curious', 'Adaptable', 'Quick-witted', 'Inconsistent'],
    horoscope: "Your mind is particularly sharp today, Gemini. Communication flows easily, making this an ideal time for important conversations, presentations, or writing tasks. Your natural curiosity may lead you to interesting discoveries—follow where your interests take you. Social connections are favored, and you might receive valuable information through your network. Balance mental activities with physical movement to maintain your energy throughout the day."
  }
  // Additional signs would be added here in a real implementation
};

const ZodiacDetail = () => {
  const { sign } = useParams<{ sign: string }>();
  const signData = sign ? zodiacData[sign as keyof typeof zodiacData] : null;
  
  if (!signData) {
    return (
      <div className="flex flex-col min-h-screen">
        <CosmicBackground />
        <NavBar />
        <main className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
          <Card className="card-mystic p-6 w-full max-w-lg">
            <h2 className="text-2xl font-mystic text-center mystic-gradient">Zodiac Sign Not Found</h2>
            <p className="text-gray-300 text-center mt-4">The requested zodiac sign information is not available.</p>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <CosmicBackground />
      <NavBar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <span className="text-5xl mr-4 mystic-gradient mystic-glow">{signData.symbol}</span>
            <h1 className="text-3xl md:text-4xl font-mystic font-semibold">
              <span className="mystic-gradient mystic-glow">{signData.sign} <SanskritSymbol className="inline" /></span>
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="card-mystic">
              <CardHeader>
                <h3 className="text-lg font-mystic mystic-gradient">Details</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p><span className="text-gray-400">Dates:</span> <span className="text-white">{signData.dates}</span></p>
                  <p><span className="text-gray-400">Element:</span> <span className="text-white">{signData.element}</span></p>
                  <p><span className="text-gray-400">Ruling Planet:</span> <span className="text-white">{signData.ruling}</span></p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-mystic">
              <CardHeader>
                <h3 className="text-lg font-mystic mystic-gradient">Characteristics</h3>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm text-white">
                  {signData.characteristics.map((trait, index) => (
                    <li key={index}>{trait}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-mystic">
              <CardHeader>
                <h3 className="text-lg font-mystic mystic-gradient">Compatibility</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p><span className="text-gray-400">Best Match:</span> <span className="text-white">Leo, Sagittarius</span></p>
                  <p><span className="text-gray-400">Good Match:</span> <span className="text-white">Gemini, Aquarius</span></p>
                  <p><span className="text-gray-400">Challenging:</span> <span className="text-white">Cancer, Capricorn</span></p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="card-mystic mb-8">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={signData.imgSrc} 
                alt={signData.sign} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cosmic-900"></div>
            </div>
          </Card>
          
          <Card className="card-mystic">
            <CardHeader>
              <h3 className="text-xl font-mystic mystic-gradient">Today's Horoscope</h3>
              <p className="text-xs text-gray-400">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">{signData.horoscope}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="rounded-lg bg-cosmic-800/50 p-4 border border-cosmic-700">
                  <h4 className="text-sm font-medium mystic-gradient mb-2">Love & Relationships</h4>
                  <p className="text-xs text-gray-400">Communication is key today. Express your feelings and listen carefully to others.</p>
                </div>
                
                <div className="rounded-lg bg-cosmic-800/50 p-4 border border-cosmic-700">
                  <h4 className="text-sm font-medium mystic-gradient mb-2">Career & Money</h4>
                  <p className="text-xs text-gray-400">A favorable day for financial decisions. Consider long-term investments.</p>
                </div>
                
                <div className="rounded-lg bg-cosmic-800/50 p-4 border border-cosmic-700">
                  <h4 className="text-sm font-medium mystic-gradient mb-2">Health & Wellness</h4>
                  <p className="text-xs text-gray-400">Pay attention to your physical needs. Stay hydrated and prioritize rest.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <MadhavChatButton />
      <Footer />
    </div>
  );
};

export default ZodiacDetail;
