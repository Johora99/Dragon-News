import { useLoaderData, useParams } from "react-router-dom"
import Nav from "../components/Nav"
import Header from "../components/Header"
import ProductDetail from "../components/ProductDetail"
import LoginWith from "../components/category-component/LoginWith"
import Smedia from "../components/Smedia"
import { useEffect } from "react"


export default function ProductDetails() {
  const data = useLoaderData();
  useEffect(()=>{
    document.title = "Dragon || News-Details";
  },[]);
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-12 gap-10 mt-10">
        <div className="col-span-9">
      <ProductDetail data={data}></ProductDetail>
        </div>
        <div className="col-span-3">
      <LoginWith></LoginWith>
      <Smedia></Smedia>
        </div>
      </div>
    </div>
  )
}
