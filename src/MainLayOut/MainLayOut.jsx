import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

  import { ToastContainer} from 'react-toastify';

export default function MainLayOut() {
  const {pathname} = useLocation()
  const bg = pathname === "/login" || pathname === "/signUp" ? 'bg-Gainsboro' : 'bg-white';
  return (
    <div className={`${bg}`}>
    <div className="poppins container w-11/12 mx-auto">
        <Outlet></Outlet>
        <ToastContainer />
    </div>
    </div>
  )
}
