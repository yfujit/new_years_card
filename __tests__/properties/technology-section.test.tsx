import fc from 'fast-check';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import TechnologySection from '../../app/components/TechnologySection';

describe('TechnologySection Properties', () => {
  afterEach(() => {
    cleanup();
  });

  test('Property 5: AI技術一覧の表示', () => {
    // Feature: new-year-2026, Property 5: AI技術一覧の表示
    // **Validates: Requirements 2.1**
    
    fc.assert(fc.property(
      fc.constant(true), // Simple property that always runs
      () => {
        // Clean up before each property test iteration
        cleanup();
        
        // Render the TechnologySection component
        const { getByText, getAllByText } = render(<TechnologySection />);
        
        // Requirement 2.1: WHEN 訪問者が技術セクションを閲覧した時 THEN THE New_Year_Site SHALL 使用したAI技術の一覧を表示する
        
        // Verify section header is displayed
        const sectionHeader = getByText('使用技術');
        expect(sectionHeader).toBeInTheDocument();
        
        // Verify section description is displayed
        const sectionDescription = getByText(/このサイトの作成に使用した最新のAI技術とツールをご紹介します/);
        expect(sectionDescription).toBeInTheDocument();
        
        // Verify all configured technologies are displayed
        // Next.js technology
        const nextjsName = getByText('Next.js');
        expect(nextjsName).toBeInTheDocument();
        
        const nextjsDescription = getByText(/このWebサイトはNext\.js 16\+とApp Routerを使用してフロントエンドを構築しています/);
        expect(nextjsDescription).toBeInTheDocument();
        
        // nijijourney technology
        const nijijourneyName = getByText('nijijourney');
        expect(nijijourneyName).toBeInTheDocument();
        
        const nijijourneyDescription = getByText(/GIFや動画を含むすべてのビジュアルコンテンツは、アニメスタイルの画像生成に特化したnijijourneyを使用して作成されました/);
        expect(nijijourneyDescription).toBeInTheDocument();
        
        // Kiro technology
        const kiroName = getByText('Kiro');
        expect(kiroName).toBeInTheDocument();
        
        const kiroDescription = getByText(/このWebサイトのすべてのコードはKiroの支援を受けて作成されています.*Spec Coding機能により、要件定義から設計、実装まで体系的な開発プロセスを実現しています/);
        expect(kiroDescription).toBeInTheDocument();
        
        // GitHub Pages technology
        const githubPagesName = getByText('GitHub Pages');
        expect(githubPagesName).toBeInTheDocument();
        
        const githubPagesDescription = getByText(/このWebサイトはGitHub Pagesでホストされ、Next\.jsの静的エクスポートを使用してGitHub Actionsで自動的にビルドおよびデプロイされています/);
        expect(githubPagesDescription).toBeInTheDocument();
        
        // Verify all official site links are present
        const officialSiteLinks = getAllByText('公式サイト');
        expect(officialSiteLinks).toHaveLength(4); // Should have 4 technologies
        
        // Verify additional information section is displayed
        const additionalInfo = getByText(/これらの技術を組み合わせることで、効率的で高品質なWebサイトの開発を実現しています/);
        expect(additionalInfo).toBeInTheDocument();
        
        // Clean up after this iteration
        cleanup();
      }
    ), { numRuns: 100 });
  });
});