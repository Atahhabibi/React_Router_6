
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
       <nav className='navbar'>

        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products' >Products</NavLink>
        <NavLink to='/dashboard' >Dashboard</NavLink>
        <NavLink to='/Login' >Login</NavLink>
      
       </nav>
  )
}

export default Navbar
