import React from 'react';
import { ArrowRight, Users, Target, Lightbulb, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-scroll';

function App() {
  return (
    <div className="min-h-screen bg-[#0070BA] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0070BA] shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-12">
              <img src="1.png" alt="Trentino Sviluppo" className="h-10" />
              <img src="2.png" alt="Brio" className="h-10" />
              <img src="3.png" alt="Trentino" className="h-10" />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Exclusive UX Design Mentoring. Designed for Startups & SMEs.
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            For Entrepreneurs, Product Managers, UX Designers and other team members.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <button className="bg-[#161C2A] hover:bg-[#1f2737] px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
              Book Your Session Here <ArrowRight size={20} />
            </button>
            <Link
              to="details"
              smooth={true}
              duration={500}
              className="bg-white text-[#0070BA] hover:bg-gray-100 px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              Read More
            </Link>
          </div>
          <div id="details" className="max-w-3xl mx-auto">
            <div className="relative mb-12">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                alt="Modern office space with wooden ceiling" 
                className="w-full h-[300px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0070BA]/50 to-[#0070BA] rounded-2xl">
                <p className="absolute bottom-0 left-0 right-0 text-lg text-gray-100 p-8 max-w-2xl mx-auto leading-relaxed">
                  Join Noa Bichovsky, a seasoned UX/UI leader and CEO of Brio, for a tailored mentoring session for your startup.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-[#2185D0]/30 backdrop-blur-sm rounded-3xl p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#2185D0]/30 p-4 rounded-2xl">
                    <Calendar className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-3xl font-semibold mb-6">When?</h3>
                <p className="text-2xl">April 14 & 15</p>
              </div>
              <div className="bg-[#2185D0]/30 backdrop-blur-sm rounded-3xl p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#2185D0]/30 p-4 rounded-2xl">
                    <MapPin className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-3xl font-semibold mb-6">Where?</h3>
                <p className="text-2xl">
                  Progetto Manifattura,<br />
                  Trentinosviluppo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 h-full">
          <div className="p-12 rounded-3xl h-full flex flex-col">
            <Users className="w-12 h-12 text-white opacity-80 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Tailored UX Strategy</h3>
            <p className="text-gray-100 flex-grow">
              Elevate your user experience approach with expert insights tailored to your business goals.
            </p>
          </div>
          <div className="p-12 rounded-3xl h-full flex flex-col">
            <Target className="w-12 h-12 text-white opacity-80 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Crafting a Unique UX Vision</h3>
            <p className="text-gray-100 flex-grow">
              Define a vision that sets your product apart.
            </p>
          </div>
          <div className="p-12 rounded-3xl h-full flex flex-col">
            <Lightbulb className="w-12 h-12 text-white opacity-80 mb-4" />
            <h3 className="text-xl font-semibold mb-3">User-First Approach</h3>
            <p className="text-gray-100 flex-grow">
              Shift focus from features to user-centered solutions.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <button className="bg-[#161C2A] hover:bg-[#1f2737] px-6 py-3 rounded-lg flex items-center gap-2 transition-colors mx-auto">
            Book Your Session Here <ArrowRight size={20} />
          </button>
          <div className="text-gray-100 mt-8 mb-8 space-y-4">
            <p>Brio is available for sessions on April 14th and 15th at Progetto Manifattura.</p>
            <p className="font-semibold">Book your spot now.</p>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://player.vimeo.com/video/1068742379?h=c2c6b0f0c3&autoplay=0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-100">© Brioid.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;