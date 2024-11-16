import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


export default function LatestNews() {
  const [latestNews,setLatestNews] = useState()
  useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/news/category/08')
    .then(res => res.json())
    .then(data => setLatestNews(data.data))
  },[])
  return (
    <div className="flex items-center gap-2 bg-Gainsboro p-3 overflow-hidden">
        <button className="text-white text-xl font-medium bg-CeriseRed py-2 px-5">Latest</button>
        <p className="cursor-pointer">
            <Marquee pauseOnHover={true}>
            {
              

                latestNews?.map(news=><Link to={`/productDetails/${news._id}`} key={news._id}>{news.title} <span className="text-CeriseRed">||</span> </Link>)
              
            }
            </Marquee>
            </p>
    </div>
  )
}
