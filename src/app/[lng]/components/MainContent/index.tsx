import React from 'react';
import Stories from '../Stories';
import UserInfo from '../UserInfo';
import ToFollow from '../ToFollow';
import { useTranslation } from '../../../i18n';
import News from '../News';
import PostList from '../Post/PostList';

interface HeaderProps {
    lng: string;
}



const MainContent: React.FC<HeaderProps> = ({ lng }) => {
    return (
        <div className='w-full px-3 xl:w-10/12 flex mx-auto gap-4 mt-4'>
            <div className=' hidden lg:block lg:w-3/12  ' id='user-info'>
                <UserInfo lng={lng}/>
            </div>
            <div className=' w-full lg:w-6/12 flex flex-col gap-3 ' id='user-info'>
                <Stories/>
                <PostList lng={lng}/>
            </div>
            <div className='hidden  lg:w-3/12  lg:flex flex-col gap-4' id='user-info'>
                <ToFollow lng={lng}/>
                <News lng={lng}/>
            </div>
        </div>
    );
}

export default MainContent;
