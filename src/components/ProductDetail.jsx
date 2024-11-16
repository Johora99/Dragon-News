import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export default function ProductDetail({data}) {
    const {image_url,title,details,category_id} = data.data[0];
  return (
    <div>
        <h3 className="text-DarkCharcoal text-xl font-semibold mb-5">Dragon News</h3>
        <div>
          <figure>
            <img src={image_url} alt="" className="w-full"/>
          </figure>
          <h3 className="text-DarkCharcoal text-xl font-bold my-5 max-w-[700px]">{title}</h3>
          <p className="line-clamp-4 text-base font-normal text-DimGray mt-5 mb-2">{details}</p>
          <Link to={`/category/${category_id}`} className="flex items-center gap-2 bg-CeriseRed py-2 px-5 text-white text-xl font-medium w-fit my-5"> <FaArrowLeft /> All news in this category</Link>
        </div>
    </div>
  )
}
