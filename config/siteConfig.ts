import { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  year: 2026,
  conceptTheme: "Specification", // 2026年のテーマ
  greeting: {
    japanese: "謹んで新春のお慶びを申し上げます。\n旧年中は格別のご厚情を賜り、誠にありがとうございました。\n本年も相変わらずのご指導ご鞭撻を賜りますよう、心よりお願い申し上げます。"
  },
  author: "Toshiyuki",
  technologies: [
    {
      id: "nextjs",
      name: "Next.js",
      description: "このWebサイトはNext.js 16+とApp Routerを使用してフロントエンドを構築しています。静的エクスポートとGitHub Pagesデプロイメントに最適化されています。",
      logoPath: "/nextjs_logo.png",
      officialUrl: "https://nextjs.org/",
      usage: "静的エクスポート機能を持つフロントエンドフレームワーク"
    },
    {
      id: "nijijourney",
      name: "nijijourney",
      description: "GIFや動画を含むすべてのビジュアルコンテンツは、アニメスタイルの画像生成に特化したnijijourneyを使用して作成されました。高品質なアニメーション風のビジュアルを生成できます。",
      logoPath: "/nijijourney_logo.jpg",
      officialUrl: "https://nijijourney.com/",
      usage: "アニメスタイルAI生成ビジュアルコンテンツ"
    },
    {
      id: "kiro",
      name: "Kiro",
      description: "このWebサイトのすべてのコードはKiroの支援を受けて作成されています。AI搭載のIDEとして、高度な推論能力により最適化されたアクセシブルなコードの作成を支援しました。特にSpec Coding機能により、要件定義から設計、実装まで体系的な開発プロセスを実現しています。",
      logoPath: "/kiro_logo.png",
      officialUrl: "https://kiro.dev",
      usage: "AI搭載IDEによるSpec Codingと最適化"
    },
    {
      id: "github-pages",
      name: "GitHub Pages",
      description: "このWebサイトはGitHub Pagesでホストされ、Next.jsの静的エクスポートを使用してGitHub Actionsで自動的にビルドおよびデプロイされています。",
      logoPath: "/github_pages_logo.png",
      officialUrl: "https://pages.github.com/",
      usage: "自動化されたCI/CDパイプラインを持つ静的サイトホスティング"
    }
  ]
};