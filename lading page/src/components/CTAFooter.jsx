import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Coffee, Camera, Globe, MessageCircle } from 'lucide-react';
import { FadeInWhenVisible } from './About';

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-coffee-900/30 to-dark-900" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeInWhenVisible direction="left">
            <div>
              <p className="text-gold-400 font-inter text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-100 leading-tight mb-6">
                Ready for Your <br /><span className="text-gradient-gold">Perfect Cup?</span>
              </h2>
              <p className="text-dark-300 text-lg leading-relaxed mb-8">
                Visit us at our cozy location or reserve a table in advance. We'd love to welcome you to the Arōma family.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <MapPin className="w-5 h-5" />, label: '123 Brew Street, Jakarta Selatan' },
                  { icon: <Phone className="w-5 h-5" />, label: '+62 812 3456 7890' },
                  { icon: <Mail className="w-5 h-5" />, label: 'hello@aromacoffee.id' },
                  { icon: <Clock className="w-5 h-5" />, label: 'Mon-Sun: 7AM - 10PM' },
                ].map((info, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl glass-light">
                    <div className="text-gold-400 mt-0.5">{info.icon}</div>
                    <span className="text-dark-200 text-sm">{info.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible direction="right">
            <motion.div ref={ref} initial={{ opacity: 0, scale: 0.95 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8 }} className="glass rounded-3xl p-8">
              <h3 className="font-playfair text-2xl font-bold text-coffee-100 mb-6">Reserve a Table</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-dark-300 text-sm mb-1.5 block">Name</label>
                    <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-coffee-100 placeholder-dark-400 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="text-dark-300 text-sm mb-1.5 block">Phone</label>
                    <input type="tel" placeholder="+62 xxx" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-coffee-100 placeholder-dark-400 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all text-sm" />
                  </div>
                </div>
                <div>
                  <label className="text-dark-300 text-sm mb-1.5 block">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-coffee-100 placeholder-dark-400 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-dark-300 text-sm mb-1.5 block">Date</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-coffee-100 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="text-dark-300 text-sm mb-1.5 block">Guests</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-coffee-100 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all text-sm">
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-dark-300 text-sm mb-1.5 block">Special Requests</label>
                  <textarea rows={3} placeholder="Any special requests..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-coffee-100 placeholder-dark-400 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all text-sm resize-none" />
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 bg-gradient-to-r from-gold-400 to-coffee-500 text-dark-900 font-bold rounded-xl text-lg hover:shadow-lg hover:shadow-gold-400/30 transition-shadow duration-300">
                  Reserve Now
                </motion.button>
              </form>
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-coffee-600 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-dark-900" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold text-coffee-100">Arōma</h3>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 -mt-1">Coffee House</p>
              </div>
            </a>
            <p className="text-dark-400 text-sm leading-relaxed">
              Crafting exceptional coffee experiences since 2019. Every cup tells a story.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Camera, Globe, MessageCircle].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.1, y: -2 }} className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-dark-300 hover:text-gold-400 transition-colors">
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-coffee-100 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Menu', 'Reviews', 'Contact'].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-dark-400 text-sm hover:text-gold-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-coffee-100 font-semibold mb-4">Our Coffee</h4>
            <ul className="space-y-2">
              {['Espresso', 'Cappuccino', 'Cold Brew', 'Pour Over', 'Latte Art', 'Pastries'].map((l) => (
                <li key={l}><a href="#menu" className="text-dark-400 text-sm hover:text-gold-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-coffee-100 font-semibold mb-4">Stay Updated</h4>
            <p className="text-dark-400 text-sm mb-4">Get exclusive offers and coffee tips delivered to your inbox.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-coffee-100 placeholder-dark-400 focus:outline-none focus:border-gold-400/50 text-sm" />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="px-4 py-2.5 bg-gradient-to-r from-gold-400 to-coffee-500 text-dark-900 font-semibold rounded-xl text-sm">
                Join
              </motion.button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">© 2024 Arōma Coffee House. All rights reserved.</p>
          <p className="text-dark-500 text-xs">Crafted with ❤️ and lots of ☕</p>
        </div>
      </div>
    </footer>
  );
}
