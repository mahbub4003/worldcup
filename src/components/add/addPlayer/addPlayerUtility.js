export const addPlayerInfo = async (data) => {
  try {
    const res = await fetch("http://localhost:3000/api/players", {
      method: "POST",
      body: data,
    });
  } catch (e) {
    console.log(e.toString());
  }
};

export const getTeam = async () => {
  async function getDta() {
    const res = await fetch("http://localhost:3000/api/teamList", {
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
