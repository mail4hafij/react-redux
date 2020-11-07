// Each action must return a plain javascript object.

export const increment = (payload) => {
  return {
    type: 'INCREMENT',
    payload: payload
  };
};

export const decrement = (payload) => {
  return {
    type: 'DECREMENT',
    payload: payload
  };
};

export const setcounter = (payload) => {
  return {
    type: 'SETCOUNTER',
    payload: payload
  };
};
