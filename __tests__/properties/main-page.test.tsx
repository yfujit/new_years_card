import fc from 'fast-check';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../app/page';
import React from 'react';

describe('Main Page Properties', () => {
  afterEach(() => {
    cleanup();
  });

  test('Property 10: React関数コンポーネントの使用', () => {
    // Feature: new-year-2026, Property 10: React関数コンポーネントの使用
    // **Validates: Requirements 5.4**
    
    fc.assert(fc.property(
      fc.constant(true), // Simple property that always runs
      () => {
        // Clean up before each property test iteration
        cleanup();
        
        // Requirement 5.4: WHEN コンポーネントが作成された時 THEN THE New_Year_Site SHALL React関数コンポーネントとして実装される
        
        // Verify that Home is a React functional component
        expect(typeof Home).toBe('function');
        
        // Verify that Home is not a class component
        expect(Home.prototype).toBeUndefined();
        
        // Verify that the component can be rendered without errors
        const { container } = render(<Home />);
        expect(container).toBeInTheDocument();
        
        // Verify that the component renders as a main element (semantic HTML)
        const mainElement = container.querySelector('main');
        expect(mainElement).toBeInTheDocument();
        
        // Verify that the main element has proper styling
        expect(mainElement).toHaveClass('min-h-screen', 'bg-white');
        
        // Verify that all major sections are rendered within the functional component
        // This ensures the functional component properly integrates all child components
        
        // Hero Section should be present
        const heroSection = container.querySelector('section');
        expect(heroSection).toBeInTheDocument();
        
        // Multiple sections should be present (Hero, Concept, Technology)
        const sections = container.querySelectorAll('section');
        expect(sections.length).toBeGreaterThanOrEqual(3);
        
        // Footer should be present
        const footer = container.querySelector('footer');
        expect(footer).toBeInTheDocument();
        
        // Verify that the component structure follows React functional component patterns
        // The component should return JSX directly (not through render method)
        const componentString = Home.toString();
        
        // Should not contain class component patterns
        expect(componentString).not.toContain('extends React.Component');
        expect(componentString).not.toContain('extends Component');
        expect(componentString).not.toContain('render()');
        expect(componentString).not.toContain('this.props');
        expect(componentString).not.toContain('this.state');
        
        // Should contain functional component patterns
        expect(componentString).toContain('return');
        
        // Clean up after this iteration
        cleanup();
      }
    ), { numRuns: 100 });
  });
});