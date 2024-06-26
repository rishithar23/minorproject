import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.100:5000/api', // Use your local IP address
});

// User registration function
export const register = async (email, password) => {
  try {
    const response = await api.post('/users/register', { email, password });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response || error.message);
    throw error;
  }
};

// User login function
export const login = async (email, password) => {
  try {
    const response = await api.post('/users/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response || error.message);
    throw error;
  }
};

// Fetch grades function
export const getGrades = async () => {
  try {
    const response = await api.get('/grades');
    return response.data;
  } catch (error) {
    console.error('Error fetching grades:', error.response || error.message);
    throw error;
  }
};

// Fetch announcements function
export const getAnnouncements = async () => {
  try {
    const response = await api.get('/announcements');
    return response.data;
  } catch (error) {
    console.error('Error fetching announcements:', error.response || error.message);
    throw error;
  }
};

export default api;
