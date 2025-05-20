import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';
import CosmicBackground from '@/components/CosmicBackground';
import SanskritSymbol from '@/components/SanskritSymbol';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Payment = () => {
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('card');
  const [cardType, setCardType] = useState<'debit' | 'credit'>('debit');
  const [upiOption, setUpiOption] = useState<string>('phonepe');
  const [bankOption, setBankOption] = useState<string>('sbi');
  
  // Card payment state
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  
  // Billing state
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  // For subscription plan selection
  const [subscriptionPlan, setSubscriptionPlan] = useState<'basic' | 'premium' | 'celestial'>('basic');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === 'card' && (!cardName || !cardNumber || !cardExpiry || !cardCvc)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all card details",
        variant: "destructive",
      });
      return;
    }
    
    if (!agreeTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, we would process the payment here
    toast({
      title: "Processing Payment",
      description: "Please wait while we confirm your subscription",
    });
    
    // Simulate the payment processing with a timeout
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: "Welcome to your cosmic journey!",
      });
    }, 2000);
  };

  const getBanksList = () => {
    const domesticBanks = ['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Canara Bank', 'Bank of Baroda', 'Punjab National Bank', 'Yes Bank'];
    const foreignBanks = ['Chase Bank', 'Bank of America', 'HSBC', 'Citibank', 'Wells Fargo', 'Barclays', 'Deutsche Bank', 'BNP Paribas'];
    
    return [...domesticBanks, ...foreignBanks].sort();
  };
  
  const banks = getBanksList();

  return (
    <div className="flex flex-col min-h-screen">
      <CosmicBackground />
      <NavBar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-mystic font-semibold text-center mb-6">
          <span className="mystic-gradient mystic-glow">Complete Your Subscription <SanskritSymbol className="inline" /></span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Payment Form */}
            <div className="md:col-span-7">
              <Card className="card-mystic p-6 mb-8">
                <h2 className="text-xl font-medium mb-4">Choose Your Plan</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <Card 
                    className={`card-mystic p-4 cursor-pointer border-2 ${subscriptionPlan === 'basic' ? 'border-mystic-500' : 'border-transparent'}`}
                    onClick={() => setSubscriptionPlan('basic')}
                  >
                    <div className="text-center">
                      <h3 className="font-mystic mystic-gradient text-lg mb-1">Basic</h3>
                      <div className="flex items-baseline justify-center">
                        <span className="text-2xl font-bold">$5.99</span>
                        <span className="text-sm text-gray-400 ml-1">/mo</span>
                      </div>
                      <ul className="text-sm text-gray-300 mt-3 space-y-1">
                        <li>• Daily Horoscope</li>
                        <li>• Birth Chart Analysis</li>
                        <li>• 20 Madhav Queries/mo</li>
                      </ul>
                    </div>
                  </Card>
                  
                  <Card 
                    className={`card-mystic p-4 cursor-pointer border-2 relative ${subscriptionPlan === 'premium' ? 'border-mystic-500' : 'border-transparent'}`}
                    onClick={() => setSubscriptionPlan('premium')}
                  >
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-mystic-500 text-xs py-1 px-2 rounded text-black font-semibold">POPULAR</span>
                    <div className="text-center">
                      <h3 className="font-mystic mystic-gradient text-lg mb-1">Premium</h3>
                      <div className="flex items-baseline justify-center">
                        <span className="text-2xl font-bold">$9.99</span>
                        <span className="text-sm text-gray-400 ml-1">/mo</span>
                      </div>
                      <ul className="text-sm text-gray-300 mt-3 space-y-1">
                        <li>• Everything in Basic</li>
                        <li>• Relationship Compatibility</li>
                        <li>• 50 Madhav Queries/mo</li>
                      </ul>
                    </div>
                  </Card>
                  
                  <Card 
                    className={`card-mystic p-4 cursor-pointer border-2 ${subscriptionPlan === 'celestial' ? 'border-mystic-500' : 'border-transparent'}`}
                    onClick={() => setSubscriptionPlan('celestial')}
                  >
                    <div className="text-center">
                      <h3 className="font-mystic mystic-gradient text-lg mb-1">Celestial</h3>
                      <div className="flex items-baseline justify-center">
                        <span className="text-2xl font-bold">$19.99</span>
                        <span className="text-sm text-gray-400 ml-1">/mo</span>
                      </div>
                      <ul className="text-sm text-gray-300 mt-3 space-y-1">
                        <li>• Everything in Premium</li>
                        <li>• Future Predictions</li>
                        <li>• Unlimited Madhav Queries</li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </Card>
              
              <Card className="card-mystic p-6">
                <h2 className="text-xl font-medium mb-6">Payment Method</h2>
                
                <Tabs defaultValue="card" className="mb-6" onValueChange={(value) => setPaymentMethod(value as 'card' | 'upi' | 'netbanking')}>
                  <TabsList className="w-full grid grid-cols-3 bg-cosmic-800">
                    <TabsTrigger value="card">
                      <span className="flex items-center">
                        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                          <path d="M2 10H22" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        Card
                      </span>
                    </TabsTrigger>
                    <TabsTrigger value="upi">
                      <span className="flex items-center">
                        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 9L20 12L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7 9L4 12L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        UPI
                      </span>
                    </TabsTrigger>
                    <TabsTrigger value="netbanking">
                      <span className="flex items-center">
                        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M12 7.5V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M8 7.5V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M16 7.5V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Net Banking
                      </span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="card" className="pt-4">
                    <div className="mb-4">
                      <RadioGroup 
                        value={cardType} 
                        onValueChange={(value) => setCardType(value as 'debit' | 'credit')}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="debit" id="debit"/>
                          <Label htmlFor="debit">Debit Card</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="credit" id="credit" />
                          <Label htmlFor="credit">Credit Card</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input 
                          id="cardName"
                          placeholder="John Smith"
                          className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input 
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 '))}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardExpiry">Expiration Date</Label>
                          <Input 
                            id="cardExpiry"
                            placeholder="MM/YY"
                            className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value.replace(/\D/g, '').replace(/(\d{2})(?=\d)/g, '$1/'))}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cardCvc">CVC</Label>
                          <Input 
                            id="cardCvc"
                            placeholder="123"
                            maxLength={3}
                            className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                            value={cardCvc}
                            onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, ''))}
                          />
                        </div>
                      </div>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="upi">
                    <div className="py-4">
                      <div className="grid grid-cols-3 gap-4">
                        {['phonepe', 'gpay', 'paytm', 'paypal', 'credUpi'].map((option) => {
                          const optionLabels: Record<string, string> = {
                            phonepe: 'PhonePe',
                            gpay: 'Google Pay',
                            paytm: 'PayTM',
                            paypal: 'PayPal',
                            credUpi: 'CRED UPI'
                          };
                          
                          return (
                            <Card 
                              key={option}
                              className={`p-4 cursor-pointer text-center border-2 ${upiOption === option ? 'border-mystic-500' : 'border-transparent'}`}
                              onClick={() => setUpiOption(option)}
                            >
                              <div className="flex flex-col items-center justify-center">
                                <div className="w-10 h-10 bg-cosmic-700 rounded-full flex items-center justify-center mb-2">
                                  <span className="text-xs">{optionLabels[option].substring(0, 1)}</span>
                                </div>
                                <span className="text-sm">{optionLabels[option]}</span>
                              </div>
                            </Card>
                          );
                        })}
                      </div>
                      
                      <div className="mt-6">
                        <Label htmlFor="upiId">UPI ID</Label>
                        <Input 
                          id="upiId"
                          placeholder="username@upi"
                          className="mt-1 bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                        />
                        <p className="text-xs text-gray-400 mt-2">Enter your UPI ID to make payment</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="netbanking">
                    <div className="py-4">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {banks.slice(0, 8).map((bank, index) => (
                          <Card 
                            key={index}
                            className={`p-3 cursor-pointer text-center border-2 ${bankOption === bank.toLowerCase().replace(/\s+/g, '') ? 'border-mystic-500' : 'border-transparent'}`}
                            onClick={() => setBankOption(bank.toLowerCase().replace(/\s+/g, ''))}
                          >
                            <div className="flex flex-col items-center justify-center">
                              <div className="w-10 h-10 bg-cosmic-700 rounded-full flex items-center justify-center mb-2">
                                <span className="text-xs">{bank.substring(0, 1)}</span>
                              </div>
                              <span className="text-xs">{bank}</span>
                            </div>
                          </Card>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <Label htmlFor="otherBank">Other Banks</Label>
                        <select 
                          id="otherBank" 
                          className="w-full h-10 rounded-md border bg-cosmic-700 border-cosmic-600 focus:border-mystic-500 px-3 py-2 text-sm"
                          onChange={(e) => setBankOption(e.target.value)}
                        >
                          <option value="">Select Bank</option>
                          {banks.map((bank, index) => (
                            <option key={index} value={bank.toLowerCase().replace(/\s+/g, '')}>{bank}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <h2 className="text-xl font-medium mb-4">Billing Address</h2>
                
                <div className="mb-4">
                  <div className="flex items-center">
                    <Checkbox 
                      id="sameAddress"
                      checked={sameAsShipping}
                      onCheckedChange={(checked) => setSameAsShipping(checked as boolean)}
                      className="data-[state=checked]:bg-mystic-500 data-[state=checked]:border-mystic-500"
                    />
                    <label 
                      htmlFor="sameAddress"
                      className="ml-2 text-sm text-gray-300"
                    >
                      Same as shipping address
                    </label>
                  </div>
                </div>
                
                {!sameAsShipping && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName"
                          className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName"
                          className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address"
                        className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input 
                          id="city"
                          className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input 
                          id="postalCode"
                          className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input 
                        id="country"
                        className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                      />
                    </div>
                  </div>
                )}
              </Card>
            </div>
            
            {/* Order Summary */}
            <div className="md:col-span-5">
              <Card className="card-mystic p-6 sticky top-6">
                <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Plan</span>
                    <span className="font-medium">{subscriptionPlan === 'basic' ? 'Basic' : subscriptionPlan === 'premium' ? 'Premium' : 'Celestial'} Plan</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Billing</span>
                    <span>Monthly</span>
                  </div>
                  
                  <div className="border-t border-cosmic-600 pt-4">
                    <div className="flex justify-between font-medium">
                      <span>Subtotal</span>
                      <span>
                        {subscriptionPlan === 'basic' ? '$5.99' : subscriptionPlan === 'premium' ? '$9.99' : '$19.99'}
                      </span>
                    </div>
                    
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-gray-400">Tax</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-cosmic-600 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium">Total</span>
                      <span className="text-lg mystic-gradient font-medium">
                        {subscriptionPlan === 'basic' ? '$5.99' : subscriptionPlan === 'premium' ? '$9.99' : '$19.99'}/mo
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6 p-4 bg-cosmic-900/70 rounded-lg">
                  <div className="flex items-start mb-3">
                    <span className="text-mystic-400 mr-2">✦</span>
                    <div>
                      <p className="text-sm text-white">7-Day Free Trial</p>
                      <p className="text-xs text-gray-400 mt-1">Cancel anytime during your trial and you won't be charged.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-mystic-400 mr-2">✦</span>
                    <div>
                      <p className="text-sm text-white">Automatic Renewal</p>
                      <p className="text-xs text-gray-400 mt-1">Your subscription will automatically renew each month. You can cancel anytime.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-start">
                    <Checkbox 
                      id="terms"
                      checked={agreeTerms}
                      onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                      className="mt-1 data-[state=checked]:bg-mystic-500 data-[state=checked]:border-mystic-500"
                    />
                    <label 
                      htmlFor="terms"
                      className="ml-2 text-sm text-gray-300"
                    >
                      I agree to the Terms of Service, Privacy Policy, and Subscription Terms.
                    </label>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-mystic hover:opacity-90 py-6"
                  onClick={handleSubmit}
                >
                  Subscribe Now
                </Button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  Your payment information is encrypted and secure
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
