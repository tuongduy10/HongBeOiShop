// import logo from './logo.svg';
import './App.css';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   //Link
// } from "react-router-dom";

import Home from "./pages/Home"
// import Register from './pages/Register'
// import Cart from './pages/Cart'
// import ProductList from './pages/ProductList'
// import Product from './pages/Product'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>Hi guys!!!</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
  const App = () =>{
    return <Home/>;



    // return(
    //   <Router>
    //     <Routes>
    //       <Route exact path="/" element={<Home/>}/>
    //       <Route path="/products/:category" element={<ProductList/>}/>
    //       <Route path="/product/:id">
    //         <Product/>
    //       </Route>
    //       <Route path="/cart">
    //         <Cart/>
    //       </Route>
    //       <Route></Route>
    //       <Route path="/register" element={<Register/>}/>
    //     </Routes>
    //   </Router>
    // );
  }

export default App;
