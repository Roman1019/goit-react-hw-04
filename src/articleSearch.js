import axios from "axios";

export const fetchArticles = async (search, currentPage) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: search,
      client_id: "Ewp05EUG89SyiK4LzjpwiPOBgXjxifFsUZCZAkufwuo",
      page: currentPage,
      per_page: 10,
    },
  });
  return response.data.results;
};

// export const fetchArticles = async (search) => {
//   //   const response = await axios.get(
//   //     `http://hn.algolia.com/api/v1/search?query=${topic}`
//   //   );

//   const response = await axios.get(
//     `http://hn.algolia.com/api/v1/search?query=`,
//     {
//       params: {
//         query: search,
//       },
//     }
//   );

//   return response.data.hits;
// };
