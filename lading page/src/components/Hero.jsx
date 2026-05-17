import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/Cappuccino_with_latte_202604240506.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/60 to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/50 to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Steam lines */}
        <div className="absolute top-1/3 left-1/4">
          <div className="w-1 h-16 bg-gradient-to-t from-transparent via-white/10 to-transparent rounded-full animate-steam" />
          <div className="w-1 h-12 bg-gradient-to-t from-transparent via-white/8 to-transparent rounded-full animate-steam-delay-1 ml-4" />
          <div className="w-1 h-14 bg-gradient-to-t from-transparent via-white/6 to-transparent rounded-full animate-steam-delay-2 ml-8" />
        </div>

        {/* Floating beans */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${15 + i * 14}%`,
              left: `${5 + i * 18}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="w-2 h-3 rounded-full bg-coffee-400/20" />
          </motion.div>
        ))}

        {/* Stars/sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-3 h-3 text-gold-400/30" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-light mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-sm font-inter text-gold-400 tracking-widest uppercase">
            Est. 2019 — Premium Artisan Coffee
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
        >
          <span className="text-coffee-100">Every Sip</span>
          <br />
          <span className="text-gradient-gold">Tells a Story</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-inter text-dark-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Discover the art of handcrafted coffee. From ethically sourced beans
          to your perfect cup — experience specialty coffee like never before.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-gold-400 to-coffee-500 text-dark-900 font-semibold rounded-full text-lg shadow-2xl shadow-gold-400/20 hover:shadow-gold-400/40 transition-shadow duration-500 flex items-center gap-2"
          >
            Explore Our Menu
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { num: '15K+', label: 'Happy Customers' },
            { num: '50+', label: 'Coffee Variants' },
            { num: '4.9', label: 'Average Rating' },
            { num: '5', label: 'Years of Craft' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-playfair text-3xl md:text-4xl font-bold text-gradient-gold">
                {stat.num}
              </p>
              <p className="text-sm text-dark-300 mt-1 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-dark-300 hover:text-gold-400 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}
