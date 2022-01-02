import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/shipping" element={<PrivateRoute>
          <Shipping />
        </PrivateRoute>} /> */}

        

      </Routes>
      <PrivateRoute path="/shipping" element={<Shipping />} />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
