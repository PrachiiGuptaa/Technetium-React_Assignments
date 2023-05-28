import './App.css';
import { Routes, Route} from 'react-router-dom'
import Home from './Components/pages/Home'
import Cart from './Components/pages/Cart'
import NavBar from './Components/NavBar/NavBar';
import { Provider } from 'react-redux';
import store from './Components/store/store'


function App() {
 
  return (
    <Provider store = { store }>
     <NavBar />
      <Routes>
        <Route path = '/' element={<Home />}></Route>
        <Route path = '/cart' element={<Cart />}></Route>
      </Routes>
      </Provider>
  );
}

export default App;
