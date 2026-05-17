import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FadeInWhenVisible } from './About';

const menuItems = [
  { name: 'Classic Espresso', desc: 'Bold, intense, and full-bodied single-origin shot', price: '$4.50', image: '/images/espresso.jpg', tag: 'Best Seller' },
  { name: 'Artisan Cappuccino', desc: 'Velvety steamed milk with signature latte art', price: '$5.80', image: '/images/cappuccino.jpg', tag: 'Popular' },
  { name: 'Cold Brew Reserve', desc: '24-hour steeped cold brew with a hint of vanilla', price: '$6.20', image: '/images/cold-brew.jpg', tag: 'New' },
  { name: 'Fresh Pastries', desc: 'Handmade croissants, muffins, and danish pastries', price: '$3.90', image: '/images/pastry.jpg', tag: 'Fan Favorite' },
];

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="menu" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coffee-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeInWhenVisible>
            <p className="text-gold-400 font-inter text-sm tracking-[0.3em] uppercase mb-4">Our Menu</p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-100 leading-tight mb-4">
              Signature <span className="text-gradient-gold">Creations</span>
            </h2>
            <p className="text-dark-300 text-lg max-w-xl mx-auto">
              Each drink is a masterpiece, crafted from the world's finest beans and prepared with meticulous care.
            </p>
          </FadeInWhenVisible>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }} whileHover={{ y: -8 }} className="group relative rounded-3xl overflow-hidden glass-light cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-gold-400/90 text-dark-900 text-xs font-bold">{item.tag}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-playfair text-lg font-bold text-coffee-100 group-hover:text-gold-400 transition-colors">{item.name}</h3>
                  <span className="font-inter text-gold-400 font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-dark-300 text-sm leading-relaxed">{item.desc}</p>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-4 w-full py-2.5 rounded-full border border-gold-400/30 text-gold-400 text-sm font-semibold hover:bg-gold-400 hover:text-dark-900 transition-all duration-300">
                  Order Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeInWhenVisible delay={0.5}>
          <div className="text-center mt-12">
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-gold-400/30 text-gold-400 font-semibold hover:bg-gold-400 hover:text-dark-900 transition-all duration-300">
              View Full Menu
              <span>→</span>
            </motion.a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
