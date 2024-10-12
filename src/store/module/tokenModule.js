const SET_TOKEN = "tokenModule/SET_TOKEN";
const CLEAR_TOKEN = "tokenModule/CLEAR_TOKEN";

export const setToken = (token, userId) => ({
  type: SET_TOKEN,
  payload: { token, userId },
});

export const clearToken = () => ({
  type: CLEAR_TOKEN,
});

const initialState = {
  token: null,
  userId: null,
};

export default function tokenModule(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case CLEAR_TOKEN:
      return {
        ...state,
        token: null,
        userId: null,
      };
    default:
      return state;
  }
}
