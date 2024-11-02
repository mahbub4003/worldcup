// update players information current game only..
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

// update players information in main profile data only...
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

// get players information in main profile data from server...
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

//update schedule data by ID in server
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
