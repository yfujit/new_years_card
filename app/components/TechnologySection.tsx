import TechnologyCard from './TechnologyCard';
import { siteConfig } from '../../config/siteConfig';
import { gridConfig } from '../../config/responsive';

export default function TechnologySection() {
  return (
    <section 
      className="py-12 sm:py-16 px-4 bg-gray-50"
      aria-label="使用技術紹介セクション"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            使用技術
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            このサイトの作成に使用した最新のAI技術とツールをご紹介します。
            それぞれの技術がどのように活用されたかもご覧ください。
          </p>
        </div>

        {/* Technology Grid */}
        <div 
          className={`grid ${gridConfig.mobile} ${gridConfig.tablet} ${gridConfig.desktop} gap-4 sm:gap-6 lg:${gridConfig.gap} justify-items-center`}
          role="list"
          aria-label="使用技術一覧"
        >
          {siteConfig.technologies.map((technology) => (
            <div key={technology.id} role="listitem">
              <TechnologyCard technology={technology} />
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
            これらの技術を組み合わせることで、効率的で高品質なWebサイトの開発を実現しています。
            各技術の詳細については、公式サイトをご確認ください。
          </p>
        </div>
      </div>
    </section>
  );
}