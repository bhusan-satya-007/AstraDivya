import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Heart, Briefcase, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import CosmicBackground from '@/components/CosmicBackground';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MadhavChatButton from '@/components/MadhavChatButton';
import SanskritSymbol from '@/components/SanskritSymbol';
import { dailyHoroscopes } from '@/data/horoscopes';

const ZodiacHoroscope = () => {
  const { sign } = useParams<{ sign: string }>();
  const horoscope = sign ? dailyHoroscopes[sign as keyof typeof dailyHoroscopes] : null;
  
  if (!horoscope) {
    return (
      <div className="flex flex-col min-h-screen">
        <CosmicBackground />
        <NavBar />
        <main className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
          <Card className="card-mystic p-6 w-full max-w-lg">
            <h2 className="text-2xl font-mystic text-center mystic-gradient">Horoscope Not Found</h2>
            <p className="text-gray-300 text-center mt-4">The requested horoscope is not available.</p>
            <Button asChild className="w-full mt-6 bg-gradient-mystic">
              <NavLink to="/horoscope">Back to Horoscopes</NavLink>
            </Button>
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

      <main className="flex-1 container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Button 
            asChild 
            variant="ghost" 
            className="mb-6 text-mystic-300 hover:text-mystic-400"
          >
            <NavLink to="/horoscope" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Horoscopes
            </NavLink>
          </Button>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-mystic font-semibold mb-2">
              <span className="mystic-gradient mystic-glow capitalize">{sign}'s Daily Horoscope</span>
            </h1>
            <p className="text-gray-400">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="card-mystic hover:mystic-border-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-mystic-400" />
                  <h3 className="text-lg font-mystic mystic-gradient">General Reading</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{horoscope.general}</p>
              </CardContent>
            </Card>

            <Card className="card-mystic hover:mystic-border-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-mystic-400" />
                  <h3 className="text-lg font-mystic mystic-gradient">Love & Relationships</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{horoscope.love}</p>
              </CardContent>
            </Card>

            <Card className="card-mystic hover:mystic-border-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-mystic-400" />
                  <h3 className="text-lg font-mystic mystic-gradient">Career & Finance</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{horoscope.career}</p>
              </CardContent>
            </Card>

            <Card className="card-mystic hover:mystic-border-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-mystic-400" />
                  <h3 className="text-lg font-mystic mystic-gradient">Health & Wellness</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{horoscope.health}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="card-mystic hover:mystic-border-glow transition-all duration-300">
            <CardHeader>
              <h3 className="text-lg font-mystic mystic-gradient">Lucky Elements</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-cosmic-800/50 border border-cosmic-700 hover:border-mystic-500/50 transition-colors">
                  <p className="text-sm text-gray-400 mb-1">Lucky Number</p>
                  <p className="text-xl font-mystic mystic-gradient">{horoscope.lucky.number}</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-cosmic-800/50 border border-cosmic-700 hover:border-mystic-500/50 transition-colors">
                  <p className="text-sm text-gray-400 mb-1">Lucky Color</p>
                  <p className="text-xl font-mystic mystic-gradient">{horoscope.lucky.color}</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-cosmic-800/50 border border-cosmic-700 hover:border-mystic-500/50 transition-colors">
                  <p className="text-sm text-gray-400 mb-1">Best Time</p>
                  <p className="text-xl font-mystic mystic-gradient">{horoscope.lucky.time}</p>
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

export default ZodiacHoroscope; 