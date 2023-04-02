import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from './hooks/useToken';
import Navbar from './components/Navbar';

function App() {

  const [token] = useToken();

  return ( 
    <div>
      <BrowserRouter>
      {/* Eğer localStorage'da token varsa Navbar'ı göster */}
      {token && token.token && <Navbar/>}
        <Routes>
          {/* Eğer localStorage'da token YOKSA (!), '/auth' adresine yönlendir; varsa Home'da tut */}
          <Route path='/' element={!token || !token.token ? <Auth /> : <Link to={'/'} />} />
          <Route path='/auth' element={token && token.token ? <Link to={'/'}/> : <Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
