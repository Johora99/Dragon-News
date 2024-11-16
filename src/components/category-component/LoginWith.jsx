
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
export default function LoginWith() {
  const {googleSignIn,githubSignIn} = useContext(AuthContext)
  return (
    <div>
        <p className="text-DarkCharcoal text-xl font-semibold mb-5">Login With</p>
        <div>
          <button onClick={googleSignIn} className="flex items-center gap-2 py-2 px-5 w-full border-[1px] justify-center mb-5 text-LightBlue font-medium rounded-lg border-LightBlue"><IoLogoGoogle />Login With Google</button>
          <button onClick={githubSignIn} className="flex items-center gap-2 py-2 px-5 w-full border-[1px] justify-center mb-5 font-medium rounded-lg border-black"><FaGithub />Login With Github</button>
        </div>
    </div>
  )
}
