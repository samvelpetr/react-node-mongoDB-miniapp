import './App.css';
import Navigation from './components/Navigation';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>

      <div className="App">
        <Navigation/>
        <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/addproduct' element={<AddProduct/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
