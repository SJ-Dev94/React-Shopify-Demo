export const updateWindowSize = width => dispatch => {
  dispatch({ type: "UPDATING_WINDOW_SIZE", width });
};