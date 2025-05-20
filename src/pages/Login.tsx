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

const Login = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Simulating successful login
    toast({
      title: "Success",
      description: "You have successfully logged in",
    });
    
    // In a real app, we would handle the actual login here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <CosmicBackground />
      <NavBar />

      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="card-mystic w-full max-w-md p-6 md:p-8">
          <div className="text-center mb-8">
            <SanskritSymbol className="text-4xl mystic-gradient inline-block mb-2" />
            <h1 className="text-2xl font-mystic font-semibold mystic-gradient">Welcome Back</h1>
            <p className="text-gray-400 mt-2">Access your cosmic journey</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <NavLink to="/forgot-password" className="text-xs text-mystic-300 hover:text-mystic-400">
                  Forgot password?
                </NavLink>
              </div>
              <Input 
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-cosmic-700 border-cosmic-600 focus:border-mystic-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="flex items-center">
              <Checkbox 
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="data-[state=checked]:bg-mystic-500 data-[state=checked]:border-mystic-500"
              />
              <label 
                htmlFor="remember"
                className="ml-2 text-sm text-gray-300 cursor-pointer"
              >
                Remember me
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-mystic hover:opacity-90"
            >
              Login
            </Button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cosmic-600"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-cosmic-800 text-gray-400">Or continue with</span>
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
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M9.09 16.59v-9.4h-3.98v9.4h3.98zm.16-10.87c0-1.18-.86-2.12-2.23-2.12-1.36 0-2.24.94-2.24 2.12 0 1.16.86 2.12 2.21 2.12h.02c1.39 0 2.24-.96 2.24-2.12zm5.18 10.88h3.99v-5.38c0-3.57-1.96-5.24-4.57-5.24-2.1 0-3.04 1.12-3.56 1.91v-1.64h-3.98c.05 1.14 0 9.36 0 9.36h3.98v-5.23c0-.35.03-.7.13-.95.28-.7.9-1.43 1.95-1.43 1.38 0 1.93 1.02 1.93 2.52v5.09h3.98z"
                    fill="currentColor"
                  />
                </svg>
                LinkedIn
              </Button>
            </div>
          </div>
          
          <p className="text-center mt-8 text-sm text-gray-400">
            New to AstraDivya?{" "}
            <NavLink to="/signup" className="text-mystic-300 hover:text-mystic-400">
              Create an account
            </NavLink>
          </p>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
