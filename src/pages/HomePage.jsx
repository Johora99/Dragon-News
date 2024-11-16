import { Outlet } from "react-router-dom";
import CategoryName from "../components/category-component/CategoryName";
import LoginWith from "../components/category-component/LoginWith";
import LatestNews from "../components/LatestNews";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Smedia from "../components/Smedia";
import ChildCard from "../components/ChildCard";
import { useEffect } from "react";


export default function HomePage() {
  useEffect(()=>{
    document.title = "Dragon-News";
  },[]);
  return (
    <div>
      <Header></Header>
        <LatestNews></LatestNews>
        <Nav></Nav>
        <main className="lg:grid lg:grid-cols-12 gap-10">
            <aside className="col-span-3">
                <CategoryName></CategoryName>
            </aside>
            <section className="col-span-6">
             <Outlet></Outlet>
            </section>
            <aside className="col-span-3">
            <LoginWith></LoginWith>
            <Smedia></Smedia>
            <ChildCard></ChildCard>
            </aside>
        </main>
    </div>
  )
}
