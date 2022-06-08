import {
  getTodosCall,
  getAdTodoCall,
  getDeleteTodoCall,
  getUpdateTodoCall
} from "@/api/todo/todoApiCall";
import { SET_TODOS } from "@/redux/types";

export const getTodosAction = () => {
  return async (dispatch) => {
    try {
      const response = await getTodosCall();
      dispatch({ type: SET_TODOS, data: response });
    } catch (error) {
      return error;
    }
  };
};

export const addTodoAction = (data) => {
  return async (dispatch) => {
    try {
      const response = await getAdTodoCall(data);
      return response;
    } catch (error) {
      return error;
    }
  };
};
export const deleteTodoAction = (id) => {
  return async (dispatch) => {
    try {
      const response = await getDeleteTodoCall(id);
      return response;
    } catch (error) {
      return error;
    }
  };
};
export const updateTodoAction = (data) => {
  return async (dispatch) => {
    try {
      const response = await getUpdateTodoCall(data);
      return response;
    } catch (error) {
      return error;
    }
  };
};
