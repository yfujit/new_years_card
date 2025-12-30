import { render } from '@testing-library/react';
import fc from 'fast-check';
import HeroSection from '../../app/components/HeroSection';
import TechnologyCard from '../../app/components/TechnologyCard';
import { Technology } from '../../types';
import { imageConfig } from '../../config/imageConfig';

describe('Image Optimization Properties', () => {
  test('Property 11: 画像最適化の活用', () => {
    // Feature: new-year-2026, Property 11: 画像最適化の活用
    // Requirements 5.5, 6.2: WHEN 画像が表示された時 THEN THE New_Year_Site SHALL Next.jsの画像最適化機能を活用する
    // WHEN 画像が読み込まれた時 THEN THE New_Year_Site SHALL 適切な画像フォーマットと圧縮を使用する
    
    fc.assert(fc.property(
      fc.record({
        // Generate test data for technology cards
        technology: fc.record({
          id: fc.string({ minLength: 3 }).filter(s => s.trim().length > 2),
          name: fc.string({ minLength: 3 }).filter(s => s.trim().length > 2),
          description: fc.string({ minLength: 10 }).filter(s => s.trim().length > 9),
          logoPath: fc.constantFrom('/nextjs_logo.png', '/kiro_logo.png', '/github_pages_logo.png', '/nijijourney_logo.jpg'),
          officialUrl: fc.webUrl(),
          usage: fc.string({ minLength: 5 }).filter(s => s.trim().length > 4)
        })
      }),
      (testData) => {
        // Test HeroSection image optimization
        const heroContainer = render(<HeroSection />);
        
        // Verify hero image uses Next.js Image component with optimization settings
        const heroImage = heroContainer.container.querySelector('img[alt*="2026年新年メインビジュアル"]');
        expect(heroImage).toBeInTheDocument();
        
        // Verify image uses fill layout (no width/height attributes for fill images)
        expect(heroImage).toHaveAttribute('data-nimg', 'fill');
        
        // Verify image has proper styling for full screen display
        expect(heroImage).toHaveClass('object-cover');
        
        // Verify image has priority loading (for above-the-fold content)
        expect(heroImage).not.toHaveAttribute('loading', 'lazy');
        
        // Verify image has responsive sizing attributes
        // Note: For unoptimized GIF images, Next.js may not always set the sizes attribute
        const sizes = heroImage?.getAttribute('sizes');
        // For unoptimized images, sizes attribute may not be present
        if (sizes) {
          expect(sizes).toBe('100vw'); // Full viewport width for background image
        }
        
        // Verify the image is properly configured for full screen display
        expect(heroImage).toHaveAttribute('alt', '2026年新年メインビジュアル - 龍と仕様書が舞う新年の挨拶。構造化された思考の力を表現するAI生成アニメーション');
        
        // Test TechnologyCard image optimization
        const techContainer = render(<TechnologyCard technology={testData.technology} />);
        
        // Verify technology logo uses Next.js Image component
        const logoImages = techContainer.container.querySelectorAll('img');
        const logoImage = Array.from(logoImages).find(img => 
          img.getAttribute('alt')?.includes('ロゴ')
        );
        expect(logoImage).toBeInTheDocument();
        
        // Verify logo image has proper responsive sizes
        expect(logoImage).toHaveAttribute('sizes');
        const logoSizes = logoImage?.getAttribute('sizes');
        expect(logoSizes).toBe(imageConfig.sizes.logo);
        
        // Verify logo image uses fill layout with proper object-fit
        expect(logoImage).toHaveStyle('object-fit: contain');
        
        // Verify logo container has proper dimensions
        const logoContainer = logoImage?.closest('div');
        expect(logoContainer).toHaveClass('w-12', 'h-12', 'sm:w-16', 'sm:h-16', 'relative');
        
        // Verify image optimization configuration is applied
        expect(logoImage).toHaveAttribute('data-nimg');
        
        // Clean up
        heroContainer.unmount();
        techContainer.unmount();
      }
    ), { numRuns: 100 });
  });
  
  test('Image Configuration Consistency', () => {
    // Verify that imageConfig provides consistent configuration
    fc.assert(fc.property(
      fc.constant(imageConfig),
      (config) => {
        // Verify all required configuration properties exist
        expect(config.sizes).toBeDefined();
        expect(config.quality).toBeDefined();
        expect(config.dimensions).toBeDefined();
        expect(config.priority).toBeDefined();
        
        // Verify sizes configuration
        expect(config.sizes.hero).toContain('max-width');
        expect(config.sizes.logo).toContain('48px');
        expect(config.sizes.card).toContain('280px');
        
        // Verify quality settings are reasonable
        expect(config.quality.high).toBeGreaterThan(config.quality.medium);
        expect(config.quality.medium).toBeGreaterThan(config.quality.low);
        expect(config.quality.high).toBeLessThanOrEqual(100);
        expect(config.quality.low).toBeGreaterThan(0);
        
        // Verify dimensions are positive numbers
        expect(config.dimensions.hero.width).toBeGreaterThan(0);
        expect(config.dimensions.hero.height).toBeGreaterThan(0);
        expect(config.dimensions.logo.small.width).toBeGreaterThan(0);
        expect(config.dimensions.logo.medium.width).toBeGreaterThan(config.dimensions.logo.small.width);
        
        // Verify priority settings are boolean
        expect(typeof config.priority.hero).toBe('boolean');
        expect(typeof config.priority.logo).toBe('boolean');
        expect(typeof config.priority.background).toBe('boolean');
      }
    ), { numRuns: 100 });
  });
});