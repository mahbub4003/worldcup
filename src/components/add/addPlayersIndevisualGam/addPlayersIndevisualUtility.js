// add players functionality for current game as playing eleven...
export const addPlayersIndevisualGameInfo = async (data) => {
  try {
    const res = await fetch("http://localhost:3000/api/playingProfile", {
      method: "POST",
      body: data,
    });
  } catch (e) {
    console.log(e.toString());
  }
};

//  get current game's players information functionality bellow..
export const getPlayersIndevisualGameInfo = async () => {
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

// get schedule data functionality bellow...
export const getschedule = async () => {
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

// get all team's data functionality bellow...
export const getTeams = async () => {
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

// get all player's data functionality bellow...
export const getPlayers = async () => {
  async function getDta() {
    const res = await fetch("http://localhost:3000/api/players", {
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
