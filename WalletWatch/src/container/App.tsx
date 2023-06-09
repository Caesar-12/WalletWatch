import React from 'react';
import { Footer, Header } from '../component/layout';
import { Home, NotFound ,MenuItemDetails, Register, Login} from '../pages';
import { Routes, Route } from 'react-router-dom';
import { Mybudget } from '../component/page/menuItems';





function App() {

  return (
    <div>
    <Header/>
    <div className='pb-5'>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='*' element={<NotFound/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/budget' element={<Mybudget/>}></Route>
<Route path='/menuItemDetails/:menuItemId' element={<MenuItemDetails/>}></Route>
</Routes>
    </div>
  <Footer/>
    </div>
  );
}

export default App;
