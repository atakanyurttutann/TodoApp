import { DeleteIcon, PinIcon, UpdateIcon } from "@/commons/icons";
import {
  deleteTodoAction,
  getTodosAction,
  updateTodoAction,
} from "@/redux/actions/todoActions";
import { onClickOutside } from "@/utils/index";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const TodoItemEditDropDownButton = ({ data ,setUpdateTodoInfo }) => {
  const [active, setActive] = useState(false);
  const dropDown = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    onClickOutside(dropDown, () => {
      setActive(false);
    });
  }, []);
  const getTodos = () => {
    dispatch(getTodosAction());
  };
  const deleteTodo = async () => {
    await dispatch(deleteTodoAction(data.id));
    getTodos();
  };
  const updateTodo = async (data) => {
    await dispatch(updateTodoAction(data));
    getTodos();
  };
  const updateTitle = ()=>{
    setUpdateTodoInfo(data);
    setActive(false)
  }
  
  return (
    <div ref={dropDown} className=" relative">
      <div
        className=" text-lg cursor-pointer"
        onClick={() => setActive(!active)}
      >
        . . .
      </div>
      <div
        className={`absolute top-0 rounded w-[200px] h-auto z-50  p-3 bg-white   border translate-x-[-180px]  translate-y-[25px] transition-all  ${
          active ? "" : "  translate-y-[0px] scale-y-0 "
        }`}
      >
        {!data.pinned && (
          <div
            onClick={() => {
              updateTodo({ id: data.id, pinned: true });
            }}
            className=" cursor-pointer mb-2 flex items-center"
          >
            <div className="mr-2">
              <PinIcon width="16" height="16" />{" "}
            </div>
            Pin on the top
          </div>
        )}

        <div onClick={updateTitle} className=" cursor-pointer  mb-2 flex items-center">
          <div className=" mr-2">
            <UpdateIcon />
          </div>
          Update
        </div>
        <div onClick={deleteTodo} className=" cursor-pointer flex items-center">
          <div className="mr-2 ">
            <DeleteIcon />
          </div>
          Delete
        </div>
      </div>
    </div>
  );
};

export default TodoItemEditDropDownButton;
