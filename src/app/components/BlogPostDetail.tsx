import { motion } from 'motion/react';
import { PixelButton } from './PixelButton';
import { PixelHeart } from './PixelHeart';
import { ChevronLeft, Share2, Printer, BookOpen } from 'lucide-react';
import { PixelWindow } from './PixelWindow';

interface BlogPostDetailProps {
  title: string;
  date: string;
  tags: string[];
  content: string;
  onBack: () => void;
}

export function BlogPostDetail({ title, date, tags, content, onBack }: BlogPostDetailProps) {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Detail View Wrapper */}
      <div className="flex justify-between items-center px-2">
        <PixelButton onClick={onBack} variant="secondary">
          <div className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            <span>RETURN</span>
          </div>
        </PixelButton>
        <div className="flex gap-2">
          <button className="p-2 border-2 border-primary/10 hover:border-primary/40 transition-colors text-muted-foreground">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="p-2 border-2 border-primary/10 hover:border-primary/40 transition-colors text-muted-foreground">
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      <PixelWindow>
        <article className="py-6 px-2">
          {/* Header Info */}
          <div className="border-b-2 border-primary/10 pb-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="font-pixel text-[8px] text-muted-foreground tracking-[0.3em] uppercase">
                Chronicle Record · {date}
              </span>
            </div>
            
            <h1 className="font-pixel text-xl leading-relaxed text-foreground mb-6">
              {title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/5 text-primary border border-primary/20 font-pixel text-[7px] uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content Body */}
          <div className="font-pixel text-[10px] leading-[2.2] text-foreground/80 space-y-6">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="relative pl-6">
                <span className="absolute left-0 top-0 text-primary opacity-30">»</span>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Engagement Footer */}
          <div className="mt-12 pt-8 border-t-2 border-primary/10">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-primary/20" />
                <PixelHeart size={20} />
                <div className="h-[1px] w-12 bg-primary/20" />
              </div>
              
              <p className="font-pixel text-[8px] text-muted-foreground text-center max-w-xs">
                Log completed. The memories of this journey have been preserved in the eternal archive.
              </p>

              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-primary/20" />
                ))}
              </div>
            </div>
          </div>
        </article>
      </PixelWindow>

      {/* Bottom Nav */}
      <div className="flex justify-center pt-4">
        <PixelButton onClick={onBack} variant="primary">
          BACK TO ARCHIVES
        </PixelButton>
      </div>
    </div>
  );
}
