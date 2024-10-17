export const postData = async ({ data, id }) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/playingProfile?id=${id}`,
      {
        method: "PATCH",
        body: data,
      }
    );
  } catch (e) {
    console.log(e.toString());
  }
};

export const getSchedule = async () => {
  async function getDta() {
    const res = await fetch("http://localhost:3000/api/schedule", {
      cache: "no-store",
    });
    const data = await res.json();
    if (!data) {
      throw new Error("FeaturedProject Api Error");
    }
    return data;
  }
  return await getDta();
};

export const getPlayingProfile = async () => {
  async function getDta() {
    const res = await fetch("http://localhost:3000/api/playingProfile", {
      cache: "no-store",
    });
    const data = await res.json();
    if (!data) {
      throw new Error("FeaturedProject Api Error");
    }
    return data;
  }
  return await getDta();
};
