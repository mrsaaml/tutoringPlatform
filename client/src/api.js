export const API_URL = 'http://localhost:3000';

export const authFetch = (url, options = {}) => {
  const token = localStorage.getItem('jwt');
  return fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
};