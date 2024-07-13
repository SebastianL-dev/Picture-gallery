import axios from "axios";

const API_URL = "https://api.pexels.com/v1/curated";
const API_KEY = "tb1EeTMtJf65pU4XDA7F3WG64hJUviUnP2R552YASyqY0PNPZWbPZnbo";

export const getPictures = async () => {
  try {
    const res = await axios.get(API_URL, {
      headers: { Authorization: API_KEY },
      params: { per_page: 868 },
    });

    console.log(res);

    return res.data.photos;
  } catch (err) {
    console.error("Failed to get response");
  }
};
