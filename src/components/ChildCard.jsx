import Img1 from '../assets/swimming.png';
import Img2 from '../assets/playground.png'
import Imp3 from '../assets/class.png'
export default function ChildCard() {
  return (
    <div className='bg-Gainsboro p-5 mt-10'>
        <p className="text-DarkCharcoal text-xl font-semibold my-5">Q-Zone</p>
        <div>
            <img src={Img1} alt="" className='w-full'/>
            <img src={Img2} alt="" className='w-full'/>
            <img src={Imp3} alt="" className='w-full'/>
        </div>
    </div>
  )
}
