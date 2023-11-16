import React from 'react' 
import { FaRegThumbsUp } from 'react-icons/fa6';
import ConfettiExplosion  from 'react-confetti-explosion';
export default function BlogCard({data}) {
	const {title,dd,desc,read,views,date ,img}=data;  const [isMediumExploding, setIsMediumExploding] = React.useState(false);
	const mediumProps = {
		force: 0.6,
		duration: 2500,
		particleCount: 50,
		width: 1000,
		colors: ['#9A0023', '#FF003C', '#AF739B', '#FAC7F3', '#F7DBF4'],
	  };
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
		<div  onClick={() => setIsMediumExploding(!isMediumExploding)} className={`absolute right-10 top-2 flex cursor-pointer ${isMediumExploding?"bg-yellow-500/80 text-white":"bg-white text-yellow-600"} rounded-full justify-center items-center p-1.5 `}>
	 
        {isMediumExploding && <ConfettiExplosion {...mediumProps} />}
		<FaRegThumbsUp className='md:text-[14px] text-[14px]'/>
 
        </div>
			<h1 className="md:text-4xl font-bold text-xl md:text-center text-start	text-black  pt-2 mb-5">{title}</h1>
			<p className="flex-1 pt-2 text-start md:text-lg text-md">{desc}</p>
			<div className="flex items-center justify-between font-semibold  gap-2 pt-2 mt-5"> 
			<a rel="noopener noreferrer" href="#" className=" md:text-sm whitespace-nowrap text-[11px] hover:underline"> <span className="text-teal-500">{dd}</span> by anujgosalia</a>
			<div className="flex items-center whitespace-nowrap md:text-sm text-[11px] text-gray-600 font-medium gap-1"> 
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
