import React from 'react' 
import { FaRegThumbsUp } from 'react-icons/fa6';

export default function BlogCard({data}) {
	const {title,dd,desc,read,views,date ,img}=data; 
  return (
    <div className="text-gray-700  md:border-[1px] md:border-gray-800 mb-2 md:rounded-md md:backdrop-filter md:backdrop-blur-sm border-b-2 ">
	<div className="container grid grid-cols-12 mx-auto  ">
		<div className="bg-no-repeat bg-gray-900/60 relative bg-cover md:rounded-r-sm  col-span-full lg:col-span-4" style={{
    backgroundImage: `url(${img})`,
    backgroundPosition: "top", 
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
  }}>
  </div>

		<div className="flex relative flex-col px-2 md:p-6 mb-2 col-span-full row-span-full lg:col-span-8 lg:p-10"> 
		<div className="absolute right-10 top-2 flex bg-yellow-500/80 text-white rounded-full justify-center items-center p-1.5 ">
       <FaRegThumbsUp className='md:text-[14px] text-[14px]'/>
        </div>
			<h1 className="md:text-4xl font-bold text-2xl md:text-center text-start	text-black  pt-2 mb-5">{title}</h1>
			<p className="flex-1 pt-2 text-start text-lg">{desc}</p>
			<div className="flex items-center justify-between gap-2 pt-2 mt-5"> 
			<a rel="noopener noreferrer" href="#" className=" md:text-sm whitespace-nowrap text-[12px] hover:underline"> <span className="text-blue-500">{dd}</span> by akita lokhande</a>
			<div className="flex items-center whitespace-nowrap md:text-sm text-[12px] text-gray-600 font-medium gap-1"> 
				<span  >{date}</span><span>&#183;</span>
				<span  >{read} min read</span><span>&#183;</span>
				<span >{views} views</span>  
            </div>
            </div>
		</div>
	</div>
</div>
  )
}
