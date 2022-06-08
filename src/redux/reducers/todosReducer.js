import { SET_TODOS } from "@/redux/types";

const initialProps = {
  todosData: [],
};
export const todosReducers = (state = initialProps, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todosData: action.data,
      };

    default:
      return {
        ...state,
      };
  }
};
