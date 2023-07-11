export const getNews = (newsData) => {
  return {
    type: "GET_NEWS",
    payload: newsData,
  };
};
