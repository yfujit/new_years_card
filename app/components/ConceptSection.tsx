import React from 'react';
import { siteConfig } from '../../config/siteConfig';

const ConceptSection: React.FC = () => {
  return (
    <section 
      className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100"
      aria-label="2026年コンセプトテーマ説明セクション"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 sm:mb-6">
            {siteConfig.conceptTheme}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium">
            2026年のコンセプトテーマ
          </p>
        </div>

        {/* Concept Explanation Card */}
        <div className="max-w-3xl mx-auto">
          {/* Japanese Explanation */}
          <article className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-100">
            <div className="flex items-center mb-4 sm:mb-6">
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 sm:mr-4"
                aria-hidden="true"
              >
                <span className="text-white font-bold text-base sm:text-lg">仕</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">
                コンセプト説明
              </h3>
            </div>
            <div className="space-y-3 sm:space-y-4 text-slate-700 leading-relaxed">
              <p className="text-base sm:text-lg md:text-xl">
                2026年のテーマは<strong className="text-blue-600">「Specification」</strong>とさせていただきました。
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                より具体的な目標を持ち、一歩ずつ着実に前進することを心がけてまいりたいと存じます。
                明確な仕様は、曖昧さを排除し、確実な成果へと導く道筋となるものと考えております。
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                小さな積み重ねが大きな変化を生み出しますように、詳細な計画と着実な実行により、
                理想の未来を一歩ずつ築いてまいりたいと思います。
              </p>
            </div>
          </article>
        </div>

        {/* Theme Highlights */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <article className="text-center p-4 sm:p-6 bg-white/60 rounded-xl border border-blue-100">
            <div 
              className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
              aria-hidden="true"
            >
              <span className="text-xl sm:text-2xl" role="img" aria-label="ターゲットアイコン">🎯</span>
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">精密性</h4>
            <p className="text-xs sm:text-sm text-slate-600">明確かつ測定可能な目標を設定し、責任を持って達成に取り組む</p>
          </article>
          
          <article className="text-center p-4 sm:p-6 bg-white/60 rounded-xl border border-purple-100">
            <div 
              className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
              aria-hidden="true"
            >
              <span className="text-xl sm:text-2xl" role="img" aria-label="リンクアイコン">🔗</span>
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">構造化</h4>
            <p className="text-xs sm:text-sm text-slate-600">目標達成に向けた計画・プロセスを体系的に整理し、進捗および現状と目標値の差分を常に可視化・管理する</p>
          </article>
          
          <article className="text-center p-4 sm:p-6 bg-white/60 rounded-xl border border-indigo-100 sm:col-span-2 lg:col-span-1">
            <div 
              className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
              aria-hidden="true"
            >
              <span className="text-xl sm:text-2xl" role="img" aria-label="ロケットアイコン">🚀</span>
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">革新</h4>
            <p className="text-xs sm:text-sm text-slate-600">新たな挑戦を積極的に取り入れ、継続的な成長を通じて、業務・個人の両面で価値創出を推進する</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;