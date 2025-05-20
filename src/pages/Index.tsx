import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ZodiacCard from '@/components/ZodiacCard';
import FeaturedReading from '@/components/FeaturedReading';
import TestimonialCard from '@/components/TestimonialCard';
import CosmicBackground from '@/components/CosmicBackground';
import SanskritSymbol from '@/components/SanskritSymbol';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MadhavChatButton from '@/components/MadhavChatButton';
import { Calendar, Star, Search } from 'lucide-react';

const Index = () => {
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
    { sign: 'Pisces', dates: 'Feb 19 - Mar 20', element: 'Water', ruling: 'Neptune', iconUrl: 'https://i.pinimg.com/736x/da/e4/fe/dae4febdafe4ccd367a609305b8cc3e6.jpg' }
  ];

  const featuredReadings = [
    {
      title: 'Complete Birth Chart Analysis',
      description: 'Discover your cosmic blueprint with our comprehensive birth chart analysis, revealing your strengths, challenges, and life purpose.',
      imageSrc: 'https://img.freepik.com/free-vector/hand-drawn-shrug-illustration_23-2149318018.jpg?semt=ais_hybrid&w=740',
      badges: ['Personalized', 'Detailed Report', '24hr Delivery'],
      price: 39.99,
    },
    {
      title: 'Relationship Compatibility',
      description: 'Understand the cosmic connection between you and your partner with our detailed synastry report.',
      imageSrc: 'https://media.istockphoto.com/id/1015273404/vector/couple-man-and-woman-walking-together-holding-hands-backside-view-vector-illustration.jpg?s=612x612&w=0&k=20&c=VjVgbd_GyCnT30WVjEPNivFnBAS4I2tKA2S0jHdnHYo=',
      badges: ['Love', 'Compatibility', 'Future Insights'],
      price: 29.99,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <CosmicBackground />
      <NavBar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-mystic font-bold mb-6">
            <span className="mystic-gradient mystic-glow">Unveil Your Cosmic Destiny</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Discover your true path through the ancient wisdom of the stars, 
            guided by precise birth chart analysis and mystical insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-gradient-mystic text-white px-8 py-6 rounded-full text-lg hover:opacity-90">
              <NavLink to="/birth-chart">
                <Calendar className="mr-2 h-5 w-5" />
                Calculate Birth Chart
              </NavLink>
            </Button>
            <Button asChild variant="outline" className="px-8 py-6 rounded-full text-lg border-mystic-500/30 hover:border-mystic-500 hover:bg-mystic-500/10">
              <NavLink to="/horoscope">
                <Star className="mr-2 h-5 w-5" />
                Daily Horoscope
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Zodiac Signs Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-mystic font-semibold">
              <Star className="inline mr-2 text-mystic-400" />
              <span className="mystic-gradient">Daily Horoscopes</span>
            </h2>
            <NavLink to="/horoscope" className="text-sm text-mystic-300 hover:text-mystic-400">
              View all zodiac signs →
            </NavLink>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Featured Readings Section */}
      <section className="py-12 px-4 bg-cosmic-800/50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-mystic font-semibold">
              <SanskritSymbol className="mr-2 text-mystic-400" />
              <span className="mystic-gradient">Featured Readings</span>
            </h2>
            <NavLink to="/readings" className="text-sm text-mystic-300 hover:text-mystic-400">
              Browse all readings →
            </NavLink>
          </div>
          <div className="space-y-6">
            {featuredReadings.map((reading) => (
              <FeaturedReading
                key={reading.title}
                title={reading.title}
                description={reading.description}
                imageSrc={reading.imageSrc}
                badges={reading.badges}
                price={reading.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Madhav AI Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-mystic-500/5 cosmic-dots"></div>
        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="card-cosmic rounded-2xl p-1 mystic-border-glow">
                <img 
                  src="/lovable-uploads/Madhav2.png" 
                  alt="Madhav AI" 
                  className="rounded-2xl object-cover h-96 w-full"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-mystic font-semibold mb-4">
                <span className="mystic-gradient">Meet Madhav</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Your personal cosmic guide, powered by ancient wisdom and modern AI. 
                Madhav accesses celestial knowledge to provide personalized guidance 
                for your spiritual journey and upcoming life events.
              </p>
              <ul className="space-y-3 mb-8">
                {['Personalized predictions based on your birth chart', 
                  'Voice or text conversations about your cosmic path',
                  'Spiritual guidance aligned with astral energies',
                  '24/7 access to cosmic insights'].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-400">
                    <span className="text-mystic-400 mr-2">✦</span> {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-gradient-mystic text-white px-8 py-6 rounded-full text-lg hover:opacity-90">
                <NavLink to="/madhav">
                  Start Cosmic Conversation
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-mystic font-semibold text-center mb-12">
            <span className="mystic-gradient">What Our Community Says</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Sarah L."
              rating={5}
              text="The birth chart analysis was incredibly accurate! It helped me understand patterns in my life that I never recognized before."
              date="June 15, 2024"
            />
            <TestimonialCard
              name="Michael R."
              rating={4}
              text="Madhav provided insights about my career path that were astonishingly precise. I'm now following the cosmic guidance with confidence."
              date="May 22, 2024"
            />
            <TestimonialCard
              name="Elena T."
              rating={5}
              text="The relationship compatibility report saved my marriage by helping us understand our cosmic dynamics and how to work with them instead of against them."
              date="July 3, 2024"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <div className="card-mystic max-w-4xl mx-auto p-8 md:p-12 rounded-xl">
            <h2 className="text-2xl md:text-4xl font-mystic font-bold mb-6">
              <span className="mystic-gradient mystic-glow">Begin Your Cosmic Journey</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Unlock the secrets the stars hold for you. Create your account now and receive 
              a complimentary mini reading to start your mystical exploration.
            </p>
            <Button asChild className="bg-gradient-mystic text-white px-8 py-6 rounded-full text-lg hover:opacity-90">
              <NavLink to="/signup">
                Create Free Account
              </NavLink>
            </Button>
            <p className="text-gray-500 mt-4 text-sm">No credit card required</p>
          </div>
        </div>
      </section>

      <MadhavChatButton />
      <Footer />
    </div>
  );
};

export default Index;
