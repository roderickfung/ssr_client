import axios from 'axios';
import { FETCH_USERS } from 'lib/types/action';

const endpoint = url => `http://react-ssr-api.herokuapp.com${url}`;

export const getUsers = () => async dispatch => {
  try {
    const data = await axios.get(endpoint('/users'));
    dispatch({
      type: FETCH_USERS,
      payload: data
    });
  } catch (e) {
    console.log(e);
  }
};
