import React from 'react';
import { Card } from '@/components/ui/card';
import CosmicBackground from '@/components/CosmicBackground';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MadhavChatButton from '@/components/MadhavChatButton';
import SanskritSymbol from '@/components/SanskritSymbol';
import ZodiacCard from '@/components/ZodiacCard';

const zodiacSigns = [
  { sign: 'Aries', dates: 'Mar 21 - Apr 19', element: 'Fire', ruling: 'Mars', iconUrl: 'https://i.pinimg.com/736x/c1/16/5f/c1165ff4b9bc977841bc693d6e072535.jpg' },
  { sign: 'Taurus', dates: 'Apr 20 - May 20', element: 'Earth', ruling: 'Venus', iconUrl: 'https://i.pinimg.com/736x/d4/85/b7/d485b765cc8963e8c09cff5fa7b025d4.jpg' },
  { sign: 'Gemini', dates: 'May 21 - Jun 20', element: 'Air', ruling: 'Mercury', iconUrl: 'https://i.pinimg.com/736x/0a/65/ef/0a65ef4536c7ea1d9d2b7654bb08015c.jpg' },
  { sign: 'Cancer', dates: 'Jun 21 - Jul 22', element: 'Water', ruling: 'Moon', iconUrl: 'https://i.pinimg.com/736x/0e/a9/6e/0ea96e230a62ff73cd753c4e6360e7da.jpg' },
  { sign: 'Leo', dates: 'Jul 23 - Aug 22', element: 'Fire', ruling: 'Sun', iconUrl: 'https://i.pinimg.com/736x/de/f7/3a/def73a542de0e4c21cb669d738afa2b1.jpg' },
  { sign: 'Virgo', dates: 'Aug 23 - Sep 22', element: 'Earth', ruling: 'Mercury', iconUrl: 'https://i.pinimg.com/736x/cb/f5/89/cbf58982fba42992a6c622a77d183e2c.jpg' },
  { sign: 'Libra', dates: 'Sep 23 - Oct 22', element: 'Air', ruling: 'Venus', iconUrl: 'https://i.pinimg.com/736x/4d/35/05/4d3505b79403231d2c7567aa06722969.jpg' },
  { sign: 'Scorpio', dates: 'Oct 23 - Nov 21', element: 'Water', ruling: 'Pluto', iconUrl: 'https://i.pinimg.com/736x/bc/c9/09/bcc90919dce7cb7113a4f298f1f6d91d.jpg' },
  { sign: 'Sagittarius', dates: 'Nov 22 - Dec 21', element: 'Fire', ruling: 'Jupiter', iconUrl: 'https://i.pinimg.com/736x/2d/5f/f5/2d5ff5fdfa059faf72777b1885312c89.jpg' },
  { sign: 'Capricorn', dates: 'Dec 22 - Jan 19', element: 'Earth', ruling: 'Saturn', iconUrl: 'https://i.pinimg.com/736x/83/28/7a/83287a776a7474df8d0c9b11cb03d0d5.jpg' },
  { sign: 'Aquarius', dates: 'Jan 20 - Feb 18', element: 'Air', ruling: 'Uranus', iconUrl: 'https://i.pinimg.com/736x/4c/46/d1/4c46d14533c86cb50bd802a08bc8d622.jpg' },
  { sign: 'Pisces', dates: 'Feb 19 - Mar 20', element: 'Water', ruling: 'Neptune', iconUrl: 'https://i.pinimg.com/736x/da/e4/fe/dae4febdafe4ccd367a609305b8cc3e6.jpg' },
];

const Horoscope = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CosmicBackground />
      <NavBar />

      <main className="flex-1 container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-mystic font-semibold mb-4">
            <span className="mystic-gradient mystic-glow">Daily Horoscopes <SanskritSymbol className="inline" /></span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore your cosmic insights for today. Select your zodiac sign to discover your personalized horoscope, 
            including love, career, and spiritual guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {zodiacSigns.map((sign) => (
            <ZodiacCard 
              key={sign.sign}
              sign={sign.sign}
              dates={sign.dates}
              element={sign.element}
              ruling={sign.ruling}
              iconUrl={sign.iconUrl}
            />
          ))}
        </div>
      </main>

      <MadhavChatButton />
      <Footer />
    </div>
  );
};

export default Horoscope;
