import axios from "axios";
import { GET_TODOS } from "./todoApi";
export const getTodosCall = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: GET_TODOS,
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};
export const getAdTodoCall = async (data) => {
  try {
    const response = await axios({
      method: "POST",
      url: GET_TODOS,
      data: data,
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};
export const getDeleteTodoCall = async (id) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: GET_TODOS + "/" + id,
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};
export const getUpdateTodoCall = async (data) => {
  try {
    const response = await axios({
      method: "PATCH",
      url: GET_TODOS + "/" + data.id,
      data:data
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};