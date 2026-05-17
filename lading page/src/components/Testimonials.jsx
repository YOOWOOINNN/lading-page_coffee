import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import { FadeInWhenVisible } from './About';

const testimonials = [
  { name: 'Sarah Chen', role: 'Food Blogger', avatar: 'SC', rating: 5, text: "Arōma completely changed my morning ritual. The Ethiopian pour-over is unlike anything I've ever tasted. It's like drinking liquid gold." },
  { name: 'Marcus Rivera', role: 'Coffee Enthusiast', avatar: 'MR', rating: 5, text: 'The attention to detail here is extraordinary. From the bean selection to the latte art, every step is a masterclass in coffee craft.' },
  { name: 'Emily Watson', role: 'Interior Designer', avatar: 'EW', rating: 5, text: "Not only is the coffee exceptional, but the space itself is absolutely gorgeous. It's become my favorite place to work and unwind." },
  { name: 'David Park', role: 'Chef & Restaurateur', avatar: 'DP', rating: 5, text: "As someone in the food industry, I can tell you — Arōma sets the gold standard. Their cold brew is the best I've had anywhere in the world." },
  { name: 'Luna Martinez', role: 'Yoga Instructor', avatar: 'LM', rating: 5, text: 'The matcha latte here is divine, and I love that they source everything ethically. It feels good to support a business that cares.' },
  { name: "James O'Brien", role: 'Writer', avatar: 'JO', rating: 5, text: "I've written my last two novels sitting in Arōma. The atmosphere, the coffee, the people — it's creative inspiration in a cup." },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reviews" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeInWhenVisible>
            <p className="text-gold-400 font-inter text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-100 leading-tight mb-4">
              What People <span className="text-gradient-gold">Say</span>
            </h2>
            <p className="text-dark-300 text-lg max-w-xl mx-auto">
              Don't just take our word for it — hear from the coffee lovers who make Arōma their daily destination.
            </p>
          </FadeInWhenVisible>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ y: -4 }} className="glass-light rounded-3xl p-6 relative group cursor-default">
              <Quote className="w-8 h-8 text-gold-400/20 mb-4" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-dark-200 leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-coffee-600 flex items-center justify-center">
                  <span className="text-dark-900 text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-coffee-100 font-semibold text-sm">{t.name}</p>
                  <p className="text-dark-400 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
