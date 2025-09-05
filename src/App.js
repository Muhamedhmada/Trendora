import './App.css';
import '../src/Assets/Variable.css'
// import './Assets/Responsive.css'
import SignIn from './Pages/SignIn/SignIn';
import {Routes  , Route} from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import HomePage from './Pages/HomePage/HomePage';
import Shop from './Pages/Shop/Shop';
import Category from './Pages/Category/Category';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Cart from './Pages/Cart/Cart';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        {/* dashboard */}
        <Route path='/' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/home-page' element={<HomePage/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/:prdouct' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Routes>
      </header>
    </div>
  );
}

export default App;
