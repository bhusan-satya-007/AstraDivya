import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import CosmicBackground from '@/components/CosmicBackground';
import SanskritSymbol from '@/components/SanskritSymbol';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Signup = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  
  // New address fields
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (!street || !city || !state || !postalCode || !country) {
      toast({
        title: "Error",
        description: "Please fill in your complete address",
        variant: "destructive",
      });
      return;
    }
    
    if (!acceptTerms) {
      toast({
        title: "Error",
        description: "You must accept the terms and conditions",
        variant: "destructive",
      });
      return;
    }
    
    // Simulating successful registration
    toast({
      title: "Success",
      description: "Your account has been created",
    });
    
    // In a real app, we would handle the actual registration here
    console.log({ 
      name, 
      email, 
      password, 
      acceptTerms,
      address: {
        street,
        city,
        state,
        postalCode,
        country
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <CosmicBackground />
      <NavBar />

      <div className="flex-1 flex items-center justify-center p-4 py-12">
        <Card className="card-mystic w-full max-w-lg p-6 md:p-8">
          <div className="text-center mb-8">
            <SanskritSymbol className="text-4xl mystic-gradient inline-block mb-2" />
            <h1 className="text-2xl font-mystic font-semibold mystic-gradient">Begin Your Cosmic Journey</h1>
            <p className="text-gray-400 mt-2">Create your account to unlock the wisdom of the stars</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name"
                placeholder="Your name"
                className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="your@email.com"
                className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input 
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            
            <div className="border-t border-cosmic-600 pt-4 mt-4">
              <h3 className="text-lg font-medium mb-3 mystic-gradient">Permanent Address</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="street">Street Address</Label>
                  <Input 
                    id="street"
                    placeholder="123 Cosmic Lane"
                    className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city"
                      placeholder="Mystic City"
                      className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state">State/Province</Label>
                    <Input 
                      id="state"
                      placeholder="Celestial State"
                      className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input 
                      id="postalCode"
                      placeholder="12345"
                      className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input 
                      id="country"
                      placeholder="Cosmic Realm"
                      className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <Checkbox 
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                className="mt-1 data-[state=checked]:bg-mystic-500 data-[state=checked]:border-mystic-500"
              />
              <label 
                htmlFor="terms"
                className="ml-2 text-sm text-gray-300"
              >
                I accept the{" "}
                <NavLink to="/terms" className="text-mystic-300 hover:text-mystic-400">
                  Terms of Service
                </NavLink>
                {" "}and{" "}
                <NavLink to="/privacy" className="text-mystic-300 hover:text-mystic-400">
                  Privacy Policy
                </NavLink>
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-mystic hover:opacity-90"
            >
              Create Account
            </Button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cosmic-600"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-cosmic-800 text-gray-400">Or sign up with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" className="border-cosmic-600 hover:bg-cosmic-700">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="border-cosmic-600 hover:bg-cosmic-700">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.6,13.47A4.8,4.8,0,0,0,12,13a4.8,4.8,0,0,0-1.6.27A3,3,0,0,0,9,15.5a3,3,0,0,0,1.4,2.23,4.8,4.8,0,0,0,1.6.27,4.8,4.8,0,0,0,1.6-.27A3,3,0,0,0,15,15.5,3,3,0,0,0,13.6,13.47ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9a10,10,0,0,0,0-20ZM12,20H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z" />
                </svg>
                Apple
              </Button>
            </div>
          </div>
          
          <p className="text-center mt-8 text-sm text-gray-400">
            Already have an account?{" "}
            <NavLink to="/login" className="text-mystic-300 hover:text-mystic-400">
              Log in
            </NavLink>
          </p>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;
