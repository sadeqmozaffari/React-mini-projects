import { useDispatch, useSelector } from "react-redux";
import {
  getTodoAsync,
  addTodoAsync,
  removeTodoAsync,
  editTodoAsync,
} from "./services/todoService";
import { useEffect, useState } from "react";
import { simpleSelector } from "./redux/slices/todoSlice";
import { successMessage, errorMessage } from "./utils/notification.js";
const ToDoList = () => {
  const dispatch = useDispatch();
  const todoes = useSelector((state) => simpleSelector.selectAll(state.todos));
  const [newValue, setNewValue] = useState();
  const [editId, setEditId] = useState();
  const [editValue, setEditValue] = useState();
  const editHandler = (id, value) => {
    setEditId(id);
    setEditValue(value);
  };
  const EditSubmit = (id) => {
    dispatch(editTodoAsync({ id, changes: { task: editValue } })).then(() => {
      successMessage("ویرایش اطلاعات با موفقیت انجام شد");
      setEditId("");
      setEditValue("");
    });
  };
  const cancelSubmit = () => {
    setEditId("");
    setEditValue("");
  };
  const addNewTask = () => {
    dispatch(
      addTodoAsync({
        // id: String(Math.random()),
        task: newValue,
        isComplete: false,
      })
    )
      .unwrap()
      .then((data) => {
        // console.log(data);
        successMessage("درج اطلاعات با موفقیت انجام شد");
      })
      .catch((err) => {
        errorMessage(err);
      });
    setNewValue("");
  };
  const deleteTask = (id) => {
    dispatch(removeTodoAsync(id)).then(() => {
      successMessage("حذف اطلاعات با موفقیت انجام شد");
    });
  };
  useEffect(() => {
    dispatch(getTodoAsync());
  }, []);
  return (
    <div className="flex items-center justify-center w-screen h-screen font-medium">
      <div className="flex flex-grow items-center justify-center bg-gray-900 h-full">
        <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
          <div className="flex items-center mb-6">
            <svg
              className="h-8 w-8 text-indigo-500 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h4 className="font-semibold mr-3 text-lg">وظایف من</h4>
          </div>
          {todoes.map(({ id, task, isComplete }) => (
            <div className="flex gap-1" key={id}>
              <input
                className="hidden "
                type="checkbox"
                id={`id-${id}`}
                onChange={() => {}}
                defaultChecked={isComplete}
                // value={isComplete}
                readOnly
              />
              <label
                className="flex w-96  items-center h-10 px-2  rounded cursor-pointer hover:bg-gray-900"
                htmlFor={`id-${id}`}
              >
                <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {id === editId ? (
                  <input
                    className="form-control
                    mr-1
                  block
                  w-full
                  px-2
                  py-1
                  text-sm
                  font-normal
                  text-white-700
                  bg-gray-500 bg-clip-padding
                  border border-solid border-gray-300
                  m-0
                  focus:text-white-700 focus:bg-black focus:border-purple-50 focus:outline-none"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                ) : (
                  <span className="text-sm  mr-1">{task}</span>
                )}
              </label>
              {id === editId && (
                <div className="py-2 flex">
                  <button
                    onClick={() => EditSubmit(id)}
                    className="text-white rounded-full bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm px-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    <svg
                      className="h-4 w-4 text-white"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </button>
                  <button
                    onClick={cancelSubmit}
                    style={{ marginRight: "2px" }}
                    className="text-white rounded-full bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm px-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    <svg
                      className="h-4 w-4 text-white"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <line x1="18" y1="6" x2="6" y2="18" />{" "}
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              )}

              <div className="dropdown inline-block relative">
                <button className="text-white-700 cursor-pointer font-bold">
                  <span className="mr-1">...</span>
                </button>
                <ul className="dropdown-menu text-xs z-30 shadow-lg bg-gray-800 absolute hidden text-white-700 pt-1">
                  <li className="">
                    <button
                      onClick={() => deleteTask(id)}
                      className="rounded-t cursor-pointer py-2 px-4 block"
                    >
                      حذف
                    </button>
                  </li>
                  <li className="">
                    <button
                      onClick={() => editHandler(id, task)}
                      className="cursor-pointer  py-2 px-4 block"
                    >
                      ویرایش
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))}

          <div className="flex">
            <button
              className="  px-2  mt-2 text-sm font-medium rounded"
              onClick={() => addNewTask()}
            >
              <svg
                className="w-5 h-5 text-gray-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
            <input
              className="flex-grow h-8 mr-1 bg-transparent focus:outline-none font-medium"
              type="text"
              placeholder="add a new task"
              onChange={(e) => setNewValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
