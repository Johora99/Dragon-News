import { Link } from "react-router-dom";
import fImg from '../assets/fb.png';
import instaImg from '../assets/instagram.png';
import twiterImg from '../assets/twitter.png';

export default function Smedia() {
  return (
    <div className="mb-10 lg:mb-0">
         <p className="text-DarkCharcoal text-xl font-semibold mb-5">Find Us On</p>
         <div className="join join-vertical w-full rounded-lg">
            <Link className="flex items-center gap-2 border-[1px] border-Cultured py-3 px-5 text-base font-semibold text-DimGray w-full"><img src={fImg} alt="" />Facebook</Link>
            <Link className="flex items-center gap-2 border-[1px] border-Cultured py-3 px-5 text-base font-semibold text-DimGray w-full"><img src={twiterImg} alt="" />Twitter</Link>
            <Link className="flex items-center gap-2 border-[1px] border-Cultured py-3 px-5 text-base font-semibold text-DimGray w-full"><img src={instaImg} alt="" />Instagram</Link>
         </div>
    </div>
  )
}
