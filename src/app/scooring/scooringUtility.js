// get players information current game only...
export const getData = async () => {
  const res = await fetch("http://localhost:3000/api/playingProfile", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

// get schedule data...
export const getSchedule = async () => {
  const res = await fetch("http://localhost:3000/api/schedule", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

// get all team data...
export const getTeam = async () => {
  const res = await fetch("http://localhost:3000/api/teamList", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
