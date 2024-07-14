export const getPictures = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}?page=1&per_page=80`,
      {
        headers: { Authorization: import.meta.env.VITE_API_KEY },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    console.log(data);

    return data.photos;
  } catch (err) {
    console.error("Failed to get response", err);
  }
};
