import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
