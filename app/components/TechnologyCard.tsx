import Image from 'next/image';
import { Technology } from '../../types';
import { imageConfig } from '../../config/imageConfig';
import { getAssetPath } from '../../lib/utils';

interface TechnologyCardProps {
  technology: Technology;
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform w-full max-w-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
        {/* Technology Logo */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 relative flex-shrink-0">
          <Image
            src={getAssetPath(technology.logoPath)}
            alt={`${technology.name}のロゴ`}
            fill
            className="object-contain"
            sizes={imageConfig.sizes.logo}
            priority={imageConfig.priority.logo}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        
        {/* Technology Name */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
          {technology.name}
        </h3>
        
        {/* Technology Description */}
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
          {technology.description}
        </p>
        
        {/* Usage Information */}
        <p className="text-blue-600 text-xs sm:text-sm font-medium italic">
          {technology.usage}
        </p>
        
        {/* Official Link */}
        <a
          href={technology.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
          aria-label={`${technology.name}の公式サイトを新しいタブで開く`}
        >
          <span>公式サイト</span>
          <svg
            className="ml-2 w-3 h-3 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}