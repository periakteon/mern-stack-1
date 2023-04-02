// localStorage'a kaydettiğimiz token'ı bize döndüren custom hook

import React, { useEffect, useState } from 'react'

const useToken = () => {
  const [token, setToken] = useState('');

  // sayfa yüklendiğinde localStorage'dan auth'u çek
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('auth')));
  }, []);
  return [token];
}

export default useToken;