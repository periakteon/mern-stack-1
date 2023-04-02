import React, { useState } from 'react';

const Auth = () => {
  return (
    <div className='w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50'>
      <div className='w-1/3 bg-white rounded-md p-3'>
        <h1 className='text-2xl font-sans text-gray-700'>BLOG</h1>
        <div className='flex flex-col space-y-3 my-5 '>
          <input type='text' placeholder='Username' className='input-style'/>
          <input type='text' placeholder='E-mail' className='input-style'/>
          <input type='text' placeholder='Password' className='input-style'/>
        </div>
        <div className='text-indigo-900 text-xs flex justify-center cursor-pointer mb-4'>
          Daha önce giriş yaptınız mı?
          </div>
        <div>
          <button className='cursor-pointer hover:bg-indigo-800 active:bg-indigo-500 w-full p-2 text-center bg-indigo-600 text-white rounded-md'>Kayıt Ol</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
