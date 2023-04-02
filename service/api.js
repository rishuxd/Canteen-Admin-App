import axios from "axios";

const URL = "http://10.0.2.2:8000";

export const authenticateAdminLogin = async (data) => {
  try {
    return await axios.post(`${URL}/adminlogin`, data);
  } catch (error) {
    console.log("Error while calling Admin Login API");
  }
};

export const addItem = async (data) => {
  try {
    return await axios.post(`${URL}/addProducts`, data);
  } catch (error) {
    console.log("Error while calling Add Item API ", error);
  }
};
