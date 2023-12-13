import axios from "axios";

const authToken = localStorage.getItem("token"); 



export const fetchData = (data) => ({
  type: "FETCH_DATA",
  payload: data,
});

export const adminDashboradAction = (input,fromdate,todate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://test.touchapp.in/admin/dashboard",
      {
        time_period: input,
        "from" : fromdate,
         "to" : todate

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
