import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CosmicBackground from '@/components/CosmicBackground';
import SanskritSymbol from '@/components/SanskritSymbol';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <CosmicBackground />
      <NavBar />

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center max-w-lg">
          <div className="text-8xl font-mystic mystic-gradient mystic-glow mb-6">
            4<SanskritSymbol />4
          </div>
          <h1 className="text-2xl md:text-3xl font-mystic mb-4">Cosmic Path Not Found</h1>
          <p className="text-gray-400 mb-8">
            The stars have guided you to an unexplored realm. This celestial path does not exist in our cosmic map.
          </p>
          <Button asChild className="bg-gradient-mystic text-white px-8 py-6 rounded-full text-lg hover:opacity-90">
            <NavLink to="/">
              Return to Known Universe
            </NavLink>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
