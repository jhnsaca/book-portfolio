
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { 
  Instagram, 
  Mail, 
  MapPin, 
  Maximize2, 
  Globe2, 
  PlaneTakeoff, 
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MODEL_DATA, PORTFOLIO_PHOTOS, LANGUAGES } from './constants';
import { CategoryType, Photo, Language } from './types';

// Components
const Hero = () => (
  <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
    <div className="absolute inset-0 opacity-40">
      <img 
        src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=2000" 
        className="w-full h-full object-cover grayscale"
        alt="Grégoire Thibaut"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
    </div>
    
    <div className="relative z-10 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="uppercase tracking-[0.4em] text-[10px] mb-8 block text-zinc-500 font-medium">Model Portfolio</span>
        <h1 className="text-6xl md:text-8xl font-medium mb-2 tracking-tight text-white">
          Grégoire Thibaut
        </h1>
        <div className="h-[1px] w-24 bg-zinc-700 mx-auto my-8"></div>
        <div className="flex flex-wrap justify-center gap-6 text-[11px] text-zinc-400 uppercase tracking-[0.2em]">
          <span>184 cm</span>
          <span>Dark Hair</span>
          <span>Light Brown Eyes</span>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-zinc-600">
      <div className="w-[1px] h-12 bg-zinc-800"></div>
    </div>
  </section>
);

const StatsSection = () => (
  <section id="about" className="py-32 px-6 bg-white text-black">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div className="order-2 md:order-1">
        <div className="aspect-[3/4] overflow-hidden bg-zinc-100 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1000" 
            className="w-full h-full object-cover grayscale"
            alt="Grégoire Profile"
          />
        </div>
      </div>
      
      <div className="order-1 md:order-2">
        <h2 className="text-4xl font-medium mb-10 tracking-tight">Information</h2>
        <div className="space-y-8">
          <p className="text-zinc-600 text-lg leading-relaxed font-light">
            Grégoire Thibaut is a 23-year-old model based in Lyon, France. 
            His background is French and Asian. He is available for international assignments, with a planned departure for Bangkok in early February 2026.
          </p>
          
          <div className="grid grid-cols-2 gap-y-8 py-10 border-t border-zinc-100">
            <div>
              <p className="text-[10px] uppercase text-zinc-400 tracking-widest mb-2 font-semibold">Height</p>
              <p className="text-xl">{MODEL_DATA.height}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-zinc-400 tracking-widest mb-2 font-semibold">Origins</p>
              <p className="text-xl">{MODEL_DATA.origins}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-zinc-400 tracking-widest mb-2 font-semibold">Location</p>
              <p className="text-xl">{MODEL_DATA.location}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-zinc-400 tracking-widest mb-2 font-semibold">Schedule</p>
              <p className="text-lg">Bangkok Feb 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PortfolioSection = () => {
  const [filter, setFilter] = useState<CategoryType | 'All'>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const categories = ['All', ...Object.values(CategoryType)];
  const filteredPhotos = filter === 'All' ? PORTFOLIO_PHOTOS : PORTFOLIO_PHOTOS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-medium mb-8 tracking-tight">Gallery</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 text-[10px] uppercase tracking-[0.2em] border transition-all duration-300 ${
                  filter === cat 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-zinc-600 border-zinc-900 hover:border-zinc-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group relative cursor-pointer aspect-[4/5] bg-zinc-950 overflow-hidden"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img 
                  src={photo.url} 
                  alt={photo.category}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100 duration-500">
                  <span className="text-[10px] uppercase tracking-widest text-white font-medium">{photo.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div 
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              className="relative max-w-5xl max-h-full aspect-[4/5]"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedPhoto.url} className="w-full h-full object-contain" alt="Selected shoot" />
              <div className="absolute -top-10 right-0">
                <button className="text-zinc-500 hover:text-white transition-colors uppercase text-[10px] tracking-widest">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const LanguageBar: React.FC<{ lang: Language }> = ({ lang }) => (
  <div className="mb-10">
    <div className="flex justify-between mb-3">
      <span className="text-sm font-medium">{lang.name}</span>
      <span className="text-[10px] uppercase text-zinc-400 tracking-widest">{lang.level}</span>
    </div>
    <div className="w-full h-[1px] bg-zinc-100">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${lang.proficiency}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "circOut" }}
        className="h-full bg-black"
      />
    </div>
  </div>
);

const AgencyTool = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Review the profile of Grégoire Thibaut (23, 184cm, FR/EN/DE/PT) for this inquiry: "${prompt}". Provide a brief, professional summary of his suitability.`,
        config: {
          systemInstruction: "Keep it simple, professional, and factual. Do not use hyperbolic sales language."
        }
      });
      setResponse(result.text || "Analysis unavailable.");
    } catch (e) {
      setResponse("Profile analysis currently offline.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-50 border border-zinc-100 p-10 mt-20">
      <h3 className="text-xl font-medium mb-6 tracking-tight">Project Suitability</h3>
      <div className="relative mb-8">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter campaign details..."
          className="w-full bg-white border border-zinc-200 p-5 text-sm focus:outline-none focus:border-black h-24 transition-colors font-light"
        />
        <button 
          onClick={handleAsk}
          disabled={loading}
          className="mt-4 bg-black text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Analyze'}
        </button>
      </div>
      {response && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white p-6 border-l-2 border-black"
        >
          <p className="text-sm leading-relaxed text-zinc-600 font-light">{response}</p>
        </motion.div>
      )}
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <nav className={`fixed top-0 w-full z-40 transition-all duration-700 px-8 py-8 flex items-center justify-between ${isScrolled ? 'bg-black/95 py-6 border-b border-zinc-900' : 'bg-transparent'}`}>
        <div className="text-lg font-medium tracking-tight uppercase">GT</div>
        <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">
          <a href="#portfolio" className="hover:text-white transition-colors">Gallery</a>
          <a href="#about" className="hover:text-white transition-colors">Information</a>
          <a href="#skills" className="hover:text-white transition-colors">Languages</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-6">
          <a href={MODEL_DATA.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <a href={`mailto:${MODEL_DATA.email}`} className="text-zinc-400 hover:text-white transition-colors">
            <Mail size={18} strokeWidth={1.5} />
          </a>
          <a href={`mailto:${MODEL_DATA.email}`} className="bg-white text-black px-8 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-zinc-200">
            Booking
          </a>
        </div>
      </nav>

      <Hero />
      
      <StatsSection />

      <PortfolioSection />

      <section id="skills" className="py-32 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl font-medium mb-12 tracking-tight">Languages</h2>
              <div className="pr-0 lg:pr-12">
                {LANGUAGES.map(lang => (
                  <LanguageBar key={lang.name} lang={lang} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-zinc-500 font-light leading-relaxed mb-10 text-lg">
                Grégoire speaks French and English fluently, with strong proficiency in German and Portuguese. 
                He is currently expanding his language skills with Italian and Thai.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 py-4 border-b border-zinc-100">
                  <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
                  <span className="text-sm text-zinc-600 font-light uppercase tracking-widest">Available Globally</span>
                </div>
                <div className="flex items-center gap-4 py-4 border-b border-zinc-100">
                  <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
                  <span className="text-sm text-zinc-600 font-light uppercase tracking-widest">Passport Ready</span>
                </div>
                <div className="flex items-center gap-4 py-4">
                  <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
                  <span className="text-sm text-zinc-600 font-light uppercase tracking-widest">Professional Integrity</span>
                </div>
              </div>
              <AgencyTool />
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-40 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-medium mb-6 tracking-tight">Contact</h2>
              <p className="text-zinc-500 text-lg font-light max-w-sm">For bookings and collaboration inquiries.</p>
            </div>
            
            <div className="space-y-12">
              <a href={`mailto:${MODEL_DATA.email}`} className="block group">
                <div className="flex items-center justify-between py-6 border-b border-zinc-900 group-hover:border-zinc-500 transition-colors">
                  <div className="flex items-center gap-6">
                    <Mail size={24} className="text-zinc-600" />
                    <span className="text-xl font-light">{MODEL_DATA.email}</span>
                  </div>
                </div>
              </a>
              
              <a href={MODEL_DATA.instagram} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="flex items-center justify-between py-6 border-b border-zinc-900 group-hover:border-zinc-500 transition-colors">
                  <div className="flex items-center gap-6">
                    <Instagram size={24} className="text-zinc-600" />
                    <span className="text-xl font-light">@greg_thibaut</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-40 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.4em] text-zinc-600">
            <span>&copy; 2024 Grégoire Thibaut</span>
            <div className="flex gap-12">
              <span>Lyon / BKK 2026</span>
              <span>Available</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
