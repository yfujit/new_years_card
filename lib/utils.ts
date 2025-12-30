// Utility function to get the correct asset path with basePath
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/new_years_card' : '';
  return `${basePath}${path}`;
}