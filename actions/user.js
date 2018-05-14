import axios from 'axios';
import { AsyncStorage } from 'react-native';



import {
  SAVE_USER,
} from './types';

// const ROOT_URL = 'http://api.indeed.com/ads/apisearch?';


export const signIn = (user, callback) => async dispatch => {
  try {
  //  let { data } = await axios.get(ROOT_URL);
  //  await AsyncStorage.setItem('user_data',JSON.stringifyuser);
    dispatch({ type: SAVE_USER, payload: user });
    callback();
  } catch (error) {
    throw error;
  }
};

// export const likeUser = (user) => {
//   return {
//     payload: user,
//     type: LIKE_USER
//   }
// };
