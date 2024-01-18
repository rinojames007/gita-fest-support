import React from 'react'

const Box = () => {
  return (
    <div className='border-2 my-4 rounded-xl'>
        <div className=" flex flex-col justify-center sm:items-start items-center sm:flex-row sm:space-x-2 space-y-3 sm:space-y-0 py-3 px-3 sm:p-[20px]">
            <div className="image w-full sm:w-[200px] rounded-lg flex justify-center items-center">
                <img src="./Demo-pics/event.jpeg" alt="Highlight image" className='rounded-lg w-full' />
            </div>
            <div className="description">
                <h1 className='font-bold text-xl'>Workshop</h1>
                <p className='font-semibold text-sm text-slate-400'>learn from industry experts</p>
                <p className='text-sm'>Immerse yourself in hands-on workshops on photography, culinary arts, coding and more.</p>
                <button className='text-sm p-1 bg-purple-100 rounded-md my-3'>Limited Seats</button>
                <div className="instructor flex space-x-1 items-center ">
                    <img src="./image-slider/03_img.jpeg" alt="instructor-1" className='w-[30px] h-[30px] rounded-full' />
                    <p>John Doe</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Box