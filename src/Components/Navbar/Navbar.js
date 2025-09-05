import './Navbar.css'
import Logo from '../../Assets/Images/Logo.png'
import { Bars, Delete, Search, Shopping, User } from '../../Assets/SVGs'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
function Navbar(){
  const nav = useNavigate()
  const [openMenu , setOpenMenu] = useState(false)
  const handleOpenMenu = ()=>{
    setOpenMenu((prev)=>!prev)
    console.log(openMenu)
  }
  return (
    <div className='navbar-container container'>
      <div className='navbar-content content'>
        <div className='logo'>
          <img src={Logo} alt='' />
        </div>
        <div className='links'>
          <ul>
            <NavLink to='/home-page'>Home</NavLink>
            <NavLink to={"/shop"}>Shop</NavLink>
            <NavLink to={"/"}>Collection</NavLink>
            <NavLink to={"/"}>About us</NavLink>
            <NavLink to={"/"}>Contact</NavLink>
          </ul>
        </div>
        <div className='searchInput'>
          <div className='icon'>
            <Search width='30px' />
          </div>
          <input
            type='search'
            placeholder='Find your next favorite piece ...'
          />
        </div>
        <div className='icons'>
          <div className='icon'>
            <Shopping width='30' />
          </div>
          <div className='icon' onClick={() => nav("/profile")}>
            <User width='40' />
          </div>
          <div className='icon bars' onClick={() => handleOpenMenu()}>
            <Bars width='40' />
          </div>
        </div>

        <div className={openMenu ? "menu open" : "menu close"}>
          <div className="icon" onClick={()=> handleOpenMenu()}>
            <img src={Logo} alt=""/>
            <Delete width="20px" />
          </div>
          <div className='menu-links'>
            <ul>
              <NavLink to='/home-page'>Home</NavLink>
              <NavLink to={"/shop"}>Shop</NavLink>
              <NavLink to={"/"}>Collection</NavLink>
              <NavLink to={"/"}>About us</NavLink>
              <NavLink to={"/"}>Contact</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar