import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from './hooks/useToken';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';

function App() {

  const [token] = useToken();

  // tüm state'leri dolaşıp "modal" isimli state'i alıyoruz ("modal" adını reducers/modal.js'te belirledik)
  const {modal} = useSelector(state => state.modal);



  return ( 
    <div>
      <BrowserRouter>
      
      {/* Eğer localStorage'da token varsa Navbar'ı göster */}
      {token && token.token && <Navbar/>}
      {/* Eğer modal state'i true ise Modal'ı göster */}
      {modal && <Modal/>}
        <Routes>
          {/* Eğer localStorage'da token YOKSA (!), '/auth' adresine yönlendir; varsa Home'da tut */}
          <Route path='/' element={ !token || !token.token ? <Navigate to='/auth'/> : <Home/> } />
          <Route path='/auth' element={ token && token.token ? <Navigate to='/'/> : <Auth /> } />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
