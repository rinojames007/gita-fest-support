import React from 'react'
import WinnerBox from './WinnerBox'

const EventWinners = (props) => {
  return (
    <div className="flex justify-center items-center sm:w-[48%] md:w-[30%] w-[90%] my-6 shadow-xl shadow-blue-700 rounded-xl">
        <div className='bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  w-full'>
        
            <div className="event-name text-white">
                <h1 className='font-bold text-xl text-center mt-2 underline underline-offset-4'>{props.EventName}</h1>
            </div>
            <div className="winners flex flex-col items-center">
                <WinnerBox position="1st" name="Aryan kumar Mohapatra" RollNum="2102040" prize="5000"/>
                <WinnerBox position="2nd" name="Rohan kumar Das" RollNum="2102044" prize="3000"/>
                <WinnerBox position="3rd" name="Preeti Pragyan Sahu" RollNum="2102066" prize="1000"/>
            </div>
        </div>
    </div>
  )
}

export default EventWinners