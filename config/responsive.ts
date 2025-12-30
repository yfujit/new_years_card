import { ResponsiveBreakpoints } from '../types';

export const breakpoints: ResponsiveBreakpoints = {
  mobile: "text-sm sm:text-base",
  tablet: "md:text-lg lg:text-xl",
  desktop: "lg:text-xl xl:text-2xl",
  large: "xl:text-2xl 2xl:text-3xl"
};

export const gridConfig = {
  mobile: "grid-cols-1",
  tablet: "sm:grid-cols-2",
  desktop: "md:grid-cols-3 lg:grid-cols-4",
  gap: "gap-8"
};

// Enhanced responsive utilities
export const spacing = {
  mobile: {
    padding: "p-4",
    margin: "m-4",
    gap: "gap-4"
  },
  tablet: {
    padding: "sm:p-6",
    margin: "sm:m-6", 
    gap: "sm:gap-6"
  },
  desktop: {
    padding: "lg:p-8",
    margin: "lg:m-8",
    gap: "lg:gap-8"
  }
};

export const typography = {
  heading: {
    h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
    h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    h3: "text-xl sm:text-2xl md:text-3xl",
    h4: "text-lg sm:text-xl md:text-2xl"
  },
  body: {
    large: "text-base sm:text-lg md:text-xl",
    medium: "text-sm sm:text-base md:text-lg",
    small: "text-xs sm:text-sm md:text-base"
  }
};