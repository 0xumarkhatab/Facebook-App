const InitialState = {
  user: null,
};

const reducer = (initialState = InitialState, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        initialState,
        user: action.payload,
      };
    default:
      return initialState;
  }
};

export { InitialState };
export default reducer;
