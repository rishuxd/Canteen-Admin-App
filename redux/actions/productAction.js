// action is used to call API just like api.js in services
import * as actionTypes from "../constants/productConstant";
import axios from "axios";

const URL = "http://10.0.2.2:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/getOrders`);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
  }
};
