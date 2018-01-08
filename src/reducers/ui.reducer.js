import { API_ERROR } from '../actions/ui.actions'
const default_state = {
  error: {}
}
export default function (state = default_state, action = {}){
  const { type, payload } = action;
  switch(type){
    case API_ERROR:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  };
};
