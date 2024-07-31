import React from 'react';
import Image, { StaticImageData } from 'next/image';
import profileTemplate from '@/../public/profile-template.jpg'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '@/app/[lng]/components/ui/dropdown-menu';


interface User {
    name: string
    job: string
    email: string
    image: StaticImageData
}

const NavProfile = ({user}: {user: User}) => {
    return (
        <div className='flex items-center space-x-2 bg-slate-200 rounded-lg overflow-auto w-10 '>
            
            <DropdownMenu>
                <DropdownMenuTrigger className='focus:outline-none'>
                <Image src={user.image} alt="" className='w-12 border-none'/>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-56 p-3 m-3'>
                    <DropdownMenuGroup>
                        <div className='flex flex-row gap-2'>
                            <div className='flex flex-col items-center w-4/12'>
                            <Image src={user.image} alt="" className='h-auto w-full rounded-full'/>
                            </div>
                            <div className='flex flex-col w-8/12 items-left '>
                            <p className='text-md font-semibold'>{user.name}</p>
                            <p className='text-sm text-gray-400'> {user.job}</p>
                            </div>
                        </div>
                    </DropdownMenuGroup>
                    <DropdownMenuGroup className='flex justify-center w-full'>
                            <button className='bg-blue-100 text-blue-600 m-4 py-2 w-full'>View more</button>
                    </DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
</DropdownMenu>

        </div>
    );
}

export default NavProfile;

