import fc from 'fast-check';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import TechnologyCard from '../../app/components/TechnologyCard';
import { Technology } from '../../types';

describe('TechnologyCard Properties', () => {
  afterEach(() => {
    cleanup();
  });

  // Custom generator for valid technology data that avoids edge cases
  const technologyGenerator = fc.record({
    id: fc.string({ minLength: 3, maxLength: 20 }).filter(s => /^[a-zA-Z0-9_-]+$/.test(s)),
    name: fc.string({ minLength: 3, maxLength: 30 }).filter(s => /^[a-zA-Z0-9\s._-]+$/.test(s.trim()) && s.trim().length >= 3).map(s => s.trim()),
    description: fc.string({ minLength: 10, maxLength: 100 }).filter(s => /^[a-zA-Z0-9\s.,!?_-]+$/.test(s.trim()) && s.trim().length >= 10).map(s => s.trim()),
    logoPath: fc.string({ minLength: 3, maxLength: 20 }).filter(s => /^[a-zA-Z0-9_-]+$/.test(s)).map(s => `/${s}.png`),
    officialUrl: fc.webUrl(),
    usage: fc.string({ minLength: 5, maxLength: 50 }).filter(s => /^[a-zA-Z0-9\s.,!?_-]+$/.test(s.trim()) && s.trim().length >= 5).map(s => s.trim())
  });

  test('Property 6: 技術カード情報の完全性', () => {
    // Feature: new-year-2026, Property 6: 技術カード情報の完全性
    // **Validates: Requirements 2.2, 2.3**
    
    fc.assert(fc.property(
      technologyGenerator,
      (technology: Technology) => {
        // Clean up before each property test iteration
        cleanup();
        
        // Render the TechnologyCard component
        const { getByRole, getByAltText, container } = render(
          <TechnologyCard technology={technology} />
        );
        
        // Requirement 2.2: WHEN 技術カードが表示された時 THEN THE New_Year_Site SHALL 各技術のロゴ、名前、説明、公式リンクを含める
        
        // Verify technology logo is present with proper alt text
        const logo = getByAltText(`${technology.name}のロゴ`);
        expect(logo).toBeInTheDocument();
        
        // Verify technology name is displayed using more specific selector
        const nameElement = container.querySelector('h3');
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toHaveTextContent(technology.name);
        
        // Verify technology description is displayed using more specific selector
        const descriptionElement = container.querySelector('p.text-gray-600');
        expect(descriptionElement).toBeInTheDocument();
        expect(descriptionElement?.textContent?.trim()).toContain(technology.description.trim());
        
        // Verify official link is present and accessible
        const officialLink = getByRole('link');
        expect(officialLink).toBeInTheDocument();
        expect(officialLink).toHaveAttribute('href', technology.officialUrl);
        
        // Requirement 2.3: WHEN 技術説明が表示された時 THEN THE New_Year_Site SHALL その技術がサイト作成にどのように活用されたかを説明する
        
        // Verify usage information is displayed using more specific selector
        const usageElement = container.querySelector('p.text-blue-600');
        expect(usageElement).toBeInTheDocument();
        expect(usageElement?.textContent?.trim()).toBe(technology.usage.trim());
        
        // Clean up after this iteration
        cleanup();
      }
    ), { numRuns: 100 });
  });

  test('Property 7: 外部リンクの新タブ表示', () => {
    // Feature: new-year-2026, Property 7: 外部リンクの新タブ表示
    // **Validates: Requirements 2.4**
    
    fc.assert(fc.property(
      technologyGenerator,
      (technology: Technology) => {
        // Clean up before each property test iteration
        cleanup();
        
        // Render the TechnologyCard component
        const { getByRole } = render(
          <TechnologyCard technology={technology} />
        );
        
        // Requirement 2.4: WHEN 技術リンクがクリックされた時 THEN THE New_Year_Site SHALL 新しいタブで公式サイトを開く
        
        // Verify official link opens in new tab
        const officialLink = getByRole('link');
        expect(officialLink).toBeInTheDocument();
        expect(officialLink).toHaveAttribute('target', '_blank');
        expect(officialLink).toHaveAttribute('rel', 'noopener noreferrer');
        expect(officialLink).toHaveAttribute('href', technology.officialUrl);
        
        // Clean up after this iteration
        cleanup();
      }
    ), { numRuns: 100 });
  });
});