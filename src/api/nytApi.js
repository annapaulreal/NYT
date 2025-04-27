import axios from 'axios';

const API_KEY = 'hdEq4dQGirIu7DuWafaQtGnti1ckEDOS'; 
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2';

export const fetchMostPopularArticles = async (period = 7) => {
  try {
    const response = await axios.get(`${BASE_URL}/viewed/${period}.json`, {
      params: {
        'api-key': API_KEY,
      },
    });
    return response.data.results; // returns the list of articles
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
