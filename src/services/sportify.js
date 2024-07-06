import axios from 'axios';

const searchMusic = async (query) => {
  const { data } = await axios.get(`/api/spotify/search?query=${query}`);
  return data;
};

export default {
  searchMusic,
};