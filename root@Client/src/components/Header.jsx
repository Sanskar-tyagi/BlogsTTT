import React from 'react'
import Avatar from './Avatar'
import { MdOutlineDiamond } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import { CiStar ,CiHeart} from "react-icons/ci";
import { FaRegThumbsUp ,FaRegEye } from "react-icons/fa6";
function Header() {
  return (
    <div className='flex flex-col w-full '>  
    <div className='w-full h-[40vh] bg-cover bg-no-repeat bg-center'  style={{background:'url(https://i0.wp.com/www.benday.com/wp-content/uploads/2015/03/paris-bridge-horizontal.jpg?w=1200&ssl=1)',backgroundRepeat:'no-repeat' ,backgroundSize:'cover',backgroundPosition:'center'}}  />
   <div className="flex px-4 md:px-32 ">
    <Avatar src={"https://pbs.twimg.com/profile_images/1148507476578275328/fsrvymGR_400x400.jpg"}/>
     <div className="flex  flex-col my-2 gap-4  justify-center items-center ">
       <div className="flex justify-center items-center gap-2 ps-1">
       <span className='md:text-lg text-md font-semibold'> Anuj Gosalia</span>
        <div className="flex bg-purple-500 h-[20px] text-white rounded-full justify-center items-center  p-1">
       <MdOutlineDiamond className='md:text-[16px] text-[15px]'/>
        </div>
       <HiBadgeCheck  className='md:text-[28px] text-[20px] text-green-400' /> 
       </div>
       <div className="flex gap-2 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
        <button type="button" className="md:px-5 py-0 px-3 md:text-lg text-md font-medium border-2 rounded-md border-gray-400  text-gray-600">6482</button>
        <span className='text-center text-sm font-medium text-gray-600  md:text-md'>Followers</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
        <button type="button" className="md:px-5 py-0 px-3 md:text-lg text-md font-medium border-2 rounded-md border-gray-400  text-gray-600">245</button> 
        <span className='text-center text-sm font-medium text-gray-600  md:text-md'>Following</span>
 
 </div>
       </div>
     </div>
   </div>
   <div className="flex flex-col mt-6 justify-center items-start gap-1 px-10 md:px-44 ">
   <span className='text-center text-start text-sm  text-gray-600  md:text-lg'>Co-founder & CEO at Terribly Tiny Tales
</span>
<span className='text-center text-[12px] text-start text-blue-400 font-medium text-gray-600  md:text-md'>http://www.instagram.com/anujgosalia</span>
  <div className="flex justify-start mt-2 items-center gap-2">
  <div className="flex justify-start items-center gap-2">
  <div className="flex bg-teal-600/80 text-white  rounded-full justify-center items-center p-0.5 ">
       <CiStar className='md:text-[18px] font-semibold text-[13px]'/>
        </div>
        <span className='text-center text-[12px] font-medium text-gray-600  md:text-md'>125</span> 
  </div>
  <div className="flex justify-start items-center gap-2">
  <div className="flex bg-yellow-500/80 text-white rounded-full justify-center items-center p-1 ">
       <FaRegThumbsUp className='md:text-[15px] md:m-0 mb-0.5 text-[13px]'/>
        </div>
        <span className='text-center text-[12px] font-medium text-gray-600  md:text-md'>12</span> 
  </div>
  <div className="flex justify-start items-center gap-2">
  <div className="flex bg-gray-500/80 text-white rounded-full justify-center items-center  p-1.5 ">
       <FaRegEye className='md:text-[12px] text-[10px] '/>
        </div>
        <span className='text-center text-[12px] font-medium text-gray-600  md:text-md'>57.8K</span> 
  </div>
  <div className="flex justify-start items-center gap-2">
  <div className="flex bg-red-700/80 text-white rounded-full justify-center items-center p-0.5 ">
       <CiHeart className='md:text-[16px] text-[15px]'/>
        </div>
        <span className='text-center text-[12px] font-medium text-gray-600  md:text-md'>26.0K</span> 
  </div>
  </div>
  
   </div>
    </div>
  )
}

export default Header