import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="bg-gray-100 px-[120px] py-4 flex items-center justify-between ">
      <h3 className="text-[26px] text-gray-700 font-bold ">app-auth </h3>

      <ul className="flex items-center gap-4"> 
        <NavLink className="navLink"  to="/" > Home</NavLink>
        <NavLink className="navLink" to="/about" > About</NavLink>
        <NavLink to="sign-in"
         className="navLink ">sign-in</NavLink>
      </ul>
      
    </header>
  )
}

export default Header
