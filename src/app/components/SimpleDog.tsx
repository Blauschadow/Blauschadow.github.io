import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PixelTooltip } from './PixelTooltip';

export function SimpleDog() {
  const [poseIndex, setPoseIndex] = useState(0);

  const poses = ['sitting', 'standing', 'running', 'lying'];
  const poseNames = ['SITTING', 'STANDING', 'RUNNING', 'ASLEEP'];

  const handleClick = () => {
    setPoseIndex((prev) => (prev + 1) % poses.length);
  };

  const pose = poses[poseIndex];

  // Colors
  const dogColor = '#fbbf24';
  const darkDogColor = '#f59e0b';
  const eyeColor = '#1a1a2e';

  return (
    <div className="fixed right-6 bottom-24 z-50">
      <div className="relative group">
        {/* Status Bubble */}
        <AnimatePresence mode="wait">
          <motion.div
            key={poseIndex}
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white border-2 border-primary px-3 py-1 shadow-[4px_4px_0_0_rgba(37,99,235,0.1)]"
          >
            <span className="font-pixel text-[7px] text-primary">{poseNames[poseIndex]}</span>
            {/* Pointer */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-r-2 border-b-2 border-primary rotate-45 -translate-y-[5px]" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute -top-4 -right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <PixelTooltip 
            title="PET INFO"
            content="Golden Retriever: Blauschatten's companion. Click to cycle through different animations!" 
          />
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/80 backdrop-blur-sm border-4 border-primary p-3 shadow-xl cursor-pointer"
          onClick={handleClick}
        >
          <div className="relative" style={{ width: '64px', height: '64px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={pose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Sitting */}
                {pose === 'sitting' && (
                  <svg width="64" height="64" viewBox="0 0 16 16">
                    <rect x="2" y="2" width="2" height="3" fill={darkDogColor}/>
                    <rect x="12" y="2" width="2" height="3" fill={darkDogColor}/>
                    <rect x="4" y="2" width="8" height="4" fill={dogColor}/>
                    <rect x="3" y="3" width="10" height="2" fill={dogColor}/>
                    <rect x="6" y="4" width="1" height="1" fill={eyeColor}/>
                    <rect x="9" y="4" width="1" height="1" fill={eyeColor}/>
                    <rect x="7" y="5" width="2" height="1" fill={eyeColor}/>
                    <rect x="5" y="6" width="6" height="4" fill={dogColor}/>
                    <rect x="4" y="7" width="8" height="2" fill={dogColor}/>
                    <rect x="5" y="10" width="2" height="4" fill={darkDogColor}/>
                    <rect x="9" y="10" width="2" height="4" fill={darkDogColor}/>
                    <rect x="11" y="6" width="2" height="1" fill={darkDogColor}/>
                    <rect x="12" y="5" width="2" height="1" fill={darkDogColor}/>
                  </svg>
                )}

                {/* Standing */}
                {pose === 'standing' && (
                  <svg width="64" height="64" viewBox="0 0 16 16">
                    <rect x="2" y="1" width="2" height="3" fill={darkDogColor}/>
                    <rect x="12" y="1" width="2" height="3" fill={darkDogColor}/>
                    <rect x="4" y="1" width="8" height="4" fill={dogColor}/>
                    <rect x="3" y="2" width="10" height="2" fill={dogColor}/>
                    <rect x="6" y="3" width="1" height="1" fill={eyeColor}/>
                    <rect x="9" y="3" width="1" height="1" fill={eyeColor}/>
                    <rect x="7" y="4" width="2" height="1" fill={eyeColor}/>
                    <rect x="5" y="5" width="6" height="5" fill={dogColor}/>
                    <rect x="4" y="6" width="8" height="3" fill={dogColor}/>
                    <rect x="5" y="10" width="1" height="4" fill={darkDogColor}/>
                    <rect x="7" y="10" width="1" height="4" fill={darkDogColor}/>
                    <rect x="8" y="10" width="1" height="4" fill={darkDogColor}/>
                    <rect x="10" y="10" width="1" height="4" fill={darkDogColor}/>
                    <rect x="11" y="7" width="3" height="2" fill={darkDogColor}/>
                  </svg>
                )}

                {/* Running */}
                {pose === 'running' && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 0.4 }}
                  >
                    <svg width="64" height="64" viewBox="0 0 16 16">
                      <rect x="1" y="2" width="2" height="2" fill={darkDogColor}/>
                      <rect x="11" y="2" width="2" height="2" fill={darkDogColor}/>
                      <rect x="3" y="2" width="8" height="4" fill={dogColor}/>
                      <rect x="2" y="3" width="10" height="2" fill={dogColor}/>
                      <rect x="5" y="4" width="1" height="1" fill={eyeColor}/>
                      <rect x="8" y="4" width="1" height="1" fill={eyeColor}/>
                      <rect x="6" y="5" width="2" height="1" fill={eyeColor}/>
                      <rect x="4" y="6" width="7" height="4" fill={dogColor}/>
                      <rect x="3" y="7" width="9" height="2" fill={dogColor}/>
                      <rect x="4" y="10" width="1" height="2" fill={darkDogColor}/>
                      <rect x="6" y="10" width="1" height="4" fill={darkDogColor}/>
                      <rect x="8" y="10" width="1" height="3" fill={darkDogColor}/>
                      <rect x="10" y="10" width="1" height="1" fill={darkDogColor}/>
                      <rect x="11" y="7" width="2" height="1" fill={darkDogColor}/>
                      <rect x="13" y="8" width="2" height="1" fill={darkDogColor}/>
                    </svg>
                  </motion.div>
                )}

                {/* Lying down (Asleep) */}
                {pose === 'lying' && (
                  <svg width="64" height="64" viewBox="0 0 16 16">
                    <rect x="2" y="6" width="4" height="4" fill={dogColor}/>
                    <rect x="1" y="7" width="6" height="2" fill={dogColor}/>
                    <rect x="2" y="5" width="2" height="1" fill={darkDogColor}/>
                    <rect x="3" y="7" width="2" height="1" fill={eyeColor}/>
                    <rect x="1" y="8" width="1" height="1" fill={eyeColor}/>
                    <rect x="6" y="8" width="7" height="3" fill={dogColor}/>
                    <rect x="5" y="9" width="9" height="1" fill={dogColor}/>
                    <rect x="7" y="11" width="2" height="1" fill={darkDogColor}/>
                    <rect x="10" y="11" width="2" height="1" fill={darkDogColor}/>
                    <rect x="13" y="9" width="2" height="1" fill={darkDogColor}/>
                    <rect x="14" y="10" width="1" height="1" fill={darkDogColor}/>
                    <motion.text 
                      animate={{ opacity: [0, 1, 0], y: [0, -2] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      x="10" y="6" fill="#2563eb" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '3px' }}>z</motion.text>
                    <motion.text 
                      animate={{ opacity: [0, 1, 0], y: [0, -3] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                      x="12" y="4" fill="#60a5fa" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '2px' }}>z</motion.text>
                  </svg>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
