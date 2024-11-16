import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "./auth.init"
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
export const AuthContext = createContext()
export default function AuthProvider({children}) {
const [user,setUser]=useState(null)
const [loading,setLoading] = useState(true)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


 const signUpInfo = (email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password);
 }

  const signInInfo = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }
  const googleSignIn = ()=>{
    signInWithPopup(auth,googleProvider)
    .then((result)=>{
     setLoading(false)
    }).catch(err=>{
      console.log(err)
       setLoading(false)
    })
  }
  const githubSignIn = ()=>{
    signInWithPopup(auth,githubProvider)
    .then((result)=>{
     setLoading(false)
    }).catch(err=>{
      console.log(err)
       setLoading(false)
    })
  }
 
  useEffect(()=>{
    const onUser = onAuthStateChanged(auth,currentUser=>{
      if(currentUser){
       setUser(currentUser)
       setLoading(false)
      }else{
        setUser(null)
         setLoading(false)
      }
    })
    return ()=>{
            onUser()
        }
  },[])
  const userUpdateProfile = (name,photoURL)=>{
    return updateProfile(auth.currentUser,{
      displayName:name,photoURL:photoURL
    })
  }
  const logOutInfo = ()=>{
    return signOut(auth)
  }
  const authInfo = {
    signUpInfo,
    signInInfo,
    setUser,
    user,
    logOutInfo,
    userUpdateProfile,
    loading,
    googleSignIn,
    githubSignIn,
    setLoading,
   
  }
  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  )
}
