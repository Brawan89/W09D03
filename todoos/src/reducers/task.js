const initialState = {
  tasks: [],
  // isDel: false,
};

const Task = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET":
      return payload;

    case "POST":
      const { task } = payload;
    const tasks = [ ...state.tasks , task ]
      return { tasks };

    case "PUT":
      return { tasks };

    case "DELETE":
      return { tasks };

    default:
      return state;
  }
};

export default Task;

export const getTasks = (data) => {
  return {
    type: "GET",
    payload: data,
  };
};

export const addTask = (data) => {
  return {
    type: "POST",
    payload: data,
  };
};
export const editTask = (data) => {
  return {
    type: "PUT",
    payload: data,
  };
};

export const delTask = (data) => {
  return {
    type: "DELETE",
    payload: data,
  };
};
