import React, { useState } from 'react';
import { loginAction, registerAction } from '../redux/actions/auth';
import { useDispatch } from 'react-redux';

const Auth = () => {

  const [signUp, setSignUp] = useState(true);

  const [authData, setAuthData] = useState({username: '', email: '', password: ''});

  const dispatch = useDispatch();
  
  const onChangeFunction = (e) => {
    // The setAuthData function updates the authData state object by creating a new object using the spread operator (...) to copy all the properties of the existing authData object, then setting the property with the name of the input field ([e.target.name]) to the value of the input field (e.target.value).
    // For example, if the input field with name username had a value of "JohnDoe", then setAuthData({...authData, [e.target.name]: e.target.value}); would update the authData state to {username: 'JohnDoe', email: '', password: ''}.
    setAuthData({...authData, [e.target.name]: e.target.value});
  }

  const authFunction = () => {

    if (signUp) {
      dispatch(registerAction(authData));
    }else {
      dispatch(loginAction(authData));
    }
  };

  console.log("authData: ", authData);
  return (
    <div className='bg-gradient-to-r from-sky-500 to-indigo-500 w-full h-screen bg-gray-100 flex items-center justify-center'>
      <div className='w-1/3 bg-white rounded-md p-3 shadow-md overflow-hidden'>
        <h1 className='text-2xl font-sans font-bold text-indigo-700'>
          {
            // signUp true dönüyorsa, kayıt ol yazacak; false dönüyorsa giriş yap yazacak.
            signUp ? 'Kayıt Ol' : 'Giriş Yap'
          }
        </h1>
        <div className='flex flex-col space-y-3 my-5 '>
          {
          // signUp true dönüyorsa, username inputu gösterilecek; false dönüyorsa gösterilmeyecek.
          signUp && <input type='text' value={authData.username} name='username' onChange={onChangeFunction} placeholder='Username' className='input-style block shadow-sm'/>
          }
          <input type='text' value={authData.email} name='email' onChange={onChangeFunction} placeholder='E-mail' className='input-style shadow-sm'/>
          <input type='text' value={authData.password} name='password' onChange={onChangeFunction} placeholder='Password' className='input-style shadow-sm'/>
        </div>
        <div className='text-indigo-900 text-xs flex justify-center cursor-pointer mb-4'>
          {
            // signUp true dönüyorsa, kayıt olmak için tıklayınız yazacak; false dönüyorsa giriş yapmak için tıklayınız yazacak.
            signUp ? <span className='transition duration-300 hover:text-blue-700' onClick={() => setSignUp(false)}>Zaten bir hesabınız var mı? Giriş yapmak için tıklayınız.</span> : <span className='transition duration-300 hover:text-blue-700' onClick={() => setSignUp(true)}>Hesabınız yok mu? Kayıt olmak için tıklayınız.</span>
          }
          </div>
        <div>
          <button onClick={authFunction} className='cursor-pointer hover:bg-indigo-800 active:bg-indigo-500 w-full p-2 text-center bg-indigo-600 text-white rounded-md focus:outline-none focus:shadow-outline transition duration-300'>
            {
            // signUp true dönüyorsa, kayıt ol yazacak; false dönüyorsa giriş yap yazacak.
            signUp ? 'Kayıt Ol' : 'Giriş Yap'
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
