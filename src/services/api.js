const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export async function fetchCars(filters = {}) {
  const params = new URLSearchParams(filters).toString();
  const response = await fetch(`${API_BASE_URL}/cars${params ? `?${params}` : ''}`);
  if (!response.ok) throw new Error('Failed to fetch cars');
  return response.json();
}
