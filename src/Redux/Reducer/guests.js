export const INITIAL_STATETWO = {
    guests:{},
    dates:{}

  };
  
  export default function guestsReducer(state = INITIAL_STATETWO, action) {
    switch (action.type) {
      case "SET_GUESTS":
        return {
          ...state,
          guests: action.data,
        };
        case "SET_GUEST":
          return {
            ...state,
            dates: action.data,
          };
      default:
        return state;
    }
  }