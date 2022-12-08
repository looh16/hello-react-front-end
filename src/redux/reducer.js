import axios from "axios";

const GET_RANDOM_MESSAGE = "greeting/GET_RANDOM_MESSAGE";
const InitialState = [];

export const fetchData = () => async (dispatch) => {
  const result = await axios.get("http://localhost:3000/api/v1/messages");
  return dispatch({ type: GET_RANDOM_MESSAGE, payload: result.data });
};

const greetingReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_RANDOM_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;