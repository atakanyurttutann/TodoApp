import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRightIcon,
  LogoIcon,
  PinIcon,
  TodoListeIcon,
} from "@/commons/icons";
import { MainCheckbox } from "@/ui/input";
import { TodoItemEditDropDownButton } from "@/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodosAction,
  addTodoAction,
  updateTodoAction,
} from "@/redux/actions/todoActions";

const HomeView = () => {
  const [updateTodoInfo, setUpdateTodoInfo] = useState({});
  const todoInput = useRef();
  const dispatch = useDispatch();
  const { todosData } = useSelector((state) => state.todos);
  const getTodos = () => {
    dispatch(getTodosAction());
  };
  useEffect(() => {
    getTodos();
  }, []);
  useEffect(() => {
    todoInput.current.value = updateTodoInfo.id ? updateTodoInfo.title : "";
  }, [updateTodoInfo]);
  const addTodo = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    if (updateTodoInfo.id) {
      updateTodoInfo.title = title;
      await updateTodo(updateTodoInfo);
      setUpdateTodoInfo({});
      todoInput.current.value = "";
    } else {
      await dispatch(addTodoAction({ title }));
      getTodos();
    }
  };

  const updateTodo = async (data) => {
    await dispatch(updateTodoAction(data));
    getTodos();
  };

  return (
    <div className=" w-full mt-10">
      <div className=" flex justify-center items-center">
        <LogoIcon />
      </div>
      <div className=" flex justify-center items-center w-full  ">
        <div className="  mt-10 lg:w-6/12 max-[718px] w-full  bg-white  rounded-lg border  py-[16px] border-[#E5E5E5]  max-h-[800px] overflow-scroll h-[800px]">
          <div className=" flex justify-center items-center text-[#194591] font-bold border-b ">
            <div className=" border-b-4 border-b-orange-500 px-3 pb-[12px] text-[20px]">
              To Do List
            </div>
          </div>
          <div className="lg:px-[72px] px-10 py-5 w-full">
            <form onSubmit={addTodo}>
              <div className=" grid grid-cols-12 w-full gap-3">
                <div className="col-span-10">
                  <div className=" w-full relative">
                    <input
                      defaultValue={
                        updateTodoInfo.title ? updateTodoInfo.title : ""
                      }
                      ref={todoInput}
                      required
                      name="title"
                      placeholder="Add a task..."
                      className=" outline-none  w-full border border-[#999C9F] p-[6px] px-10"
                    />
                    <div className=" absolute flex h-full left-3  top-0 justify-center items-center">
                      <TodoListeIcon />
                    </div>
                    {updateTodoInfo.id && (
                      <div
                        onClick={() => setUpdateTodoInfo({})}
                        className=" cursor-pointer absolute flex h-full  right-3  top-0 justify-center items-center"
                      >
                        X
                      </div>
                    )}
                  </div>
                </div>
                <button
                  type="sumbit"
                  className=" col-span-2 w-full bg-[#21A7F9] text-white flex justify-center items-center rounded "
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </form>

            <div className=" pt-[30px] pb-[10px] border-b">
              {todosData.map((e, index) => {
                if (e.pinned) {
                  return (
                    <div
                      key={index}
                      className=" flex justify-between items-center mb-[30px] relative"
                    >
                      <MainCheckbox
                        checkClick={() =>
                          updateTodo({ id: e.id, checked: true })
                        }
                        notCheckClick={() =>
                          updateTodo({ id: e.id, checked: false })
                        }
                        ckeckInfo={e.checked}
                        text={e.title}
                      />
                      <TodoItemEditDropDownButton
                        setUpdateTodoInfo={setUpdateTodoInfo}
                        data={e}
                      />
                      <div
                        onClick={() => updateTodo({ id: e.id, pinned: false })}
                        className=" cursor-pointer absolute top-0 left-[-35px]  flex h-full justify-center items-center"
                      >
                        <PinIcon color={"#FF7964"} />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className=" mt-[46px]">
              {todosData.map((e, index) => {
                if (!e.pinned) {
                  return (
                    <div
                      key={index}
                      className=" flex justify-between items-center mb-[30px] relative"
                    >
                      <MainCheckbox
                        checkClick={() =>
                          updateTodo({ id: e.id, checked: true })
                        }
                        notCheckClick={() =>
                          updateTodo({ id: e.id, checked: false })
                        }
                        ckeckInfo={e.checked}
                        text={e.title}
                      />
                      <TodoItemEditDropDownButton
                        setUpdateTodoInfo={setUpdateTodoInfo}
                        data={e}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
