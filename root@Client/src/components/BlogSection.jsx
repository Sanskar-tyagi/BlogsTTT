import React from 'react'
import Tabs from './Tabs'
import BlogCard from './BlogCard'

function BlogSection() {
    const data = [
        {
          title: 'A Changing World Order',
          desc: 'The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including...',
          img: 'https://csis-website-prod.s3.amazonaws.com/s3fs-public/publication/Ray_Dalio_book_cover_excerpt_0.jpg?VersionId=cJlJh6Y7qLirOILvmNi9fYO4R6QjlMFw',
          dd: 'musing ',
          read: '2 ',
          views: '102 ',
          date: 'August 2',
        },
        {
          title: 'Indian v/s Australia',
          desc: (
            <>
              Think about it - this cricket series was akin to therapy <br />
              laying our childhood trauma up top, working with it slowly and surely over two m...
            </>
          ),
          img: 'https://c.ndtvimg.com/2023-10/aje86si8_kohli-rahul_625x300_08_October_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605',
          dd: 'thought ',
          read: '1',
          views: '156',
          date: 'January 21',
        },
        {
          title: 'Write To Build',
          desc: (
            <>
              Writing is the first step to create: <br />
              - stories <br />
              - products <br />
              - companies
            </>
          ),
          img: 'https://miro.medium.com/max/4800/0*zanP0hUuvKe2Shc4',
          dd: 'thought ',
          read: '1',
          views: '228',
          date: 'November 18',
        },
      ];
      
  return (
    <div className='px-6  '>
        <Tabs/>
        {data.map((item)=>{
          return  <BlogCard data={item}/> 
        })}
    </div>
  )
}

export default BlogSection