// Type definitions for the 2026 New Year site

export interface Technology {
  id: string;
  name: string;
  description: string;
  logoPath: string;
  officialUrl: string;
  usage: string; // サイト作成での活用方法
}

export interface SiteConfig {
  year: number;
  conceptTheme: string;
  greeting: {
    japanese: string;
  };
  author: string;
  technologies: Technology[];
}

export interface ResponsiveBreakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
  large: string;
}