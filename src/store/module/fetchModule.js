export const SET_SHOULD_FETCH = "fetchModule/SET_SHOULD_FETCH";

export const setShouldFetch = (shouldFetch) => ({
  type: SET_SHOULD_FETCH,
  payload: shouldFetch,
});

const initialState = {
  shouldFetch: true,
};

const fetchModule = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOULD_FETCH:
      return {
        ...state,
        shouldFetch: action.payload,
      };
    default:
      return state;
  }
};

export default fetchModule;
