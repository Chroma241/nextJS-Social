import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { IoIosAdd } from "react-icons/io";


interface user {
    image:StaticImageData,
    name:string,
    job:string
}

const Item = ({User}: {User:user}) => {
    return (
        <div className='flex gap-2 justify-center items-center'>
            <Image src={User.image} alt="" width={30} height={30} className='rounded-full w-2/12' />
            <div className='w-8/12'>
                <p>{User.name}</p>
                <p>{User.job}</p>
            </div>
            <div>
                <a href='#' className='bg-blue-100 hover:bg-blue-400 flex justify-center items-center gap-2 px-2 py-2 rounded-full'>
                    <IoIosAdd className='text-2xl hover:text-white text-blue-600'/>
                </a>
            </div>
        </div>
    );
}

export default Item;
