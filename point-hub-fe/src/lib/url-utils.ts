'use client';

export function updateSearchParams(currentUrl: string, param: string, value: string) {
  // Create a URL object
  const urlObj = new URL(currentUrl);

  // Get the search parameters
  const searchParams = urlObj.searchParams;

  // Update or append the parameter
  searchParams.set(param, value); // Use `set` to update if exists or add if not

  // Return the updated URL as a string
  return urlObj.toString();
}

export function getCurrentSearchParamByKey(currentUrl: string, paramName: string) {
  const urlObj = new URL(currentUrl);
  const searchParams = urlObj.searchParams;
  return searchParams.get(paramName);
}
