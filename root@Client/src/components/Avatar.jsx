import React from 'react'

export default function Avatar({src}) {
  return (
    <div className="  px-4   flex justify-center"> 
      <img alt="..." src={src}className="shadow-xl rounded-full ring-[1px] ring-gray-800 md:h-36 md:w-36 h-28 w-28 align-middle border-none  -mt-8 max-w-150-px"/>
  </div>
  )
}
