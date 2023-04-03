import axios from 'axios';
import { toast } from 'react-toastify';

export const getPostsAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:5001/getPosts');
    dispatch({ type: 'GET_POSTS', payload: data });

    toast.success(`Tüm postlar sunucudan çekildi!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
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

export const createPostAction = (postData) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:5001/createPost', postData);
    dispatch({ type: 'CREATE_POST', payload: data });

    toast.success(`${postData.title} başarıyla oluşturuldu!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
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

export const updatePostAction = (id, postData) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`http://localhost:5001/updatePost/${id}`, postData);
    dispatch({ type: 'UPDATE_POST', payload: data });

    toast.success(`${postData.title} başarıyla güncellendi!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
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

export const deletePostAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5001/deletePost/${id}`);
    dispatch({ type: 'DELETE_POST', payload: id });

    toast.success(`Post başarıyla silindi!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
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