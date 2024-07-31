import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useTranslation } from '../../../i18n';




interface Post{
    id: number;
    content: string;
    image: StaticImageData;
    author: string;
    authorJob: string;
    authorImage: StaticImageData;
    date: string;
    like:number;
    share: number;
    comments?: Comment[];
}

interface Comment{
    id: number;
    content: string;
    author: string;
    authorImage: string;
    date: string;
    
    reply?: Comment[];
}


const Post = async ({ post, lng }: { post: Post; lng: string }) => {

    const { t } = await useTranslation(lng, 'post');
    return (
        <div className='p-4 flex flex-col gap-3  bg-white overflow-hidden rounded-md shadow-lg' >
            <div className='flex flex-row gap-3'>
            <Image alt='' src={post.authorImage} width={40} height={40} className='rounded-full'/>
                <div className='flex flex-col '>
                    <h2 className='text-md font-semibold'>{post.author} -{post.date}</h2>
                    <p className='text-sm'>{post.authorJob}</p>
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <p className='text-gray-600'>{post.content}</p>

                <div className=''>
                <Image src={post.image} alt="" objectFit='cover'  className='rounded-md min-h-full' />
                </div>
                
            </div>

            <div>
                <span>
                    <i></i> {t('liked')} {`(${post.like})`}
                </span>

                <span>
                    <i></i> {t('comment')} {`(${post.comments?.length})`}
                </span>

                <span>
                    <i></i> {t('share')} {`(${post.share})`}
                </span>
            </div>
           

        </div>
    );
}

export default Post;
