// Image optimization configuration for the New Year 2026 site
// This configuration ensures optimal image loading and responsive behavior

export const imageConfig = {
  // Common image sizes for responsive design
  sizes: {
    hero: "(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px",
    logo: "(max-width: 640px) 48px, 64px",
    card: "(max-width: 640px) 280px, (max-width: 768px) 320px, 400px",
  },
  
  // Image quality settings
  quality: {
    high: 90,
    medium: 75,
    low: 60,
  },
  
  // Common image dimensions
  dimensions: {
    hero: {
      width: 800,
      height: 600,
    },
    logo: {
      small: { width: 48, height: 48 },
      medium: { width: 64, height: 64 },
    },
  },
  
  // Image loading priorities
  priority: {
    hero: true,
    logo: false,
    background: false,
  },
} as const;

export type ImageConfig = typeof imageConfig;