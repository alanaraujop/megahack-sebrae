export const TYPES = {
  SET_BODY_PROFILE: "SET_BODY_PROFILE",
  DELETE_BODY_PROFILE: "DELETE_BODY_PROFILE",
};

const setBodyProfile = (body) => async (dispatch) => {
  dispatch({
    type: TYPES.SET_BODY_PROFILE,
    payload: body,
  });
};

const deleteBodyProfile = () => async (dispatch) => {
  dispatch({type: TYPES.DELETE_BODY_PROFILE})
}

export default { setBodyProfile, deleteBodyProfile };
