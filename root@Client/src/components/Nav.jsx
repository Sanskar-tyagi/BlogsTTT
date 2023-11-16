import React from 'react'

export default function Nav() {
  return (
    <header className="p-4 bg-black  text-gray-500">
	<div className="container flex justify-between h-16 mx-auto">
		<div className="flex">
			<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<img  src="https://learn.terriblytinytales.com/menu/brand.svg" alt="" />
			</a> 
		</div>
		<div className="items-center flex-shrink-0  flex">
			<button className="px-6 py-2 font-bold text-lg rounded  bg-yellow-400  text-gray-900">Courses</button>
		</div>
	 
	</div>
</header>
  )
}
