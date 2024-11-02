// get all team data functionality bellow..
const postData = async (data) => {
  try {
    const res = await fetch("http://localhost:3000/api/teamList", {
      method: "POST",
      body: data,
    });
  } catch (e) {
    console.log(e.toString());
  }
};

export default postData;
