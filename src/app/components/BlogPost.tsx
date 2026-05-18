import { motion } from 'motion/react';
import { Scroll, Tag, ArrowRight } from 'lucide-react';

interface BlogPostProps {
  title: string;
  date: string;
  preview: string;
  tags: string[];
  onClick?: () => void;
}

export function BlogPost({ title, date, preview, tags, onClick }: BlogPostProps) {
  return (
    <motion.div
      whileHover={{ x: 8 }}
      className="group relative"
      onClick={onClick}
    >
      {/* Decorative side bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20 group-hover:bg-primary transition-colors" />

      <div className="ml-4 border-2 border-primary/10 bg-white p-6 hover:border-primary/40 hover:shadow-[8px_8px_0_0_rgba(37,99,235,0.05)] transition-all cursor-pointer overflow-hidden">
        {/* Background icon decoration */}
        <Scroll className="absolute -bottom-4 -right-4 w-24 h-24 text-primary/[0.03] -rotate-12 transition-transform group-hover:scale-110" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:animate-ping" />
              <span className="font-pixel text-[8px] text-muted-foreground uppercase tracking-widest">
                ENTRY {date}
              </span>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>
          </div>

          <h2 className="font-pixel text-sm mb-4 leading-relaxed group-hover:text-primary transition-colors">
            {title}
          </h2>

          <p className="font-pixel text-[9px] text-muted-foreground mb-6 leading-relaxed line-clamp-2">
            {preview}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-2 py-1 bg-primary/5 border border-primary/10"
              >
                <Tag className="w-2.5 h-2.5 text-primary/60" />
                <span className="font-pixel text-[7px] text-primary/80 uppercase">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
