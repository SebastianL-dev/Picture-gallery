export const getPictures = async (page: number) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}curated?page=${page}&per_page=80`,
      {
        headers: { Authorization: import.meta.env.VITE_API_KEY },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    console.log(data);

    return data;
  } catch (err) {
    console.error("Failed to get response", err);
  }
};

export const getPicture = async (id: number) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}photos/${id}`, {
      headers: { Authorization: import.meta.env.VITE_API_KEY },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    console.log(data);

    return data;
  } catch (err) {
    console.error("Failed to get response", err);
  }
};
