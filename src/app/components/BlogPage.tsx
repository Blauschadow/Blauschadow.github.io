import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BlogPost } from './BlogPost';
import { BlogPostDetail } from './BlogPostDetail';
import { PixelButton } from './PixelButton';
import { PixelHeart } from './PixelHeart';
import { FloatingPixel } from './FloatingPixel';
import { InteractiveCloud } from './InteractiveCloud';
import { PixelTreasure } from './PixelTreasure';
import { PixelWindow } from './PixelWindow';
import { Book, ChevronLeft, Map as MapIcon, Sparkles, User } from 'lucide-react';
import blogAvatar from '../../imports/1778771257820-1.png';

interface BlogPageProps {
  onBack: () => void;
}

export function BlogPage({ onBack }: BlogPageProps) {
  const [currentView, setCurrentView] = useState<'posts' | 'about'>('posts');
  const [selectedPostIndex, setSelectedPostIndex] = useState<number | null>(null);

  const blogPosts = [
    {
      title: "我的第一篇博客！",
      date: "2026.05.16",
      preview: "你好，世界。这是我的第一篇博客……",
      tags: ["第一篇"],
      content: "我的第一篇博客！"
    }
  ];

  return (
    <div className="min-h-screen bg-[#e8eef3] text-foreground p-4 lg:p-12 relative overflow-hidden font-sans">
      <FloatingPixel initialX={15} initialY={10} color="#2563eb" size={10} />
      <FloatingPixel initialX={80} initialY={20} color="#60a5fa" size={14} />
      
      <InteractiveCloud position="left" />
      <InteractiveCloud position="right" />
      <PixelTreasure />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Navigation / Header */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <PixelButton onClick={onBack} variant="secondary">
              <div className="flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                <span>EXIT STAGE</span>
              </div>
            </PixelButton>
            <div className="h-8 w-1 bg-primary/20" />
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 border-2 border-primary/10">
              <Book className="w-4 h-4 text-primary" />
              <span className="font-pixel text-[10px] text-primary">MEMORY ARCHIVE</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-2"
          >
            <PixelButton
              variant={currentView === 'posts' ? 'primary' : 'secondary'}
              onClick={() => { setCurrentView('posts'); setSelectedPostIndex(null); }}
            >
              LOGS
            </PixelButton>
            <PixelButton
              variant={currentView === 'about' ? 'primary' : 'secondary'}
              onClick={() => { setCurrentView('about'); setSelectedPostIndex(null); }}
            >
              PROFILE
            </PixelButton>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {selectedPostIndex !== null ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
            >
              <BlogPostDetail
                {...blogPosts[selectedPostIndex]}
                onBack={() => setSelectedPostIndex(null)}
              />
            </motion.div>
          ) : currentView === 'posts' ? (
            <motion.div
              key="posts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <MapIcon className="w-6 h-6 text-primary" />
                <h2 className="font-pixel text-sm uppercase tracking-widest">Chronicle Records</h2>
              </div>
              
              <div className="grid gap-6">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <BlogPost {...post} onClick={() => setSelectedPostIndex(index)} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <PixelWindow title="About Me">
                <div className="space-y-8 py-4">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-full md:w-1/3 aspect-[3/4] border-4 border-primary/20 relative overflow-hidden">
                      <img src={blogAvatar} alt="Profile" className="w-full h-full object-cover object-top" />
                    </div>
                    
                    <div className="flex-1 space-y-6">
                      <h3 className="font-pixel text-lg text-primary underline underline-offset-8 decoration-2 decoration-primary/20">A normal person,A Game lover</h3>
                      <div className="font-pixel text-[10px] leading-relaxed text-foreground/70 space-y-4">
                        <p><span className="font-normal">情报待公开...</span></p>
                        
                        <div className="flex items-center gap-3 py-4 border-y-2 border-primary/5">
                          <PixelHeart size={20} />
                          <span className="text-primary">Information- ???</span>
                        </div>
                        <p>情报待公开...</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-primary/10 pt-8 flex justify-center gap-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-primary/20" style={{ opacity: 1 - i * 0.2 }} />
                    ))}
                  </div>
                </div>
              </PixelWindow>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-20 flex flex-col items-center gap-4">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <p className="font-pixel text-[8px] text-muted-foreground uppercase tracking-[0.2em]">
            End of Current Log
          </p>
        </footer>
      </div>
    </div>
  );
}
