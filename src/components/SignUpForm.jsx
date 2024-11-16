import { useContext, useState } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { useNavigate } from "react-router-dom"
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { sendEmailVerification } from "firebase/auth";
import auth from "../AuthProvider/auth.init";
export default function SignUpForm() {
  const {signUpInfo,userUpdateProfile} = useContext(AuthContext)
  const navigate = useNavigate()
  const [errorPassMassage,setErrorPassMassage] = useState('');
  const [errorMassage,setErrorMassage] = useState('')
  const [check,setCheck] = useState();
  const [showPassword,setShowPassword] = useState(false)
  const [success,setSuccess] = useState(false)
   const handleSignUp = (e)=>{
     e.preventDefault();
      const name = e.target.name.value;
      const photoUrl = e.target.photoUrl.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const checkBox = e.target.check.checked;
      e.target.reset();
       setErrorPassMassage('');
        setErrorMassage('');
        setCheck('');
      if (!/[a-z]/.test(password)) {
        setErrorPassMassage('Password must contain at least one lowercase letter.');
        return;
    }
    if (!/[A-Z]/.test(password)) {
        setErrorPassMassage('Password must contain at least one uppercase letter.');
        return;
    }
    if (!/\d/.test(password)) {
        setErrorPassMassage('Password must contain at least one number.');
        return;
    }
    if (!/[@$!%*?&]/.test(password)) {
        setErrorPassMassage('Password must contain at least one special character (@$!%*?&).');
        return;
    }
    if(!checkBox){
           setCheck('Accept Our Terms and Conditions');
           return;
        }
       
      signUpInfo(email,password)
      .then((result)=>{
        userUpdateProfile(name,photoUrl)
        .then((result)=>{
          sendEmailVerification(auth.currentUser)
          .then((result)=>{
            
          }).catch(err=>{
            console.log(err)
          })
         
            navigate('/')
         
        }).catch(err=>{
          console.log(err)
        })
      }).catch(err=>{
        setErrorMassage(err)
      })
   }
  return (
    <div>
        <div className="">
        <div className="bg-white rounded-md lg:w-[40%] shrink-0 mx-auto lg:mt-5  p-10">
        <div className="text-center">
            <h3 className="text-2xl lg:text-4xl text-DarkCharcoal font-semibold">Register your account</h3>
        </div>
        <div className="w-full h-[1px] border-b-[1px] border-Cultured my-5 lg:my-6"></div>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg lg:text-xl font-semibold text-DarkCharcoal">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" className="input bg-Gainsboro rounded-md placeholder:text-MiddleGray placeholder:text-base placeholder:font-normal mb-3 lg:mb-5" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg lg:text-xl font-semibold text-DarkCharcoal">Photo URL</span>
          </label>
          <input type="url" name="photoUrl" placeholder="Enter your Photo URL" className="input bg-Gainsboro rounded-md placeholder:text-MiddleGray placeholder:text-base placeholder:font-normal mb-3 lg:mb-5" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg lg:text-xl font-semibold text-DarkCharcoal">Email address</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email address" className="input bg-Gainsboro rounded-md placeholder:text-MiddleGray placeholder:text-base placeholder:font-normal mb-3 lg:mb-5" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text text-lg lg:text-xl font-semibold text-DarkCharcoal">Password</span>
          </label>
          <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter your password" className="input bg-Gainsboro rounded-md placeholder:text-MiddleGray placeholder:text-base placeholder:font-normal" required />
          <span onClick={()=>setShowPassword(!showPassword)} className="cursor-pointer absolute top-2/3 right-3 text-lg">
            {
               showPassword ?<IoEyeOutline />:<IoEyeOffOutline className="text-MiddleGray"/>
            }
          </span>
    
          <div>
            {
                errorPassMassage && <p className="text-sm text-red-500 mt-2">{errorPassMassage}</p>
            }
          </div>
        </div>
            <div className="form-control">
           <label className="label cursor-pointer justify-start gap-2 mt-2">
            <input type="checkbox" name="check" className="checkbox w-5 h-5" />
           <span className="label-text text-DimGray text-base font-semibold hover:underline">Accept Term & Conditions</span>
           </label>
            <div>
                    {
                        check && <p className='text-red-600 text-sm'>{check}</p>
                    }
                
            </div>
           </div>
        <div className="form-control mt-6">
          <button className="text-white text-xl font-semibold w-full bg-DarkCharcoal py-2.5 rounded-md">Register</button>
        </div>
      </form>
         <div className='mt-5'>
                    {
                        errorMassage && <p className='text-red-600 text-sm'>Error : Already have an account!</p>
                    }
                
        </div>
    </div>
    </div>
    </div>
  )
}
