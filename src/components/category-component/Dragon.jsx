import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";

export default function Dragon({news}) {
   const {author,title,image_url,details,rating,total_view,_id} = news;
  return (
    <div className="w-full border-[1px] border-Cultured rounded-md mb-5">
      <div>
       <div className="flex items-center justify-between bg-Gainsboro p-5">
        <div className="flex items-center gap-2">
         <figure>
          <img src={author.img} alt="" className="w-10 h-10 rounded-full"/>
         </figure>
         <div>
          <p className="text-DarkCharcoal text-base font-semibold mb-1">{author.name}</p>
          <p className="text-sm text-DimGray font-normal">{author.published_date}</p>
         </div>
        </div>
        <div className="flex items-center gap-1">
          <CiBookmark className="text-xl text-DimGray"/>
          <CiShare2 className="text-xl text-DimGray"/>
        </div>
       </div>
       <div className="p-5">
        <div>
        <h3 className="text-DarkCharcoal text-xl font-bold mb-5">{title}</h3>
        <figure>
          <img src={image_url} alt="" className="w-full"/>
        </figure>
        <p className="line-clamp-4 text-base font-normal text-DimGray mt-5 mb-2">{details}</p>
        <Link to={`/productDetails/${_id}`} className="text-base font-semibold text-gradient">Read More</Link>
        </div>
       <div className="w-full h-[1px] bg-Cultured my-5"></div>
       <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" />
          <input
           type="radio"
           name="rating-2"
           className="mask mask-star-2 bg-orange-400 w-5"
           defaultChecked />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" />
       </div>
       <p className="text-DimGray text-base font-medium">{rating.number}</p>
        </div>
          <div className="flex items-center gap-2">
           <IoMdEye className="text-xl text-DimGray"/>
           <p className="text-DimGray text-base font-medium">{total_view}</p>
          </div>
       </div>
       </div>
      </div>
    </div>
  )
}
