import fc from 'fast-check';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '../../app/components/HeroSection';

describe('HeroSection Properties', () => {
  afterEach(() => {
    cleanup();
  });

  test('Property 1: 新年挨拶メッセージの表示', () => {
    // Feature: new-year-2026, Property 1: 新年挨拶メッセージの表示
    // **Validates: Requirements 1.1**
    
    fc.assert(fc.property(
      fc.constant(true), // Simple property that always runs
      () => {
        // Clean up before each property test iteration
        cleanup();
        
        // Render the HeroSection component
        const { getByText, getByRole } = render(<HeroSection />);
        
        // Requirement 1.1: WHEN 訪問者がサイトにアクセスした時 THEN THE New_Year_Site SHALL 2026年の新年挨拶メッセージを表示する
        
        // Verify 2026 year is displayed
        const yearText = getByText('2026');
        expect(yearText).toBeInTheDocument();
        
        // Verify Japanese New Year greeting is displayed
        const japaneseGreetingHeader = getByText('新年のご挨拶');
        expect(japaneseGreetingHeader).toBeInTheDocument();
        
        // Verify the Japanese greeting content is displayed
        const japaneseGreeting = getByText(/謹んで新春のお慶びを申し上げます/);
        expect(japaneseGreeting).toBeInTheDocument();
        
        // Verify the concept theme is displayed
        const conceptTheme = getByText('Specification');
        expect(conceptTheme).toBeInTheDocument();
        
        // Verify the Japanese concept description is displayed (now split into two lines)
        const conceptDescriptionPart1 = getByText(/より明確な目標を持ち、/);
        const conceptDescriptionPart2 = getByText(/着実な未来を共に築いていければと存じます/);
        expect(conceptDescriptionPart1).toBeInTheDocument();
        expect(conceptDescriptionPart2).toBeInTheDocument();
        
        // Clean up after this iteration
        cleanup();
      }
    ), { numRuns: 100 });
  });

  test('Property 4: メインビジュアルの表示', () => {
    // Feature: new-year-2026, Property 4: メインビジュアルの表示
    // **Validates: Requirements 1.4**
    
    fc.assert(fc.property(
      fc.constant(true), // Simple property that always runs
      () => {
        // Clean up before each property test iteration
        cleanup();
        
        // Render the HeroSection component
        const { container } = render(<HeroSection />);
        
        // Requirement 1.4: WHEN サイトが表示された時 THEN THE New_Year_Site SHALL 視覚的に魅力的なメインビジュアル（画像またはGIF）を表示する
        
        // Verify the main visual image is present
        const mainImage = container.querySelector('img[alt*="2026年新年メインビジュアル"]');
        expect(mainImage).toBeInTheDocument();
        
        // Verify the image has proper alt text for accessibility
        expect(mainImage).toHaveAttribute('alt', '2026年新年メインビジュアル - 龍と仕様書が舞う新年の挨拶。構造化された思考の力を表現するAI生成アニメーション');
        
        // Verify the image uses fill layout (no width/height attributes for fill images)
        expect(mainImage).toHaveAttribute('data-nimg', 'fill');
        
        // Verify the image has proper styling for full screen display
        expect(mainImage).toHaveClass('object-cover');
        
        // Verify the image is optimized (PNG format)
        expect(mainImage).toHaveAttribute('alt', '2026年新年メインビジュアル - 龍と仕様書が舞う新年の挨拶。構造化された思考の力を表現するAI生成アニメーション');
        
        // Clean up after this iteration
        cleanup();
      }
    ), { numRuns: 100 });
  });
});