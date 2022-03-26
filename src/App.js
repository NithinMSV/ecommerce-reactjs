// import logo from './logo.svg';
import './App.css';
import Navigation from "./Components/Navigation/Navigation.jsx"
import AddProduct from './Components/Home/addProducts';
import DisplayProducts from './Components/Home/displayProducts';
import {Routes, Route} from 'react-router-dom'; 

function App() {
  return (
      <div className="App">
          <Navigation />
          <Routes>
              <Route path="/" element={<DisplayProducts />}></Route>
              <Route path="/display" element={<DisplayProducts />}></Route>
              <Route path="/addproduct" element={<AddProduct />}></Route>
          </Routes>
      </div>
  );
}

export default App;
