'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const ReputationTeaser: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(180); 
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    // Reset timer on page visit
    setTimeLeft(180);
    setIsExpired(false);
    
    const timer = setInterval(() => {
      setTimeLeft((prevTime: number) => {
        if (prevTime <= 1) {
          setIsExpired(true);
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number): string => {
    const mins: number = Math.floor(seconds / 60);
    const secs: number = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const buttonVariants: Variants = {
    idle: {
      scale: 1,
      boxShadow: "0 4px 20px rgba(148, 163, 184, 0.3)"
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 30px rgba(148, 163, 184, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-15, 15, -15],
      x: [-10, 10, -10],
      rotate: [-3, 3, -3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const cryptoSymbols = ['₿', 'Ξ', '◎', '💎', '🚀', '📈', '⚡', '🔥'];

  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-800 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-slate-500/10 to-gray-500/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-10 right-1/4 w-48 h-48 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-xl opacity-50 animate-pulse delay-500"></div>
      </div>

      {/* Floating Crypto Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {cryptoSymbols.map((symbol, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl sm:text-4xl opacity-10 text-slate-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: index * 0.7 }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 h-full flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header with Logo */}
        <motion.header variants={itemVariants} className="flex justify-between items-center mb-8 sm:mb-12 lg:mb-16">
          <div className="text-xl sm:text-2xl font-bold text-white flex items-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-lg sm:text-xl font-bold">R</span>
            </div>
            <span className="text-slate-300">REPUTATION</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm font-bold">◎</span>
            </div>
            <span className="text-slate-400 text-sm sm:text-base">Solana</span>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-2">
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center bg-gradient-to-r from-slate-500/20 to-gray-500/20 border border-slate-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                <span className="text-slate-300 font-semibold text-sm sm:text-base mr-2">
                  🔥 LIVE ON SOLANA
                </span>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                  PUMPING
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                REPUTATION{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-gray-300">
                  &gt; MONEY
                </span>
              </h1>
              <div className="flex justify-center items-center space-x-4 text-2xl sm:text-4xl mb-4">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="text-4xl"
                >
                  💎
                </motion.span>
                <motion.span
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-slate-400 font-mono text-lg sm:text-xl"
                >
                  $REP/SOL
                </motion.span>
                <motion.span
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="text-4xl"
                >
                  🚀
                </motion.span>
              </div>
            </motion.div>

            {/* Price Action */}
            <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl px-4 py-3">
                  <div className="text-slate-400 text-xs mb-1">PRICE USD</div>
                  <div className="text-white font-mono text-sm sm:text-base">$0.00003507</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl px-4 py-3">
                  <div className="text-slate-400 text-xs mb-1">24H</div>
                  <div className="text-red-400 font-mono text-sm sm:text-base">-47.52%</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl px-4 py-3">
                  <div className="text-slate-400 text-xs mb-1">MCAP</div>
                  <div className="text-green-400 font-mono text-sm sm:text-base">$35K</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl px-4 py-3">
                  <div className="text-slate-400 text-xs mb-1">VOLUME</div>
                  <div className="text-cyan-400 font-mono text-sm sm:text-base">$321K</div>
                </div>
              </div>
            </motion.div>

            {/* Meme Text */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
              The final MEME token that puts{' '}
              <span className="text-slate-200 font-bold">REPUTATION over everything</span>.
              <br />
              Join the movement where{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold">
                clout = coins
              </span>{' '}
              💎🚀
            </motion.p>

            {/* Countdown Timer */}
            <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
              <AnimatePresence>
                {!isExpired ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="inline-flex items-center bg-red-500/20 border border-red-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mr-2 sm:mr-3"
                    ></motion.div>
                    <span className="text-red-400 font-medium text-sm sm:text-base lg:text-lg">
                      🔔 Next pump incoming! {formatTime(timeLeft)}
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-2 sm:mr-3"
                    ></motion.div>
                    <span className="text-green-300 font-medium text-sm sm:text-base lg:text-lg">
                      🚀 PUMPING NOW - Don't Miss Out!
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="mb-12 sm:mb-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                variants={buttonVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
                className="bg-gradient-to-r from-slate-600 to-slate-700 text-white font-bold text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl border-2 border-slate-500/50 relative overflow-hidden group w-full sm:w-auto"
                type="button"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.6 }}
                ></motion.div>
                <span className="relative z-10 flex items-center justify-center">
                  📊 View on DexScreener
                  <motion.div
                    className="ml-2 flex-shrink-0"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
              </motion.button>

              <motion.button
                variants={buttonVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl border-2 border-purple-500/50 relative overflow-hidden group w-full sm:w-auto"
                type="button"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.6 }}
                ></motion.div>
                <span className="relative z-10 flex items-center justify-center">
                  🔄 Buy on Raydium
                  <motion.div
                    className="ml-2 flex-shrink-0"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    ◎
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

            {/* Trading Stats */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl px-6 py-4 max-w-4xl mx-auto">
                <div className="text-slate-300 text-sm mb-3 font-medium">📈 Live Trading Activity</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-white">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-green-400">2,932</div>
                    <div className="text-xs text-slate-400">BUYS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-red-400">2,486</div>
                    <div className="text-xs text-slate-400">SELLS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-cyan-400">1,428</div>
                    <div className="text-xs text-slate-400">BUYERS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-purple-400">1,595</div>
                    <div className="text-xs text-slate-400">MAKERS</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl px-6 py-4 inline-block border border-slate-700/30">
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-300">
                  <div className="flex items-center">
                    <span className="text-purple-400 mr-2 text-lg">◎</span>
                    <span className="text-sm font-medium">Built on Solana</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2 text-lg">🔥</span>
                    <span className="text-sm font-medium">Community Driven</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-400 mr-2 text-lg">💎</span>
                    <span className="text-sm font-medium">Diamond Hands Only</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReputationTeaser;