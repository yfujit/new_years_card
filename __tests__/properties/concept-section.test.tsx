import fc from 'fast-check';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConceptSection from '../../app/components/ConceptSection';

describe('ConceptSection Properties', () => {
  afterEach(() => {
    cleanup();
  });

  test('Property 2: コンセプトテーマの表示', () => {
    // Feature: new-year-2026, Property 2: コンセプトテーマの表示
    // **Validates: Requirements 1.2**
    
    fc.assert(fc.property(
      fc.constant(true), // Simple property that always runs
      () => {
        // Clean up before each property test iteration
        cleanup();
        
        // Render the ConceptSection component
        const { getByText } = render(<ConceptSection />);
        
        // Requirement 1.2: WHEN サイトが読み込まれた時 THEN THE New_Year_Site SHALL 2026年のコンセプトテーマを明確に表示する
        
        // Verify the concept theme "Specification" is prominently displayed
        const conceptThemeHeader = getByText('Specification');
        expect(conceptThemeHeader).toBeInTheDocument();
        
        // Verify the concept theme subtitle is displayed
        const conceptSubtitle = getByText('2026年のコンセプトテーマ');
        expect(conceptSubtitle).toBeInTheDocument();
        
        // Verify the Japanese concept explanation content
        const japaneseConceptExplanation = getByText(/とさせていただきました/);
        expect(japaneseConceptExplanation).toBeInTheDocument();
        
        // Verify concept explanation header is present
        const conceptExplanationHeader = getByText('コンセプト説明');
        expect(conceptExplanationHeader).toBeInTheDocument();
        
        // Verify the concept theme highlights are displayed
        const precisionHighlight = getByText('精密性');
        expect(precisionHighlight).toBeInTheDocument();
        
        const structureHighlight = getByText('構造化');
        expect(structureHighlight).toBeInTheDocument();
        
        const innovationHighlight = getByText('革新');
        expect(innovationHighlight).toBeInTheDocument();
        
        // Clean up after this iteration
        cleanup();
      }
    ), { numRuns: 100 });
  });

  test('Property 3: 日本語コンセプト説明の提供', () => {
    // Feature: new-year-2026, Property 3: 日本語コンセプト説明の提供
    // **Validates: Requirements 1.3**
    
    fc.assert(fc.property(
      fc.constant(true), // Simple property that always runs
      () => {
        // Clean up before each property test iteration
        cleanup();
        
        // Render the ConceptSection component
        const { getByText } = render(<ConceptSection />);
        
        // Requirement 1.3: WHEN 訪問者がサイトを閲覧した時 THEN THE New_Year_Site SHALL 日本語で新年の挨拶を提供する
        
        // Verify Japanese content is present
        const japaneseContent = getByText(/より具体的な目標を持ち、一歩ずつ着実に前進することを心がけてまいりたいと存じます/);
        expect(japaneseContent).toBeInTheDocument();
        
        // Verify both languages provide comprehensive explanations
        const japaneseDetailedExplanation = getByText(/明確な仕様は、曖昧さを排除し、確実な成果へと導く道筋となるものと考えております/);
        expect(japaneseDetailedExplanation).toBeInTheDocument();
        
        // Verify future-oriented message
        const japaneseFutureMessage = getByText(/理想の未来を一歩ずつ築いてまいりたいと思います/);
        expect(japaneseFutureMessage).toBeInTheDocument();
        
        // Clean up after this iteration
        cleanup();
      }
    ), { numRuns: 100 });
  });
});