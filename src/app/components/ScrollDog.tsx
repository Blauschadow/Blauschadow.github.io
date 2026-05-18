import { useState, useEffect } from 'react';

export function ScrollDog() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollPercentage = Math.min(100, Math.max(0, (position / maxScroll) * 100));

      // 防止过度更新
      setScrollPosition(prev => {
        if (Math.abs(prev - scrollPercentage) > 1) {
          return scrollPercentage;
        }
        return prev;
      });
    };

    // 初始化
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 根据滚动位置选择狗狗姿势
  const getDogPose = () => {
    if (scrollPosition < 20) {
      return 'sitting'; // 坐着
    } else if (scrollPosition < 50) {
      return 'standing'; // 站立
    } else if (scrollPosition < 80) {
      return 'running'; // 跑步
    } else {
      return 'lying'; // 躺下休息
    }
  };

  const pose = getDogPose();

  // 金毛的颜色
  const dogColor = '#fbbf24'; // 金黄色
  const darkDogColor = '#f59e0b'; // 深金色
  const eyeColor = '#1a1a2e'; // 眼睛

  return (
    <div className="fixed right-8 bottom-8 z-50">
      <div className="bg-white border-4 border-primary p-4 shadow-2xl">
        <div className="relative" style={{ width: '80px', height: '80px' }}>
          {/* 坐着姿势 */}
          {pose === 'sitting' && (
            <svg width="80" height="80" viewBox="0 0 16 16" className="animate-bounce">
              {/* 耳朵 */}
              <rect x="2" y="2" width="2" height="3" fill={darkDogColor}/>
              <rect x="12" y="2" width="2" height="3" fill={darkDogColor}/>
              {/* 头部 */}
              <rect x="4" y="2" width="8" height="4" fill={dogColor}/>
              <rect x="3" y="3" width="10" height="2" fill={dogColor}/>
              {/* 眼睛 */}
              <rect x="6" y="4" width="1" height="1" fill={eyeColor}/>
              <rect x="9" y="4" width="1" height="1" fill={eyeColor}/>
              {/* 鼻子 */}
              <rect x="7" y="5" width="2" height="1" fill={eyeColor}/>
              {/* 身体（坐姿）*/}
              <rect x="5" y="6" width="6" height="4" fill={dogColor}/>
              <rect x="4" y="7" width="8" height="2" fill={dogColor}/>
              {/* 前腿 */}
              <rect x="5" y="10" width="2" height="4" fill={darkDogColor}/>
              <rect x="9" y="10" width="2" height="4" fill={darkDogColor}/>
              {/* 尾巴（向上）*/}
              <rect x="11" y="6" width="2" height="1" fill={darkDogColor}/>
              <rect x="12" y="5" width="2" height="1" fill={darkDogColor}/>
            </svg>
          )}

          {/* 站立姿势 */}
          {pose === 'standing' && (
            <svg width="80" height="80" viewBox="0 0 16 16">
              {/* 耳朵 */}
              <rect x="2" y="1" width="2" height="3" fill={darkDogColor}/>
              <rect x="12" y="1" width="2" height="3" fill={darkDogColor}/>
              {/* 头部 */}
              <rect x="4" y="1" width="8" height="4" fill={dogColor}/>
              <rect x="3" y="2" width="10" height="2" fill={dogColor}/>
              {/* 眼睛 */}
              <rect x="6" y="3" width="1" height="1" fill={eyeColor}/>
              <rect x="9" y="3" width="1" height="1" fill={eyeColor}/>
              {/* 鼻子 */}
              <rect x="7" y="4" width="2" height="1" fill={eyeColor}/>
              {/* 身体（站立）*/}
              <rect x="5" y="5" width="6" height="5" fill={dogColor}/>
              <rect x="4" y="6" width="8" height="3" fill={dogColor}/>
              {/* 四条腿 */}
              <rect x="5" y="10" width="1" height="4" fill={darkDogColor}/>
              <rect x="7" y="10" width="1" height="4" fill={darkDogColor}/>
              <rect x="8" y="10" width="1" height="4" fill={darkDogColor}/>
              <rect x="10" y="10" width="1" height="4" fill={darkDogColor}/>
              {/* 尾巴（水平）*/}
              <rect x="11" y="7" width="3" height="2" fill={darkDogColor}/>
            </svg>
          )}

          {/* 跑步姿势 */}
          {pose === 'running' && (
            <svg width="80" height="80" viewBox="0 0 16 16" className="animate-pulse">
              {/* 耳朵（向后飘）*/}
              <rect x="1" y="2" width="2" height="2" fill={darkDogColor}/>
              <rect x="11" y="2" width="2" height="2" fill={darkDogColor}/>
              {/* 头部 */}
              <rect x="3" y="2" width="8" height="4" fill={dogColor}/>
              <rect x="2" y="3" width="10" height="2" fill={dogColor}/>
              {/* 眼睛 */}
              <rect x="5" y="4" width="1" height="1" fill={eyeColor}/>
              <rect x="8" y="4" width="1" height="1" fill={eyeColor}/>
              {/* 鼻子 */}
              <rect x="6" y="5" width="2" height="1" fill={eyeColor}/>
              {/* 身体（跑步时倾斜）*/}
              <rect x="4" y="6" width="7" height="4" fill={dogColor}/>
              <rect x="3" y="7" width="9" height="2" fill={dogColor}/>
              {/* 腿部（跑步姿势，高低不同）*/}
              <rect x="4" y="10" width="1" height="2" fill={darkDogColor}/>
              <rect x="6" y="10" width="1" height="4" fill={darkDogColor}/>
              <rect x="8" y="10" width="1" height="3" fill={darkDogColor}/>
              <rect x="10" y="10" width="1" height="1" fill={darkDogColor}/>
              {/* 尾巴（向后飘）*/}
              <rect x="11" y="7" width="2" height="1" fill={darkDogColor}/>
              <rect x="13" y="8" width="2" height="1" fill={darkDogColor}/>
            </svg>
          )}

          {/* 躺下姿势 */}
          {pose === 'lying' && (
            <svg width="80" height="80" viewBox="0 0 16 16">
              {/* 头部（侧躺）*/}
              <rect x="2" y="6" width="4" height="4" fill={dogColor}/>
              <rect x="1" y="7" width="6" height="2" fill={dogColor}/>
              {/* 耳朵 */}
              <rect x="2" y="5" width="2" height="1" fill={darkDogColor}/>
              {/* 眼睛（闭眼，用横线表示）*/}
              <rect x="3" y="7" width="2" height="1" fill={eyeColor}/>
              {/* 鼻子 */}
              <rect x="1" y="8" width="1" height="1" fill={eyeColor}/>
              {/* 身体（躺平）*/}
              <rect x="6" y="8" width="7" height="3" fill={dogColor}/>
              <rect x="5" y="9" width="9" height="1" fill={dogColor}/>
              {/* 腿部（放松状态）*/}
              <rect x="7" y="11" width="2" height="1" fill={darkDogColor}/>
              <rect x="10" y="11" width="2" height="1" fill={darkDogColor}/>
              {/* 尾巴（放松）*/}
              <rect x="13" y="9" width="2" height="1" fill={darkDogColor}/>
              <rect x="14" y="10" width="1" height="1" fill={darkDogColor}/>
              {/* ZZZ 睡觉符号 */}
              <text x="10" y="6" fill="#2563eb" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '3px' }}>z</text>
              <text x="12" y="4" fill="#60a5fa" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '2px' }}>z</text>
            </svg>
          )}
        </div>

        {/* 状态文字 */}
        <div className="text-center mt-2">
          <p
            className="text-primary"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '6px' }}
          >
            {pose === 'sitting' && 'READY!'}
            {pose === 'standing' && 'WALKING'}
            {pose === 'running' && 'RUNNING!'}
            {pose === 'lying' && 'RESTING'}
          </p>
        </div>
      </div>
    </div>
  );
}
