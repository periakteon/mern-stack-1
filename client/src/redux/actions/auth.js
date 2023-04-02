import axios from 'axios';
import { toast } from 'react-toastify';

export const registerAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:5001/register', authData);
    dispatch({ type: 'REGISTER', payload: data });
    toast.success(`Üye kaydı başarılı. Hoşgeldin ${authData.username}!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setTimeout(() => {
    window.location.href = '/';
    }, 3000);
  } catch (error) {
    toast.error(error.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
};

export const loginAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:5001/login', authData);
    dispatch({ type: 'LOGIN', payload: data });
    toast.success('Üye girişi başarılı!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setTimeout(() => {
      window.location.href = '/';
      }, 3000);
  } catch (error) {
    toast.error(error.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
};
