import { gameLoop, MAKE_CHOICE, JUMP_TO } from "./actions";

export const INITIAL_STATE = {
  ending: false,
  ...gameLoop(),
};

export default (state = INITIAL_STATE, { type, ...action }) => {
  switch (type) {
    case MAKE_CHOICE:
      return {
        ...state,
        ...action,
      };
    case JUMP_TO:
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
};
