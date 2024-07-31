import React from 'react';
import Image from 'next/image';
import profileImage from '@/../public/profile-template.jpg';
import { useTranslation } from '../../../i18n';
import BackgroundImage from '@/../public/images/bg/01.jpg';

interface HeaderProps {
    lng: string;
}

interface Link {
    icon?: string;
    link: string;
    text: string;
}

const UserInfo: React.FC<HeaderProps> = async ({ lng }) => {

    const { t } = await useTranslation(lng, 'userInfo');

    const links = t('links', { returnObjects: true }) as Link[];


    
    return (
        <div className='flex flex-col justify-center items-center gap-3  bg-white overflow-hidden rounded-md shadow-lg'>
            <Image src={BackgroundImage} alt='' className='w-full h-14' />
            <Image src={profileImage} alt='' width={60} className='-mt-7' />

            <div className='flex flex-col justify-center items-center p-5' >
                <h1 className='text-2xl font-semibold'>Sam Lanson</h1>
                <p className='text-xs pb-2'>Web Developer at Webestica</p>

                <p className='text-sm text-center pb-4'>I'd love to change the world, but they won’t give me the source code.</p>

                <div className='flex w-full gap-3'>
                    <div className='w-1/3 text-center text-xs' >
                        <p>256</p>
                        <p>{t('stats.posts')}</p>
                    </div>
                    <div className='w-1/3 text-center text-xs'>
                        <p>2.5K</p>
                        <p>{t('stats.followers')}</p>
                    </div>
                    <div className='w-1/3 text-center text-xs'>
                        <p>365</p>
                        <p>{t('stats.following')}</p>
                    </div>
                </div>

                <div className='w-full ps-4'>
                    <ul className='flex flex-col items-start w-full gap-2 pt-4'>
                        {links.map((link, index) => (
                            <li key={index} className='text-sm flex items-center gap-1'>
                                {link.icon && (
                                    <span className='inline-block w-6 h-6'>
                                        <Image src={link.icon} alt='' width="19" height="20" />
                                    </span>
                                )}
                                <a href={link.link}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default UserInfo;
