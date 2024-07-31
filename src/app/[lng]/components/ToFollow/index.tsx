import React from 'react';
import Item from './Item';
import avatar01 from '@/../public/images/avatar/01.jpg'
import avatar02 from '@/../public/images/avatar/02.jpg'
import avatar03 from '@/../public/images/avatar/03.jpg'
import avatar04 from '@/../public/images/avatar/04.jpg'
import avatarPlaceholder from '@/../public/images/avatar/placeholder.jpg'
import { StaticImageData } from 'next/image';
import { useTranslation } from '../../../i18n';

interface user {
    image:StaticImageData,
    name:string,
    job:string
}

const ToFollow = async ({lng}: {lng: string}) => {

    const listToFollow = [
        {
            image:avatar01,
            name: 'Judy Nguyen',
            job: 'News anchor'
        },
        {
            image:avatar02,
            name: 'Amanda Reed',
            job: 'Web Developer'
        },
        {
            image:avatar03,
            name: 'Billy Vasquez',
            job: 'News anchor'
        },
        {
            image:avatar04,
            name: 'Lori Ferguson',
            job: 'Web Developer'
        },
        {
            image:avatarPlaceholder,
            name: 'Carolyn Ortiz',
            job: 'News anchor'
        },
    ]


    const { t } = await useTranslation(lng, 'toFollow');


    return (
        <div className='flex flex-col justify-center gap-2  bg-white overflow-hidden rounded-md shadow-lg'>
            <div>
            <h1 className='text-2xl font-bold p-4'>{t('title')}</h1>
            </div>
            <div className='p-3'>
                <div className='flex flex-col gap-3'>
                    {listToFollow.map((data:user,index) => {
                        return <Item key={index} User={data} />
                    })}
                </div>
            </div>
            <div className='w-full flex justify-center items-center gap-2'>
                <button className='bg-blue-100 text-blue-600 m-4 py-2 w-full'>{t('viewMore')}</button>
            </div>
        </div>
    );
}

export default ToFollow;



