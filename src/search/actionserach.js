import axios from "axios";

const authToken = localStorage.getItem("token"); 

export const fetchData = (data) => ({
  type: "FETCH_DATA",
  payload: data,
});

export const adminUserAction = (input) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://test.touchapp.in/admin/search?limit=1000&offset=0",
      {
        searchKeyword: input
      },
      {
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    console.log(response);
    dispatch({
      type: "POST_DATA",
      payload: response.data.data,
    });
  } catch (error) {
    console.error(error);
  }
};
