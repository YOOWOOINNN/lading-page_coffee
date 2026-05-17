import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Heart, Leaf, Coffee } from 'lucide-react';

function FadeInWhenVisible({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const initial = {
    up: { opacity: 0, y: 60 },
    left: { opacity: 0, x: -60 },
    right: { opacity: 0, x: 60 },
  };

  return (
    <motion.div
      ref={ref}
      initial={initial[direction]}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial[direction]}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Ethically Sourced',
      desc: 'Direct trade from farmers in Colombia, Ethiopia, and Guatemala.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Crafted with Love',
      desc: 'Every cup is handcrafted by our certified master baristas.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Award Winning',
      desc: 'Recognized as the best artisan coffee house 3 years running.',
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Fresh Daily',
      desc: 'Small-batch roasted every morning for peak flavor and aroma.',
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-coffee-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeInWhenVisible direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <img src="/images/barista.jpg" alt="Our Barista" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
              </div>
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-coffee-600 flex items-center justify-center">
                    <span className="text-dark-900 font-bold text-lg">5+</span>
                  </div>
                  <div>
                    <p className="text-coffee-100 font-semibold">Years of</p>
                    <p className="text-gold-400 text-sm">Excellence</p>
                  </div>
                </div>
              </motion.div>
              <motion.div animate={{ y: [5, -5, 5] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }} className="absolute top-8 -left-6 glass rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold-400 text-sm">★</span>
                  ))}
                  <span className="text-dark-200 text-sm ml-1">4.9/5</span>
                </div>
              </motion.div>
            </div>
          </FadeInWhenVisible>

          <div>
            <FadeInWhenVisible>
              <p className="text-gold-400 font-inter text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-100 leading-tight mb-6">
                Crafted with <br /><span className="text-gradient-gold">Passion & Purpose</span>
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <p className="text-dark-200 text-lg leading-relaxed mb-4">
                Born from a deep love for exceptional coffee, Arōma was founded in 2019 with a simple mission: to bring the world's finest specialty coffee to your neighborhood.
              </p>
              <p className="text-dark-300 leading-relaxed mb-8">
                We partner directly with farmers across three continents, ensuring fair wages and sustainable practices. Every bean is hand-selected, carefully roasted in small batches, and brewed to perfection by our award-winning baristas.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <motion.div key={i} whileHover={{ y: -4, scale: 1.02 }} className="p-4 rounded-2xl glass-light group cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400/20 to-coffee-600/20 flex items-center justify-center text-gold-400 mb-3 group-hover:from-gold-400 group-hover:to-coffee-500 group-hover:text-dark-900 transition-all duration-300">
                      {f.icon}
                    </div>
                    <h4 className="text-coffee-100 font-semibold mb-1 text-sm">{f.title}</h4>
                    <p className="text-dark-300 text-xs leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}

export { FadeInWhenVisible };
