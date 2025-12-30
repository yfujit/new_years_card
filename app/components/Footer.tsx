import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer 
      className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-6 sm:py-8 px-4 mt-auto"
      role="contentinfo"
      aria-label="サイトフッター"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 sm:space-y-4">
          {/* Copyright and Author Information */}
          <div className="border-t border-slate-700 pt-4 sm:pt-6">
            <p className="text-sm md:text-base text-slate-300">
              <span aria-label="著作権">&copy;</span> 2026 Toshiyuki. All rights reserved.
            </p>
            <p className="text-xs md:text-sm text-slate-400 mt-2">
              Created with <span role="img" aria-label="ハート">❤️</span> using Next.js, AI technologies, and the power of specification
            </p>
          </div>
          
          {/* Theme Information */}
          <div className="text-xs md:text-sm text-slate-400">
            <p>2026年のテーマ: <span className="text-gradient font-semibold">Specification</span></p>
            <p className="mt-1">構造化された思考の力で、より良い未来を築きましょう</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;