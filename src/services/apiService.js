const API_BASE_URL = 'https://win24-assignment.azurewebsites.net/api';

export const fetchTestimonials = async () => {
  const response = await fetch(`${API_BASE_URL}/testimonials`);
  if (!response.ok) {
    throw new Error('Failed to fetch testimonials');
  }
  return response.json();
};

export const fetchFAQ = async () => {
  const response = await fetch(`${API_BASE_URL}/faq`);
  if (!response.ok) {
    throw new Error('Failed to fetch FAQ');
  }
  return response.json();
};
