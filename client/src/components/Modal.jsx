import React, { useState } from 'react'
import { SlClose } from 'react-icons/sl';
import { useDispatch } from 'react-redux';

const Modal = () => {

  const [postData, setPostData] = useState({user: '', title: '', description: ''});
  
  const dispatch = useDispatch();

  const onChangeFunction = (e) => {
    setPostData({...postData, [e.target.name]: e.target.value});
  };

  return (
    <div className='w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center'>
      <div className='bg-white w-1/3 p-2 rounded-md'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-2xl text-center'>POST PAYLAŞ</h1>
          <SlClose size={25} onClick={ () => dispatch({type: 'MODAL', payload: false})} className='cursor-pointer'/>
        </div>
        <div className='my-4 flex flex-col space-y-3'>
          <input value={postData.user} name='user' onChange={onChangeFunction} type="text" placeholder="User" className='input-style'/>
          <input value={postData.title} name='title' onChange={onChangeFunction} type="text" placeholder="Title" className='input-style'/>
          <input value={postData.description} name='description' onChange={onChangeFunction} type="text" placeholder="Description" className='input-style'/>
        </div>
        <button className='w-full p-2 text-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-800 rounded-md'>Paylaş</button>
      </div>
    </div>
  )
}

export default Modal