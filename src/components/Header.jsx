
import moment from 'moment'
import logo from '../assets/logo.png'
export default function Header() {
  return (
    <div>
        <div className='w-fit mx-auto text-center'>
            <figure className='mt-10 mb-2'>
                <img src={logo} alt="" className='mx-auto '/>
            </figure>
            <p className='lg:text-lg text-DimGray font-normal'>Journalism Without Fear or Favour</p>
            <p className='text-sm lg:text-base mt-2 mb-5'>
                {
                    moment().format("dddd, MMMM Do YYYY")
                }
                
            </p>
        </div>
    </div>
  )
}
