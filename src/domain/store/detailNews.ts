import { create } from 'zustand';
import { NewsItem } from '../../data/types/newsType';

interface NewsTypeState {
  selectedNewsItem: NewsItem | null;
  setSelectedNewsItem: (newsItem: NewsItem) => void;
}

const useDetailNewsStore = create<NewsTypeState>((set) => ({
  selectedNewsItem: null,
  setSelectedNewsItem: (newsItem) => set({ selectedNewsItem: newsItem }),
}));

export default useDetailNewsStore;
