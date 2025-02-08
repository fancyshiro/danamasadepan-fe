
/**
 * Get the token from local storage
 * @returns The token if found, null otherwise
 */
export const getToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem('token');
    return token ? token.replace(/^0\|/, '') : null;
  }
  return null;
};
