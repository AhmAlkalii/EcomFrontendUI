import React, { useEffect } from 'react';
import { Header, Footer } from '../Components/Layout';
import { Home, MenuItemDetails, NotFound, ShoppingCart } from '../Pages';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetShoppingCartQuery } from '../Apis/shoppingCartApi';
import { setShoppingCart } from '../Storage/Redux/shoppingCartSlice';

function App() {
  const dispatch = useDispatch();
  const {data, isLoading} = useGetShoppingCartQuery("4207f181-b34f-4900-b193-453711619ff9")

  useEffect(() => {
    if(!isLoading){
      console.log(data.result)
      dispatch(setShoppingCart(data.result?.cartItems))
    }
  },[data])

   
  return (
    <div>    
      <Header/>
      <div className="pb-5">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menuItemDetails/:menuItemId' element={<MenuItemDetails/>}/>
          <Route path='/shoppingCart' element={<ShoppingCart />}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
