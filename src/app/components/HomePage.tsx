import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProfileAvatar } from './ProfileAvatar';
import { NameOriginPopup } from './NameOriginPopup';
import { InfoBubble } from './InfoBubble';
import { FloatingPixel } from './FloatingPixel';
import { InteractiveCloud } from './InteractiveCloud';
import { SimpleDog } from './SimpleDog';
import { PixelTooltip } from './PixelTooltip';
import { PixelWindow } from './PixelWindow';
import { StatBar } from './StatBar';
import { PixelButton } from './PixelButton';
import {
  Heart,
  Sparkles,
  BookOpen,
  Coffee,
  Camera,
  Music,
  MessageCircle,
  Info,
  History,
  CheckCircle2,
  Calendar,
  Gamepad2
} from 'lucide-react';

interface HomePageProps {
  onEnter: () => void;
}

export function HomePage({ onEnter }: HomePageProps) {
  const [activeView, setActiveView] = useState<'profile' | 'moments' | 'stats'>('profile');

  const socialStats = [
    { label: 'Charm (魅力)', value: 85, icon: Sparkles, color: 'bg-pink-400' },
    { label: 'Intellect (智力)', value: 92, icon: BookOpen, color: 'bg-blue-400' },
    { label: 'Sensitivity (感性)', value: 78, icon: Music, color: 'bg-purple-400' },
    { label: 'Fitness (体能)', value: 60, icon: Coffee, color: 'bg-amber-400' },
  ];

  const recentMoments = [
    {
      type: 'life',
      content: '毕业设计的代码终于跑通了，今晚可以早点睡了Orz',
      time: '昨天',
      likes: 128
    },
    {
      type: 'art',
      content: '尝试画了一张像素风格的自画像，感觉还差得远。',
      time: '2天前',
      likes: 56
    }
  ];

  const skills = [
    {
      name: '德语 · Deutsch',
      tag: '疑似 B1',
      current: 20,
      max: 100,
      color: 'bg-blue-400',
      note: '还在努力中…',
      unknown: false,
    },
    {
      name: '英语 · English',
      tag: 'CET6',
      current: 50,
      max: 100,
      color: 'bg-sky-500',
      note: '还在努力中…',
      unknown: false,
    },
    {
      name: '网页开发 · Web Dev',
      tag: '未知',
      current: 0,
      max: 100,
      color: 'bg-indigo-400',
      note: '???',
      unknown: true,
    },
  ];

  const basicData = [
    { label: 'Birthday', value: 'August 24' },
    { label: 'MBTI', value: 'INTJ' },
    { label: 'Location', value: 'Zhejiang, China' },
    { label: 'Profession', value: 'CS Student' },
  ];

  return (
    <div className="min-h-screen bg-[#fcf8ff] text-[#4a4a6a] p-4 lg:p-12 relative overflow-hidden font-sans">
      {/* Background soft particles */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(rgba(147, 197, 253, 0.3) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <FloatingPixel initialX={10} initialY={15} color="#93c5fd" size={10} />
      <FloatingPixel initialX={85} initialY={25} color="#f9a8d4" size={14} />

      <InteractiveCloud position="left" />
      <InteractiveCloud position="right" />

      <SimpleDog />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Protagonist Quote / Dialogue Bubble */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative group max-w-2xl w-full">
            <div className="absolute inset-0 bg-primary translate-x-1 translate-y-1" />
            <div className="relative bg-white border-2 border-primary p-6 md:px-10">
              <div className="absolute -top-3 left-6 bg-primary text-white px-2 py-0.5 font-pixel text-[7px] uppercase">
                Now Thinking...
              </div>
              <p className="font-pixel text-[10px] md:text-xs leading-relaxed text-primary/80 italic">"Welcome!"</p>
              <div className="absolute -bottom-2 right-6 flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-primary animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveView('profile')}
            className={`flex items-center gap-2 px-6 py-3 border-2 transition-all font-pixel text-[10px] ${
              activeView === 'profile'
                ? 'border-primary bg-primary text-white shadow-[4px_4px_0_0_rgba(37,99,235,0.2)]'
                : 'border-transparent bg-white/60 hover:bg-white'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>PROFILE</span>
          </button>
          <button
            onClick={() => setActiveView('moments')}
            className={`flex items-center gap-2 px-6 py-3 border-2 transition-all font-pixel text-[10px] ${
              activeView === 'moments'
                ? 'border-primary bg-primary text-white shadow-[4px_4px_0_0_rgba(37,99,235,0.2)]'
                : 'border-transparent bg-white/60 hover:bg-white'
            }`}
          >
            <History className="w-4 h-4" />
            <span>MOMENTS</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left: Character Portrait Card */}
          <div className="lg:col-span-5">
            <motion.div
              layout
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-tr from-pink-100 to-blue-100 blur-xl opacity-50" />
              <PixelWindow className="!p-2">
                <div className="relative aspect-[3/4] bg-white group" style={{ overflow: 'visible' }}>
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                    <div className="w-full h-full transition-transform duration-700 group-hover:scale-105 overflow-hidden">
                      <ProfileAvatar />
                    </div>
                  </div>

                  {/* Avatar Info Bubble */}
                  <div className="absolute top-3 right-3 z-20">
                    <InfoBubble title="头像" content={"这是我喜欢的一个游戏角色同人！"} />
                  </div>

                  {/* Status Overlay */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    <div className="bg-white/90 backdrop-blur-sm border-2 border-primary px-3 py-1 flex items-center gap-2 shadow-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="font-pixel text-[8px] text-primary">STATUS: ONLINE</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm border-2 border-pink-400 px-3 py-1 flex items-center gap-2 shadow-sm">
                      <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
                      <span className="font-pixel text-[8px] text-pink-600">MOOD: HAPPY</span>
                    </div>
                  </div>

                  {/* Character Name Label */}
                  <div className="absolute -bottom-[1px] left-0 right-0 z-20">
                    <div className="bg-white/95 backdrop-blur-md border-t-4 border-x-4 border-primary px-4 pt-3 pb-4 shadow-xl mx-0">
                      <div className="flex justify-between items-end">
                        <div>
                          <h1 className="font-pixel text-xl text-primary mb-1">Blauschadow</h1>
                          <p className="font-pixel text-[7px] text-muted-foreground tracking-widest uppercase">The Blue Dreamer</p>
                        </div>
                        <NameOriginPopup />
                      </div>
                    </div>
                  </div>
                </div>
              </PixelWindow>

              {/* Character Tags */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {['#Gamer', '#Coder', '#PixelArtist', '#DayDreamer'].map((tag) => (
                  <span key={tag} className="bg-white border-2 border-primary/10 px-3 py-1 font-pixel text-[7px] text-primary/60 hover:border-primary/40 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Detailed Info */}
          <div className="lg:col-span-7 space-y-8">
            <AnimatePresence mode="wait">
              {activeView === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <PixelWindow title="CHARACTER INFO">
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <p className="font-pixel text-[7px] text-pink-400 uppercase">Affinity (好感度)</p>
                          <StatBar label="" current={88} max={100} color="bg-pink-500" className="!space-y-0" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-pixel text-[7px] text-blue-400 uppercase">Stamina (精力值)</p>
                          <StatBar label="" current={45} max={100} color="bg-blue-400" className="!space-y-0" />
                        </div>
                      </div>

                      <div className="border-t-2 border-dashed border-primary/10 pt-6">
                        <h3 className="font-pixel text-[10px] text-primary mb-4 flex items-center gap-2">
                          <Camera className="w-4 h-4" /> BASIC DATA
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                          {basicData.map((item) => (
                            <div key={item.label} className="flex justify-between border-b border-primary/5 pb-1">
                              <span className="font-pixel text-[8px] text-muted-foreground">{item.label}</span>
                              <span className="font-pixel text-[8px] text-primary">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-pixel text-[10px] text-primary flex items-center gap-2">
                          <Heart className="w-4 h-4 text-pink-400" /> PREFERENCES
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-pink-50/50 p-4 border-2 border-pink-100">
                            <p className="font-pixel text-[8px] text-pink-600 mb-2 uppercase">Likes </p>
                            <p className="font-pixel text-[9px] leading-relaxed opacity-70">MOBA,视觉小说,螺旋状的意大利面,咖啡,番茄</p>
                          </div>
                          <div className="bg-slate-50/50 p-4 border-2 border-slate-100">
                            <p className="font-pixel text-[8px] text-slate-600 mb-2 uppercase">Dislikes </p>
                            <p className="font-pixel text-[9px] leading-relaxed opacity-70">榴莲糖</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PixelWindow>

                  <PixelWindow title="SKILL TREE" delay={0.1}>
                    <div className="space-y-5">
                      {skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-end justify-between gap-2">
                            <span className="font-pixel text-[9px] text-foreground">{skill.name}</span>
                            <span className="font-pixel text-[7px] text-primary border border-primary/30 px-1.5 py-0.5 bg-primary/5 whitespace-nowrap">
                              {skill.tag}
                            </span>
                          </div>
                          {skill.unknown ? (
                            <div className="h-5 border-2 border-primary bg-background p-[2px] relative overflow-hidden">
                              <div
                                className="absolute inset-[2px]"
                                style={{
                                  backgroundImage:
                                    'repeating-linear-gradient(45deg, rgba(37,99,235,0.25) 0px, rgba(37,99,235,0.25) 3px, transparent 3px, transparent 8px)',
                                }}
                              />
                              <div className="absolute top-0 left-0 right-0 h-1 bg-white/30 pointer-events-none" />
                            </div>
                          ) : (
                            <StatBar
                              label=""
                              current={skill.current}
                              max={skill.max}
                              color={skill.color}
                              className="!space-y-0"
                            />
                          )}
                          <div className="flex justify-between items-center">
                            <span className="font-pixel text-[7px] text-muted-foreground">{skill.note}</span>
                            <span className="font-pixel text-[7px] text-muted-foreground">
                              {skill.unknown ? '? / 100' : `${skill.current} / ${skill.max}`}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </PixelWindow>

                  <div className="flex justify-end">
                    <PixelButton onClick={onEnter} variant="primary">
                      ENTER CHRONICLE ▶
                    </PixelButton>
                  </div>
                </motion.div>
              )}

              {activeView === 'moments' && (
                <motion.div
                  key="moments"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b-2 border-primary/10 pb-4">
                    <h2 className="font-pixel text-sm text-primary flex items-center gap-2">
                      <MessageCircle className="w-6 h-6" /> SOCIAL FEED
                    </h2>
                    <span className="font-pixel text-[8px] text-muted-foreground uppercase">Recent Moments</span>
                  </div>

                  {recentMoments.map((moment, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="bg-white border-2 border-primary/10 p-6 shadow-sm hover:border-primary/30 transition-all group">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-primary/5 border-2 border-primary/10 flex items-center justify-center flex-shrink-0">
                            {moment.type === 'game' ? <Gamepad2 className="w-6 h-6 text-primary" /> :
                             moment.type === 'art' ? <Camera className="w-6 h-6 text-pink-400" /> :
                             <Coffee className="w-6 h-6 text-amber-500" />}
                          </div>
                          <div className="flex-1 space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="font-pixel text-[7px] text-muted-foreground">{moment.time}</span>
                              <div className="flex items-center gap-1">
                                <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
                                <span className="font-pixel text-[7px] text-pink-400">{moment.likes}</span>
                              </div>
                            </div>
                            <p className="font-pixel text-[10px] leading-relaxed text-foreground/80">
                              {moment.content}
                            </p>
                            <div className="flex gap-4 pt-2 border-t border-dashed border-primary/5">
                              <button className="font-pixel text-[7px] text-primary/40 hover:text-primary transition-colors flex items-center gap-1">
                                <MessageCircle className="w-3 h-3" /> REPLY
                              </button>
                              <button className="font-pixel text-[7px] text-primary/40 hover:text-primary transition-colors flex items-center gap-1">
                                <Heart className="w-3 h-3" /> LIKE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <div className="text-center pt-6">
                    <PixelButton onClick={() => setActiveView('profile')} variant="secondary">
                      RETURN TO PROFILE
                    </PixelButton>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Aesthetic Footer */}
      <footer className="mt-24 border-t-2 border-primary/5 pt-12 pb-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4 opacity-50">
          <div className="flex gap-8">
            <span className="font-pixel text-[8px] uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">Twitter</span>
            <span className="font-pixel text-[8px] uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">GitHub</span>
            <span className="font-pixel text-[8px] uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">Email</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-pink-300 rounded-full animate-pulse" />
            <p className="font-pixel text-[7px] uppercase tracking-[0.2em]">Always Dreaming · 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
