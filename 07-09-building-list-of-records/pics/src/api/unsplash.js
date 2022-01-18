import axios from 'axios';

// Configuration for unsplash api
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
  },
  params: { per_page: 30 }
});