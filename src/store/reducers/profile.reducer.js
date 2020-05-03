import { TYPES } from "../actions/profile.action";

const INITIAL_STATE = false;

const ProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_BODY_PROFILE:
      return (state = action.payload);

    case TYPES.DELETE_BODY_PROFILE:
      return (state = false);

    default:
      return state;
  }
};

export default ProfileReducer;
