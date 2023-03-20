export const postReducer = (state, action) => {
  switch (action.type) {
    case "SET_CHOICE":
      return action.payload;
    case "INIT_CHOICE":
      return [null, null];
    case "SET_ALERT":
      return action.payload;
    case "SET_WINCOUNT":
      return state + 1;
    case "SET_ATTACKER":
      return action.payload;
    case "SET_HOVER":
      return action.payload;
  }
};
