import React from 'react';
import Image from 'next/image';
import { siteConfig } from '../../config/siteConfig';
import { breakpoints } from '../../config/responsive';
import { imageConfig } from '../../config/imageConfig';

const HeroSection: React.FC = () => {
  return (
    <>
      {/* Full Screen Image with Title Overlay */}
      <section 
        className="relative min-h-screen w-full overflow-hidden"
        aria-label="2026年新年メインビジュアル"
      >
        {/* Background Image - Full Screen */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/happy_new_year_image.png"
            alt="2026年新年メインビジュアル - 龍と仕様書が舞う新年の挨拶。構造化された思考の力を表現するAI生成アニメーション"
            fill
            priority={imageConfig.priority.hero}
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Title Overlay Only */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center space-y-4">
            <h1 
              className="font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white drop-shadow-2xl"
              aria-label="2026年"
              style={{
                textShadow: '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)'
              }}
            >
              {siteConfig.year}
            </h1>
            <p 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white drop-shadow-xl"
              aria-label="2026年のテーマ: Specification"
              style={{
                textShadow: '0 0 15px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)'
              }}
            >
              {siteConfig.conceptTheme}
            </p>
          </div>
        </div>
      </section>

      {/* Greeting Section - Separate from image */}
      <section 
        className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50"
        aria-label="2026年新年挨拶セクション"
      >
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Japanese Greeting - No card styling */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">
                新年のご挨拶
              </h2>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed space-y-3 sm:space-y-4">
                {siteConfig.greeting.japanese.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Concept Theme Description - No card styling, 2 lines */}
          <div className="max-w-3xl mx-auto">
            <div className="p-4 sm:p-6">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed space-y-2">
                <p>より明確な目標を持ち、</p>
                <p>着実な未来を共に築いていければと存じます</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;