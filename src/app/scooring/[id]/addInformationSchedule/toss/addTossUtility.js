// update schedule data by id....

export const postData = async ({ data, id }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/schedule?id=${id}`, {
      method: "PATCH",
      body: data,
    });
  } catch (e) {
    console.log(e.toString());
  }
};

// get schedule data from surver..
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
