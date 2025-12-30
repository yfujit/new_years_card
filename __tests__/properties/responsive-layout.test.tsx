import fc from 'fast-check';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '../../app/components/HeroSection';
import ConceptSection from '../../app/components/ConceptSection';
import TechnologySection from '../../app/components/TechnologySection';
import Footer from '../../app/components/Footer';
import { siteConfig } from '../../config/siteConfig';

// Mock window.matchMedia for responsive testing
const mockMatchMedia = (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

// Mock different viewport sizes
const mockViewportSizes = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1024, height: 768 },
  large: { width: 1920, height: 1080 }
};

describe('Responsive Layout Properties', () => {
  beforeAll(() => {
    // Mock matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(mockMatchMedia),
    });
  });

  afterEach(() => {
    cleanup();
  });

  test('Property 8: レスポンシブレイアウトの適用', () => {
    // Feature: new-year-2026, Property 8: レスポンシブレイアウトの適用
    // **Validates: Requirements 3.1, 3.2, 3.3, 3.4**
    
    fc.assert(fc.property(
      fc.constantFrom('mobile', 'tablet', 'desktop', 'large'),
      (deviceType: keyof typeof mockViewportSizes) => {
        // Clean up before each property test iteration
        cleanup();
        
        // Mock viewport size for the current device type
        const viewport = mockViewportSizes[deviceType];
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: viewport.width,
        });
        Object.defineProperty(window, 'innerHeight', {
          writable: true,
          configurable: true,
          value: viewport.height,
        });

        // Requirements 3.1, 3.2, 3.3, 3.4: Responsive layout optimization for all device sizes
        
        // Test HeroSection responsive layout
        const { container: heroContainer } = render(<HeroSection />);
        
        // Verify HeroSection has responsive classes (check greeting section)
        const greetingSection = heroContainer.querySelectorAll('section')[1]; // Second section is the greeting
        expect(greetingSection).toBeInTheDocument();
        expect(greetingSection).toHaveClass('py-16', 'px-4'); // Base responsive padding
        
        // Verify year display has responsive text sizing
        const yearHeading = heroContainer.querySelector('h1');
        expect(yearHeading).toBeInTheDocument();
        expect(yearHeading?.className).toMatch(/text-4xl|text-6xl|text-8xl|text-9xl/); // Responsive text sizes
        
        // Verify concept theme has responsive text sizing
        const conceptText = heroContainer.querySelector('p');
        expect(conceptText).toBeInTheDocument();
        expect(conceptText?.className).toMatch(/text-xl|text-2xl|text-3xl|text-4xl|text-5xl/); // Responsive text sizes
        
        cleanup();
        
        // Test ConceptSection responsive layout
        const { container: conceptContainer } = render(<ConceptSection />);
        
        // Verify ConceptSection has responsive grid layout
        const conceptGrid = conceptContainer.querySelector('.grid');
        expect(conceptGrid).toBeInTheDocument();
        expect(conceptGrid?.className).toMatch(/lg:grid-cols-3/); // Responsive grid columns
        
        // Verify concept cards have responsive padding
        const conceptCards = conceptContainer.querySelectorAll('article');
        expect(conceptCards.length).toBeGreaterThan(0);
        conceptCards.forEach(card => {
          expect(card.className).toMatch(/p-6|p-8/); // Responsive padding
        });
        
        cleanup();
        
        // Test TechnologySection responsive layout
        const { container: techContainer } = render(<TechnologySection />);
        
        // Verify TechnologySection has responsive grid
        const techGrid = techContainer.querySelector('.grid');
        expect(techGrid).toBeInTheDocument();
        expect(techGrid?.className).toMatch(/grid-cols-1|sm:grid-cols-2|md:grid-cols-3|lg:grid-cols-4/); // Responsive grid
        
        cleanup();
        
        // Test Footer responsive layout
        const { container: footerContainer } = render(<Footer />);
        
        // Verify Footer has responsive padding
        const footer = footerContainer.querySelector('footer');
        expect(footer).toBeInTheDocument();
        expect(footer).toHaveClass('py-6', 'sm:py-8', 'px-4'); // Responsive padding
        
        // Verify footer text has responsive sizing
        const footerText = footerContainer.querySelector('p');
        expect(footerText).toBeInTheDocument();
        expect(footerText?.className).toMatch(/text-sm|md:text-base/); // Responsive text sizes
        
        cleanup();
      }
    ), { numRuns: 100 });
  });

  test('Property 8 Extended: Grid Layout Responsiveness', () => {
    // Feature: new-year-2026, Property 8: レスポンシブレイアウトの適用 (Extended Grid Testing)
    // **Validates: Requirements 3.1, 3.2, 3.3, 3.4**
    
    fc.assert(fc.property(
      fc.record({
        deviceType: fc.constantFrom('mobile', 'tablet', 'desktop', 'large'),
        componentType: fc.constantFrom('technology', 'concept')
      }),
      ({ deviceType, componentType }) => {
        cleanup();
        
        // Mock viewport for device type
        const viewport = mockViewportSizes[deviceType];
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: viewport.width,
        });

        let container: HTMLElement;
        
        // Test different components based on componentType
        switch (componentType) {
          case 'technology':
            const techResult = render(<TechnologySection />);
            container = techResult.container;
            
            // Verify technology grid adapts to screen size
            const techGrid = container.querySelector('.grid');
            expect(techGrid).toBeInTheDocument();
            
            // Check that grid classes include responsive breakpoints
            const techGridClasses = techGrid?.className || '';
            expect(techGridClasses).toMatch(/grid-cols-1/); // Mobile base
            expect(techGridClasses).toMatch(/sm:grid-cols-2/); // Tablet
            expect(techGridClasses).toMatch(/md:grid-cols-3|lg:grid-cols-4/); // Desktop
            break;
            
          case 'concept':
            const conceptResult = render(<ConceptSection />);
            container = conceptResult.container;
            
            // Verify concept section grid responsiveness
            const conceptGrid = container.querySelector('.grid');
            expect(conceptGrid).toBeInTheDocument();
            
            // Check responsive grid classes
            const conceptGridClasses = conceptGrid?.className || '';
            expect(conceptGridClasses).toMatch(/lg:grid-cols-3/); // Large screens use 3 columns
            break;
        }
        
        cleanup();
      }
    ), { numRuns: 100 });
  });

  test('Property 8 Text Responsiveness', () => {
    // Feature: new-year-2026, Property 8: レスポンシブレイアウトの適用 (Text Sizing)
    // **Validates: Requirements 3.1, 3.2, 3.3, 3.4**
    
    fc.assert(fc.property(
      fc.constantFrom('mobile', 'tablet', 'desktop', 'large'),
      (deviceType: keyof typeof mockViewportSizes) => {
        cleanup();
        
        // Mock viewport size
        const viewport = mockViewportSizes[deviceType];
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: viewport.width,
        });

        // Test HeroSection text responsiveness
        const { container } = render(<HeroSection />);
        
        // Verify main heading has responsive text classes
        const mainHeading = container.querySelector('h1');
        expect(mainHeading).toBeInTheDocument();
        
        const headingClasses = mainHeading?.className || '';
        // Should have multiple responsive text size classes
        const responsiveTextPattern = /text-\d+xl|sm:text-\d+xl|md:text-\d+xl|lg:text-\d+xl|xl:text-/;
        expect(headingClasses).toMatch(responsiveTextPattern);
        
        // Verify concept theme text has responsive sizing
        const conceptThemeText = container.querySelector('p');
        expect(conceptThemeText).toBeInTheDocument();
        
        const conceptClasses = conceptThemeText?.className || '';
        expect(conceptClasses).toMatch(/text-xl|text-2xl|text-3xl|text-4xl|text-5xl/);
        expect(conceptClasses).toMatch(/sm:|md:|lg:|xl:/); // Has responsive breakpoints
        
        // Verify greeting sections have responsive text (updated selector for new structure)
        const greetingSections = container.querySelectorAll('section[aria-label="2026年新年挨拶セクション"] div');
        expect(greetingSections.length).toBeGreaterThan(0);
        
        greetingSections.forEach(section => {
          const headings = section.querySelectorAll('h2');
          headings.forEach(heading => {
            const headingClasses = heading.className;
            expect(headingClasses).toMatch(/text-lg|text-xl|text-2xl|text-3xl/);
            expect(headingClasses).toMatch(/sm:|md:|lg:/); // Has responsive breakpoints
          });
        });
        
        cleanup();
      }
    ), { numRuns: 100 });
  });
});