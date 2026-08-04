import React from 'react'
import { IoIosStar } from "react-icons/io";

const Card = () => {
    return (
        <div className='shadow shadow-[#bbb] bg-green-50 rounded-lg'>
            <div className='flex gap-1 bg-[#eee] p-3 rounded-lg'>
                <div>
                    <img className='h-12 rounded-[50%]' src="https://avatars.githubusercontent.com/u/256261357?v=4" />
                </div>
                <div>
                    <h3 className='text-md font-semibold'>Sarah</h3>
                    <h3 className='text-sm'>Teacher</h3>
                </div>
            </div>
            <div className='mt-3 p-3'>
                <div className='flex text-yellow-500'>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                </div>
                <p className='text-sm mt-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti molestiae quo rerum voluptatum neque unde sunt inventore rem et?
                </p>
            </div>
        </div>
    )
}

export default Card