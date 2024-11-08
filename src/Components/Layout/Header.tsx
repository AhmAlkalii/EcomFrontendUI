import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { cartItemModel } from '../../Interfaces';
import { RootState } from '../../Storage/Redux/store';
let logo = require("../../Assests/Images/mango.png")


function Header() {

  const shoppingCartFromStore: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
     <div className="container-fluid">
      <NavLink className="nav-link" aria-current="page" to="/">
        <img src={logo} style={{height: '40px'}} className='m-1' />
      </NavLink>



      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/shoppingCart">
              <i className='bi bi-cart'></i>{" "}
              {shoppingCartFromStore?.length? `(${shoppingCartFromStore.length})` : ""}
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
              Admin Panel
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <div className="d-flex" style={{marginLeft:"auto"}}>
            <li className='nav-item'>
              <button
                className='btn btn-success btn-outlined rounded-pill text-white mx-2'
                style={{
                  border:"none",
                  height:"40px",
                  width: "100px"
                }}
              >
                Logout
              </button>
            </li>
            <li className='nav-item text-white'>
              <NavLink className="nav-link" to='/register'>
                Register
              </NavLink>
            </li>
            <li className='nav-item text-white'>
              <NavLink  className='btn btn-success btn-outlined rounded-pill text-white mx-2'
                style={{
                  border:"none",
                  height:"40px",
                  width: "100px"
                }} 
                to='/login'
                >
                Login
              </NavLink>
            </li>
          </div>
        </ul>
        
      </div>
     </div>
    </nav>
  )
}

export default Header