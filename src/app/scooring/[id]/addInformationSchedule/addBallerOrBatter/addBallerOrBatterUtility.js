// update functionality player's running playing data

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

// get schedules data functionality......
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
// get functionality all player's running playing data
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
