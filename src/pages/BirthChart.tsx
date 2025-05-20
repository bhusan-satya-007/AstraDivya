import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import CosmicBackground from '@/components/CosmicBackground';
import SanskritSymbol from '@/components/SanskritSymbol';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { format } from 'date-fns';

const BirthChart = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [isChartGenerated, setIsChartGenerated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !birthDate || !birthTime || !birthPlace) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields for an accurate birth chart",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Generating Birth Chart",
      description: "Please wait while we analyze the celestial patterns",
    });
    
    setTimeout(() => {
      setIsChartGenerated(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <CosmicBackground />
      <NavBar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-mystic font-semibold text-center mb-4">
          <span className="mystic-gradient mystic-glow">Birth Chart Analysis</span>
        </h1>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
          Discover your cosmic blueprint based on the exact position of celestial bodies 
          at the moment of your birth. Our detailed birth chart reveals your strengths, 
          challenges, and life purpose.
        </p>
        
        <div className="max-w-4xl mx-auto">
          {!isChartGenerated ? (
            <Card className="card-mystic p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    placeholder="Enter your full name"
                    className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500 focus:ring-1 focus:ring-mystic-500/20"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Date of Birth</Label>
                    <Input 
                      id="birthDate"
                      type="date"
                      className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500 focus:ring-1 focus:ring-mystic-500/20 cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="birthTime">Time of Birth</Label>
                    <Input 
                      id="birthTime"
                      type="time"
                      className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500 focus:ring-1 focus:ring-mystic-500/20 cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full"
                      value={birthTime}
                      onChange={(e) => setBirthTime(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="birthPlace">Place of Birth</Label>
                  <Input 
                    id="birthPlace"
                    placeholder="City, Country"
                    className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500 focus:ring-1 focus:ring-mystic-500/20"
                    value={birthPlace}
                    onChange={(e) => setBirthPlace(e.target.value)}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-mystic hover:opacity-90 py-6"
                >
                  Generate Birth Chart
                </Button>
              </form>
            </Card>
          ) : (
            <div className="space-y-8">
              <Card className="card-mystic p-6 overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-mystic mystic-gradient">Birth Chart for {name}</h2>
                  <Button 
                    variant="outline" 
                    className="border-mystic-500/30 hover:border-mystic-500 hover:bg-mystic-500/10"
                    onClick={() => window.print()}
                  >
                    Download PDF
                  </Button>
                </div>
                
                <div className="mb-6 p-4 bg-cosmic-900/50 rounded-lg">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Date:</span> 
                      <p className="text-white">{new Date(birthDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Time:</span> 
                      <p className="text-white">{birthTime}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Location:</span> 
                      <p className="text-white">{birthPlace}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex justify-center items-center">
                    <div className="relative w-full max-w-xs aspect-square">
                      {/* Birth Chart Wheel */}
                      <div className="absolute inset-0 rounded-full border-2 border-mystic-500/30"></div>
                      <div className="absolute inset-[10%] rounded-full border border-mystic-500/20"></div>
                      <div className="absolute inset-[20%] rounded-full border border-mystic-500/20"></div>
                      <div className="absolute inset-[30%] rounded-full border border-mystic-500/20"></div>
                      <div className="absolute inset-[40%] rounded-full border border-mystic-500/20"></div>
                      
                      {/* Zodiac positions (simplified for demonstration) */}
                      {Array.from({ length: 12 }).map((_, index) => {
                        const angle = (index * 30) - 90;
                        const radians = angle * Math.PI / 180;
                        const x = Math.cos(radians) * 45 + 50;
                        const y = Math.sin(radians) * 45 + 50;
                        
                        return (
                          <div 
                            key={index}
                            className="absolute w-4 h-4 bg-mystic-500/70 rounded-full"
                            style={{ 
                              left: `${x}%`, 
                              top: `${y}%`,
                              transform: 'translate(-50%, -50%)'
                            }}
                          />
                        );
                      })}
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <SanskritSymbol className="text-5xl mystic-gradient" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-mystic mb-4 mystic-gradient">Planetary Positions</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-300">Sun</span>
                        <span className="text-mystic-300">Libra 15°</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-300">Moon</span>
                        <span className="text-mystic-300">Taurus 3°</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-300">Mercury</span>
                        <span className="text-mystic-300">Scorpio 8°</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-300">Venus</span>
                        <span className="text-mystic-300">Virgo 21°</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-300">Mars</span>
                        <span className="text-mystic-300">Aries 17°</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-300">Jupiter</span>
                        <span className="text-mystic-300">Cancer 9°</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-300">Saturn</span>
                        <span className="text-mystic-300">Aquarius 25°</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Tabs defaultValue="overview">
                  <TabsList className="w-full bg-cosmic-900">
                    <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                    <TabsTrigger value="planets" className="flex-1">Planets</TabsTrigger>
                    <TabsTrigger value="houses" className="flex-1">Houses</TabsTrigger>
                    <TabsTrigger value="aspects" className="flex-1">Aspects</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="pt-4">
                    <h3 className="text-lg font-mystic mb-3 mystic-gradient">Your Cosmic Blueprint</h3>
                    <p className="text-gray-300 mb-4">
                      With your Sun in Libra, Moon in Taurus, and Ascendant in Virgo, 
                      you possess a harmonious blend of air, earth, and water energies.
                      Your chart reveals a natural diplomat with practical skills and deep emotional intuition.
                    </p>
                    
                    <h4 className="text-md font-mystic mb-2 mystic-gradient">Key Strengths</h4>
                    <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                      <li>Natural diplomatic abilities and sense of fairness</li>
                      <li>Practical approach to emotions and relationships</li>
                      <li>Strong analytical mind with attention to detail</li>
                      <li>Determination and perseverance</li>
                    </ul>
                    
                    <h4 className="text-md font-mystic mb-2 mystic-gradient">Growth Opportunities</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Learning to make decisions more quickly</li>
                      <li>Developing flexibility when plans need to change</li>
                      <li>Expressing emotions more openly</li>
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="planets" className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-mystic mystic-gradient">Sun in Libra</h3>
                        <p className="text-gray-300">
                          Your core identity centers around harmony, balance, and relationships. 
                          You naturally seek fairness and beauty in your surroundings.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-mystic mystic-gradient">Moon in Taurus</h3>
                        <p className="text-gray-300">
                          Your emotional nature craves stability, comfort, and security. 
                          You process feelings slowly and thoughtfully.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-mystic mystic-gradient">Mercury in Scorpio</h3>
                        <p className="text-gray-300">
                          Your mind penetrates beneath the surface, seeking hidden truths. 
                          You communicate with intensity and persuasive power.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="houses" className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-mystic mystic-gradient">First House: Virgo</h3>
                        <p className="text-gray-300">
                          You present yourself to the world as analytical, detail-oriented, and helpful. 
                          Your approach to life is methodical and practical.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-mystic mystic-gradient">Fifth House: Capricorn</h3>
                        <p className="text-gray-300">
                          Your creative expression and approach to romance is structured and goal-oriented. 
                          You seek long-term value in pleasurable pursuits.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-mystic mystic-gradient">Tenth House: Gemini</h3>
                        <p className="text-gray-300">
                          Your career path involves communication, versatility, and intellectual pursuits. 
                          Success comes through adaptability and information sharing.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="aspects" className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-mystic mystic-gradient">Sun Trine Moon</h3>
                        <p className="text-gray-300">
                          Your conscious goals and emotional needs work in harmony, creating inner balance 
                          and ease of self-expression.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-mystic mystic-gradient">Mars Square Saturn</h3>
                        <p className="text-gray-300">
                          You may experience tension between your drive for action and the limitations of reality. 
                          Learning patience and structured effort brings success.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-mystic mystic-gradient">Venus Conjunct Jupiter</h3>
                        <p className="text-gray-300">
                          You possess natural charm, generosity, and good fortune in relationships. 
                          Beauty and abundance flow easily into your life.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
              
              <div className="text-center">
                <Button 
                  className="bg-gradient-mystic hover:opacity-90"
                  onClick={() => setIsChartGenerated(false)}
                >
                  Generate Another Chart
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BirthChart;
