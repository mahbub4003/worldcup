export const editPlayerInfoTheMatch = async ({ data, id }) => {
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

export const editPlayerInfo = async ({ data, id }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/players?id=${id}`, {
      method: "PATCH",
      body: data,
    });
  } catch (e) {
    console.log(e.toString());
  }
};

export const getPlayerInfo = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/players`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.toString());
  }
};

export const editScheduleInfo = async ({ data, id }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/schedule?id=${id}`, {
      method: "PATCH",
      body: data,
    });
  } catch (e) {
    console.log(e.toString());
  }
};
