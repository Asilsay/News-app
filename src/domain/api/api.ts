import axios from 'axios';

const instance = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines/`,
});

export default {
  GetTop: (code: string) =>
    instance({
      method: 'GET',
      url: `?apiKey=${
        import.meta.env.VITE_NEWS_API
          ? import.meta.env.VITE_NEWS_API
          : process.env.VITE_NEWS_API
      }&country=us&category=${code}`,
    }),
};
