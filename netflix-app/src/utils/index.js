const API_KEY = "92bfe9cf3f2f115d1f4bed8ed2b259f3";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMedias = async (type) => {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/${type}/day?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );
    const data = await res.json()
    return data && data.results
  } catch (error) {
    console.log(error);
  }
};
export const getTopratedMedias = async (type) => {
    try {
      const res = await fetch(
        `${BASE_URL}/${type}/top_rated?api_key=${API_KEY}&language=en-US`,
        {
          method: "GET",
        }
      );
      const data = await res.json()
      return data && data.results
    } catch (error) {
      console.log(error);
    }
  };
  export const getPopularMedias = async (type) => {
    try {
      const res = await fetch(
        `${BASE_URL}/${type}/popular?api_key=${API_KEY}&language=en-US`,
        {
          method: "GET",
        }
      );
      const data = await res.json()
      return data && data.results
    } catch (error) {
      console.log(error);
    }
  };
  export const getAllfavorites = async (uid, accountID) => {
    try {
      const res = await fetch(
        `/api/favorites/get-all-favorites?id=${uid}&accountID=${accountID}`,
        {
          method: "GET",
        }
      );
  
      const data = await res.json();
  
      return data && data.data;
    } catch (e) {
      console.log(e);
    }
  };