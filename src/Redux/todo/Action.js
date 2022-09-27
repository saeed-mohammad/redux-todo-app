export const TodoAction = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
  CLEAR_TODO: "clear-todo",
};

export const addTodo = (data) => {
  return {
    type: TodoAction.ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const deleteTodo = (id) => {
  return {
    type: TodoAction.DELETE_TODO,
    id,
  };
};
export const clearTodo = () => {
  return {
    type: TodoAction.CLEAR_TODO,
  };
};
