import React from 'react'

export default function Tabs() {
  return (
    <div className="flex py-3 px-4 items-end mt-7 -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap   ">
    <div className="hidden items-end md:flex w-24"> <div className=" border-b-[1px] h-1 border-gray-700  w-full"></div></div>
	
	<span className="flex items-center font-semibold text-lg flex-shrink-0 px-5 py-1.5 space-x-2 border border-b-0 rounded-t-md border-gray-700  text-blue-500">
		134 Blogs 
	</span>
    <div className="flex items-end w-full   h-full"> <div className=" border-b-[1px] border-gray-700  h-1 w-full"></div></div>
</div>
  )
}
