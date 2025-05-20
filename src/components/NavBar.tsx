import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Home, Star, User, Calendar, Settings, LogIn, UserPlus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SanskritSymbol from './SanskritSymbol';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-morphism py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold flex items-center">
              <img src="/favicon.ico" alt="AstraDivya Logo" className="w-8 h-8 rounded-full shadow-mystic-500/30 mr-2" />
              <span className="text-white font-mystic tracking-wider ml-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-200">
                AstraDivya
              </span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'mystic-gradient' : 'text-gray-300 hover:text-mystic-300'}`}>
              <Home className="h-4 w-4 inline mr-1" /> Home
            </NavLink>
            <NavLink to="/horoscope" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'mystic-gradient' : 'text-gray-300 hover:text-mystic-300'}`}>
              <Star className="h-4 w-4 inline mr-1" /> Daily Horoscope
            </NavLink>
            <NavLink to="/birth-chart" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'mystic-gradient' : 'text-gray-300 hover:text-mystic-300'}`}>
              <Calendar className="h-4 w-4 inline mr-1" /> Birth Chart
            </NavLink>

            {/* User Avatar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full border border-mystic-500/30 hover:border-mystic-500 hover:bg-mystic-500/10">
                  <User className="h-5 w-5 text-mystic-300" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 card-mystic border-mystic-500/30" align="end">
                <DropdownMenuItem asChild>
                  <NavLink to="/signin" className="flex items-center cursor-pointer">
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Sign In</span>
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/signup" className="flex items-center cursor-pointer">
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Sign Up</span>
                  </NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cosmic-900/95 backdrop-blur-lg border-t border-mystic-500/30">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <NavLink to="/" className="block text-sm font-medium text-gray-300 hover:text-mystic-300">
                <Home className="h-4 w-4 inline mr-1" /> Home
              </NavLink>
              <NavLink to="/horoscope" className="block text-sm font-medium text-gray-300 hover:text-mystic-300">
                <Star className="h-4 w-4 inline mr-1" /> Daily Horoscope
              </NavLink>
              <NavLink to="/birth-chart" className="block text-sm font-medium text-gray-300 hover:text-mystic-300">
                <Calendar className="h-4 w-4 inline mr-1" /> Birth Chart
              </NavLink>
              <div className="pt-4 border-t border-mystic-500/30">
                <NavLink to="/signin" className="block text-sm font-medium text-gray-300 hover:text-mystic-300 mb-2">
                  <LogIn className="h-4 w-4 inline mr-1" /> Sign In
                </NavLink>
                <NavLink to="/signup" className="block text-sm font-medium text-gray-300 hover:text-mystic-300">
                  <UserPlus className="h-4 w-4 inline mr-1" /> Sign Up
                </NavLink>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
