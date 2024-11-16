import { useEffect } from "react";
import Nav from "../components/Nav";
import SignUpForm from "../components/SignUpForm";


export default function SignUpPage() {
  useEffect(()=>{
    document.title = "Dragon || Signup";
  },[])
  return (
    <div className="h-screen">
        <Nav></Nav>
        <SignUpForm></SignUpForm>
    </div>
  )
}
