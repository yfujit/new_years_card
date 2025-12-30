import fc from 'fast-check';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '../../app/components/HeroSection';
import ConceptSection from '../../app/components/ConceptSection';
import TechnologySection from '../../app/components/TechnologySection';
import TechnologyCard from '../../app/components/TechnologyCard';
import Footer from '../../app/components/Footer';
import { siteConfig } from '../../config/siteConfig';
import { Technology } from '../../types';

describe('Accessibility Attributes Properties', () => {
  afterEach(() => {
    cleanup();
  });

  test('Property 13: アクセシビリティ属性の完全性', () => {
    // Feature: new-year-2026, Property 13: アクセシビリティ属性の完全性
    // **Validates: Requirements 8.1, 8.2, 8.4**
    
    fc.assert(fc.property(
      fc.constantFrom('hero', 'concept', 'technology', 'footer'),
      (componentType: string) => {
        cleanup();
        
        let container: HTMLElement;
        
        // Requirements 8.1, 8.2, 8.4: Accessibility compliance for images, links, and keyboard navigation
        
        switch (componentType) {
          case 'hero':
            const heroResult = render(<HeroSection />);
            container = heroResult.container;
            
            // Requirement 8.1: WHEN 画像が表示された時 THEN THE New_Year_Site SHALL 全ての画像に適切なalt属性を提供する
            const heroImages = container.querySelectorAll('img');
            expect(heroImages.length).toBeGreaterThan(0);
            
            heroImages.forEach(img => {
              expect(img).toHaveAttribute('alt');
              const altText = img.getAttribute('alt');
              expect(altText).toBeTruthy();
              expect(altText!.length).toBeGreaterThan(0);
              // Alt text should be descriptive, not just the filename
              expect(altText).not.toMatch(/\.(jpg|jpeg|png|gif|webp)$/i);
            });
            
            // Verify section has proper aria-label
            const heroSection = container.querySelector('section');
            expect(heroSection).toHaveAttribute('aria-label');
            
            // Verify headings have proper aria-label where needed
            const yearHeading = container.querySelector('h1');
            expect(yearHeading).toHaveAttribute('aria-label');
            break;
            
          case 'concept':
            const conceptResult = render(<ConceptSection />);
            container = conceptResult.container;
            
            // Verify section has proper aria-label
            const conceptSection = container.querySelector('section');
            expect(conceptSection).toHaveAttribute('aria-label');
            
            // Verify articles are properly marked up
            const articles = container.querySelectorAll('article');
            expect(articles.length).toBeGreaterThan(0);
            
            // Verify decorative elements have aria-hidden
            const decorativeElements = container.querySelectorAll('[aria-hidden="true"]');
            expect(decorativeElements.length).toBeGreaterThan(0);
            
            // Verify emoji have proper role and aria-label
            const emojiElements = container.querySelectorAll('[role="img"]');
            emojiElements.forEach(emoji => {
              expect(emoji).toHaveAttribute('aria-label');
            });
            break;
            
          case 'technology':
            const techResult = render(<TechnologySection />);
            container = techResult.container;
            
            // Verify section has proper aria-label
            const techSection = container.querySelector('section');
            expect(techSection).toHaveAttribute('aria-label');
            
            // Verify grid has proper role and aria-label
            const techGrid = container.querySelector('[role="list"]');
            expect(techGrid).toBeInTheDocument();
            expect(techGrid).toHaveAttribute('aria-label');
            
            // Verify list items are properly marked
            const listItems = container.querySelectorAll('[role="listitem"]');
            expect(listItems.length).toBeGreaterThan(0);
            break;
            
          case 'footer':
            const footerResult = render(<Footer />);
            container = footerResult.container;
            
            // Verify footer has proper role and aria-label
            const footer = container.querySelector('footer');
            expect(footer).toHaveAttribute('role', 'contentinfo');
            expect(footer).toHaveAttribute('aria-label');
            
            // Verify emoji have proper role and aria-label
            const footerEmoji = container.querySelectorAll('[role="img"]');
            footerEmoji.forEach(emoji => {
              expect(emoji).toHaveAttribute('aria-label');
            });
            
            // Verify copyright symbol has proper aria-label
            const copyrightElement = container.querySelector('[aria-label="著作権"]');
            expect(copyrightElement).toBeInTheDocument();
            break;
        }
        
        cleanup();
      }
    ), { numRuns: 100 });
  });

  test('Property 13 Extended: Link Accessibility', () => {
    // Feature: new-year-2026, Property 13: アクセシビリティ属性の完全性 (Links)
    // **Validates: Requirements 8.2, 8.4**
    
    fc.assert(fc.property(
      fc.integer({ min: 0, max: siteConfig.technologies.length - 1 }),
      (techIndex: number) => {
        cleanup();
        
        // Requirement 8.2: WHEN リンクが表示された時 THEN THE New_Year_Site SHALL 全てのリンクに説明的なテキストを提供する
        // Requirement 8.4: WHEN キーボードナビゲーションが使用された時 THEN THE New_Year_Site SHALL キーボードのみでの操作を可能にする
        
        const technology = siteConfig.technologies[techIndex];
        const { container } = render(<TechnologyCard technology={technology} />);
        
        // Verify all links have proper accessibility attributes
        const links = container.querySelectorAll('a');
        expect(links.length).toBeGreaterThan(0);
        
        links.forEach(link => {
          // Verify link has proper aria-label
          expect(link).toHaveAttribute('aria-label');
          const ariaLabel = link.getAttribute('aria-label');
          expect(ariaLabel).toBeTruthy();
          expect(ariaLabel!.length).toBeGreaterThan(0);
          
          // Verify external links have proper attributes
          if (link.getAttribute('target') === '_blank') {
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
          }
          
          // Verify link is keyboard accessible (has focus styles)
          const linkClasses = link.className;
          expect(linkClasses).toMatch(/focus:/); // Has focus styles
          expect(linkClasses).toMatch(/focus:outline-none|focus:ring/); // Has proper focus management
          
          // Verify link has proper hover and focus states
          expect(linkClasses).toMatch(/hover:/); // Has hover styles
          expect(linkClasses).toMatch(/transition/); // Has smooth transitions
        });
        
        // Verify SVG icons in links have aria-hidden
        const svgIcons = container.querySelectorAll('a svg');
        svgIcons.forEach(svg => {
          expect(svg).toHaveAttribute('aria-hidden', 'true');
        });
        
        cleanup();
      }
    ), { numRuns: 100 });
  });

  test('Property 13 Extended: Form and Interactive Element Accessibility', () => {
    // Feature: new-year-2026, Property 13: アクセシビリティ属性の完全性 (Interactive Elements)
    // **Validates: Requirements 8.4**
    
    fc.assert(fc.property(
      fc.integer({ min: 0, max: siteConfig.technologies.length - 1 }),
      (techIndex: number) => {
        cleanup();
        
        // Requirement 8.4: WHEN キーボードナビゲーションが使用された時 THEN THE New_Year_Site SHALL キーボードのみでの操作を可能にする
        
        const technology = siteConfig.technologies[techIndex];
        const { container } = render(<TechnologyCard technology={technology} />);
        
        // Verify interactive elements are keyboard accessible
        const interactiveElements = container.querySelectorAll('button, a, [tabindex]');
        
        interactiveElements.forEach(element => {
          // Verify element is focusable (not tabindex="-1" unless intentional)
          const tabIndex = element.getAttribute('tabindex');
          if (tabIndex !== null) {
            expect(parseInt(tabIndex)).toBeGreaterThanOrEqual(0);
          }
          
          // Verify element has focus styles
          const elementClasses = element.className;
          if (elementClasses) {
            expect(elementClasses).toMatch(/focus:|focus-within:/); // Has focus styles
          }
        });
        
        cleanup();
      }
    ), { numRuns: 100 });
  });

  test('Property 13 Extended: Semantic HTML Structure', () => {
    // Feature: new-year-2026, Property 13: アクセシビリティ属性の完全性 (Semantic Structure)
    // **Validates: Requirements 8.1, 8.2, 8.4**
    
    fc.assert(fc.property(
      fc.constantFrom('hero', 'concept', 'technology', 'footer'),
      (componentType: string) => {
        cleanup();
        
        let container: HTMLElement;
        
        switch (componentType) {
          case 'hero':
            const heroResult = render(<HeroSection />);
            container = heroResult.container;
            
            // Verify proper heading hierarchy
            const h1Elements = container.querySelectorAll('h1');
            expect(h1Elements.length).toBe(1); // Only one h1 per section
            
            const h2Elements = container.querySelectorAll('h2');
            expect(h2Elements.length).toBeGreaterThan(0);
            
            // Verify section has proper semantic structure
            const section = container.querySelector('section');
            expect(section).toBeInTheDocument();
            break;
            
          case 'concept':
            const conceptResult = render(<ConceptSection />);
            container = conceptResult.container;
            
            // Verify articles are used for content sections
            const articles = container.querySelectorAll('article');
            expect(articles.length).toBeGreaterThan(0);
            
            // Verify proper heading structure within articles
            articles.forEach(article => {
              const headings = article.querySelectorAll('h1, h2, h3, h4, h5, h6');
              expect(headings.length).toBeGreaterThan(0);
            });
            break;
            
          case 'technology':
            const techResult = render(<TechnologySection />);
            container = techResult.container;
            
            // Verify section has proper semantic structure
            const techSection = container.querySelector('section');
            expect(techSection).toBeInTheDocument();
            
            // Verify heading hierarchy
            const techHeadings = container.querySelectorAll('h2');
            expect(techHeadings.length).toBeGreaterThan(0);
            break;
            
          case 'footer':
            const footerResult = render(<Footer />);
            container = footerResult.container;
            
            // Verify footer has proper semantic role
            const footer = container.querySelector('footer');
            expect(footer).toHaveAttribute('role', 'contentinfo');
            break;
        }
        
        cleanup();
      }
    ), { numRuns: 100 });
  });
});