import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check } from 'lucide-react';
import CosmicBackground from '@/components/CosmicBackground';
import SanskritSymbol from '@/components/SanskritSymbol';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  // Pricing data
  const plans = [
    {
      name: 'Free',
      description: 'Explore the basics of your cosmic path',
      price: { monthly: 0, yearly: 0 },
      features: [
        'Daily horoscope for your sign',
        'Limited birth chart analysis',
        '3 Madhav chat messages per day',
        'Access to basic cosmic insights',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Celestial',
      description: 'Unlock deeper cosmic wisdom',
      price: { monthly: 9.99, yearly: 99.99 },
      features: [
        'All Free features',
        'Complete birth chart analysis',
        'Unlimited Madhav chat messages',
        'Weekly personalized forecasts',
        'Compatibility reports',
        'Transit analysis',
      ],
      cta: 'Start 7-Day Free Trial',
      popular: true,
    },
    {
      name: 'Cosmic Master',
      description: 'Maximum astral enlightenment',
      price: { monthly: 19.99, yearly: 199.99 },
      features: [
        'All Celestial features',
        'Priority access to new features',
        'Madhav voice conversations',
        'Monthly 1-on-1 astrologer consultation',
        'Personalized cosmic event alerts',
        'Past life insights',
        'Exclusive cosmic workshops',
      ],
      cta: 'Start 7-Day Free Trial',
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <CosmicBackground />
      <NavBar />

      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-5xl font-mystic font-semibold text-center mb-4">
          <span className="mystic-gradient mystic-glow">Cosmic Plans</span>
        </h1>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          Choose the level of celestial guidance that resonates with your spiritual journey
        </p>
        
        <div className="flex justify-center mb-8">
          <Tabs 
            defaultValue="monthly" 
            className="w-72"
            onValueChange={(value) => setBillingCycle(value as 'monthly' | 'yearly')}
          >
            <TabsList className="grid w-full grid-cols-2 bg-cosmic-800">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">
                Yearly
                <span className="ml-2 py-0.5 px-2 bg-mystic-500/20 text-mystic-300 text-xs rounded-full">
                  Save 16%
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`card-mystic overflow-hidden transition-all hover:mystic-border-glow ${
                plan.popular ? 'border-mystic-500/50 ring-1 ring-mystic-500/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-mystic text-white text-center py-1 text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-mystic font-semibold mb-2">
                  {plan.name === 'Free' ? (
                    <span className="text-white">{plan.name}</span>
                  ) : (
                    <span className="mystic-gradient">{plan.name}</span>
                  )}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end mb-1">
                    <span className="text-3xl font-bold text-white">
                      {plan.price[billingCycle] === 0 ? 'Free' : `$${plan.price[billingCycle]}`}
                    </span>
                    {plan.price[billingCycle] > 0 && (
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </span>
                    )}
                  </div>
                  {plan.price.monthly > 0 && (
                    <p className="text-gray-500 text-xs">
                      {billingCycle === 'yearly' ? 'Billed annually' : 'Billed monthly'}
                    </p>
                  )}
                </div>
                
                <Button 
                  asChild 
                  className={
                    plan.price.monthly === 0
                      ? "w-full mb-6 bg-cosmic-700 hover:bg-cosmic-600"
                      : "w-full mb-6 bg-gradient-mystic hover:opacity-90"
                  }
                >
                  <NavLink to={plan.price.monthly === 0 ? "/signup" : "/payment"}>
                    {plan.cta}
                  </NavLink>
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex">
                      <Check className="text-mystic-400 h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-mystic font-semibold text-center mb-8">
            <span className="mystic-gradient">Frequently Asked Questions</span>
          </h2>
          
          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              {
                question: "Can I change my plan later?",
                answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time through your account settings."
              },
              {
                question: "Is my birth chart information private?",
                answer: "Absolutely. All your personal information and birth chart data is encrypted and kept strictly confidential."
              },
              {
                question: "How accurate is Madhav's guidance?",
                answer: "Madhav combines ancient astrological wisdom with modern AI to provide insights. While many users report remarkable accuracy, cosmic guidance should complement, not replace, personal judgment."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through our payment provider."
              },
              {
                question: "Can I get a refund if I'm not satisfied?",
                answer: "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, simply contact our support team."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-mystic p-5">
                <h3 className="font-mystic text-lg mb-2 text-white">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Have more questions? <NavLink to="/contact" className="text-mystic-300 hover:text-mystic-400">Contact our support team</NavLink>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
