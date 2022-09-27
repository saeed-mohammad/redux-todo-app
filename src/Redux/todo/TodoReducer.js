import { TodoAction } from "./Action";

const initial = {
  list: [],
};
const TodoReducer = (state = initial, action) => {
  switch (action.type) {
    case TodoAction.ADD_TODO:
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case TodoAction.DELETE_TODO:
      const newList = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case TodoAction.CLEAR_TODO:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export default TodoReducer;
