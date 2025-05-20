import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import CosmicBackground from '@/components/CosmicBackground';
import SanskritSymbol from '@/components/SanskritSymbol';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const PayPerQuery = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<'single' | 'pack'>('single');

  const handlePurchase = () => {
    // In a real app, would navigate to payment page with the selected option
    navigate('/payment');
  };

  const handleSkip = () => {
    toast({
      title: "Skipped for now",
      description: "You can continue with your free queries for this week.",
    });
    navigate(-1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <CosmicBackground />
      <NavBar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="card-mystic p-6 md:p-8 shadow-mystic">
            <div className="text-center mb-8">
              <SanskritSymbol className="text-4xl mystic-gradient inline-block mb-2" />
              <h1 className="text-2xl md:text-3xl font-mystic font-semibold mystic-gradient">Continue Your Cosmic Journey</h1>
              <p className="text-gray-400 mt-2">
                You've reached your free query limit for this week. Unlock more cosmic wisdom by purchasing additional queries.
              </p>
            </div>

            <Tabs value={selectedOption} onValueChange={(value) => setSelectedOption(value as 'single' | 'pack')} className="mb-8">
              <TabsList className="w-full grid grid-cols-2 bg-cosmic-800">
                <TabsTrigger value="single">Single Query</TabsTrigger>
                <TabsTrigger value="pack">Query Pack</TabsTrigger>
              </TabsList>
              
              <TabsContent value="single" className="pt-6">
                <Card className="card-mystic p-4 border-2 border-mystic-500 bg-cosmic-800/50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium mystic-gradient">Single Cosmic Query</h3>
                      <p className="text-sm text-gray-400 mt-1">Get immediate answers from Madhav</p>
                      <ul className="mt-3 space-y-1 text-sm">
                        <li className="flex items-start">
                          <span className="text-mystic-400 mr-2">✦</span>
                          <span>One detailed consultation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-mystic-400 mr-2">✦</span>
                          <span>Priority queue access</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-mystic-400 mr-2">✦</span>
                          <span>Extended response length</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mystic-gradient">$2.99</div>
                      <div className="text-xs text-gray-400">per query</div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="pack" className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card className="card-mystic p-4 border border-cosmic-600 hover:border-mystic-500 transition-colors cursor-pointer">
                    <div className="text-center">
                      <h3 className="font-medium">Small Pack</h3>
                      <div className="text-xl font-bold mystic-gradient mt-1">$9.99</div>
                      <p className="text-sm text-gray-400 mt-1">5 queries</p>
                      <p className="text-xs text-gray-500 mt-1">($1.99 per query)</p>
                    </div>
                  </Card>
                  
                  <Card className="card-mystic p-4 border-2 border-mystic-500 relative bg-cosmic-800/50">
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-mystic-500 text-xs py-1 px-2 rounded text-black font-semibold">BEST VALUE</span>
                    <div className="text-center">
                      <h3 className="font-medium">Medium Pack</h3>
                      <div className="text-xl font-bold mystic-gradient mt-1">$19.99</div>
                      <p className="text-sm text-gray-400 mt-1">12 queries</p>
                      <p className="text-xs text-gray-500 mt-1">($1.67 per query)</p>
                    </div>
                  </Card>
                  
                  <Card className="card-mystic p-4 border border-cosmic-600 hover:border-mystic-500 transition-colors cursor-pointer">
                    <div className="text-center">
                      <h3 className="font-medium">Large Pack</h3>
                      <div className="text-xl font-bold mystic-gradient mt-1">$29.99</div>
                      <p className="text-sm text-gray-400 mt-1">20 queries</p>
                      <p className="text-xs text-gray-500 mt-1">($1.50 per query)</p>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center space-y-4">
              <Button 
                onClick={handlePurchase}
                className="w-full sm:w-auto bg-gradient-mystic hover:opacity-90 py-6 px-10"
              >
                Continue to Payment
              </Button>
              
              <div>
                <button 
                  onClick={handleSkip}
                  className="text-sm text-gray-400 hover:text-gray-300 underline"
                >
                  Skip for now (wait until next week for free queries)
                </button>
              </div>
            </div>
            
            <div className="mt-8 border-t border-cosmic-700 pt-6">
              <h4 className="font-medium mb-3">Consider a Subscription</h4>
              <p className="text-sm text-gray-400 mb-4">
                Get unlimited or increased weekly queries with our monthly subscription plans.
              </p>
              <Button 
                variant="outline" 
                onClick={() => navigate('/pricing')}
                className="w-full border-mystic-500/30 hover:border-mystic-500 hover:bg-mystic-500/10"
              >
                View Subscription Plans
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PayPerQuery;
