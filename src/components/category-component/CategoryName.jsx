import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";


export default function CategoryName() {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])
    
    const {pathname} = useLocation()
  return (
    <div >
        <p className="text-DarkCharcoal text-xl font-semibold mb-5 text-center lg:text-left">All Caterogy</p>
        <div className="flex flex-row lg:flex-col flex-wrap justify-center mb-5 lg:mb-0">

        {
            categories.map((category)=>{
                const isActive = pathname === `/category/${category.category_id}` ? 'text-DarkCharcoal bg-Cultured border-[1px] border-Cultured border-opacity-[0.01] bg-Cultured rounded-md':'text-MiddleGray';
                return (<Link to={`/category/${category.category_id}`} key={category.category_id} className={`${isActive} lg:text-xl font-semibold py-2 lg:py-3 px-5`}>{category.category_name}</Link>)
            })
        }
        </div>
    </div>
  )
}
