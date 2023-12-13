import axios from "axios";

const authToken = localStorage.getItem("token");

export const fetchReports = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://test.touchapp.in/admin/reports',
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    const reportdata = response.data;

    console.log(reportdata.data);

    dispatch({
      type: 'FETCH_DATA',
      payload: reportdata.data,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
