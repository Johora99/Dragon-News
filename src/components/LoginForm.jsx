import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import auth from "../AuthProvider/auth.init";
import { sendPasswordResetEmail } from "firebase/auth";
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function LoginForm() {
    const {signInInfo} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const [showPassword,setShowPassword] = useState(false)
    const [error,setError] = useState('')
    const emailRef = useRef()
    const handleSignIn = (e)=>{
        e.preventDefault();
        setError('')
        const email = e.target.email.value;
      const password = e.target.password.value;
      signInInfo(email,password)
      .then((result)=>{
        if(location.state?.from){
          navigate(location.state.from)
        }else{
          navigate('/category/01')
        }
      }).catch(err=>{
        setError(err)
        console.log(err)
      })
    }
    const handleForgetPassword = ()=>{
      const email = emailRef.current.value;
      if(!email){
        return toast.error('Please enter your email address.')
      }else{
        sendPasswordResetEmail(auth,email)
        .then((result)=>{
          toast.success('Password reset email sent! Please check your email.');
          
          }).catch(err=>{
            console.log(err)
          })
      }
      
    
    }
  return (
    <div className="">
        <div className="bg-white rounded-md lg:w-[40%] shrink-0 mx-auto mt-10 lg:mt-32 p-10 lg:p-16">
        <div className="text-center">
            <h3 className="text-2xl lg:text-4xl text-DarkCharcoal font-semibold">Login your account</h3>
        </div>
        <div className="w-full h-[1px] border-b-[1px] border-Cultured my-5 lg:my-6"></div>
      <form onSubmit={handleSignIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg lg:text-xl font-semibold text-DarkCharcoal">Email address</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email address" className="input bg-Gainsboro rounded-md placeholder:text-MiddleGray placeholder:text-base placeholder:font-normal mb-3 lg:mb-5" ref={emailRef} required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text text-lg lg:text-xl font-semibold text-DarkCharcoal">Password</span>
          </label>
          <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter your password" className="input bg-Gainsboro rounded-md placeholder:text-MiddleGray placeholder:text-base placeholder:font-normal" required />
          <span onClick={()=>setShowPassword(!showPassword)} className="cursor-pointer absolute top-2/4 right-3 text-lg">
            {
               showPassword ?<IoEyeOutline />:<IoEyeOffOutline className="text-MiddleGray"/>
            }
          </span>
          <label onClick={handleForgetPassword} className="label">
            <button href="" className="label-text-alt link link-hover text-DarkCharcoal font-medium">Forgot password?</button>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="text-white text-xl font-semibold w-full bg-DarkCharcoal py-2.5 rounded-md">Login</button>
        </div>
      </form>
      <div className="text-center mt-5">
        <p className="text-DimGray text-base font-semibold">Dont’t Have An Account ? <Link to='/signUp' className="text-gradient">Register</Link></p>
      </div>
      <div>
        {
          error && <p className="text-sm text-red-500 mt-2">Incorrect & Try Again</p>
        }
        
      </div>
    </div>
    </div>
  )
}
