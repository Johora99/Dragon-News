import { Link, NavLink } from "react-router-dom";
import userImg from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
export default function Nav() {
  const {user,logOutInfo,setUser} = useContext(AuthContext);
  const handleLogOut = ()=>{
   logOutInfo()
   .then((result)=>{
    setUser(null)

   }).catch(err=>{
    console.log(err)
   })
  }
  return (
    
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 items-center lg:justify-between py-5">
        <div></div>
            <nav className="space-x-5 *:text-lg *:text-DimGray *:font-normal">
               <NavLink to='/'>Home</NavLink>
               <NavLink>About</NavLink>
               <NavLink>Career</NavLink>
            </nav>
        <div className="flex items-center gap-2">
          <figure>
            {
                user && user?.email ?  <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full"/> : <img src={userImg} alt="" className="w-10" />
            }
            
          </figure>
          {
            user ? <Link to="/" onClick={handleLogOut} className="text-white text-xl font-semibold bg-DarkCharcoal py-2 px-5">Logout</Link> :<Link to="/login" className="text-white text-xl font-semibold bg-DarkCharcoal py-2 px-5">Login</Link>
          }
          
        </div>
    </div>
  )
}
