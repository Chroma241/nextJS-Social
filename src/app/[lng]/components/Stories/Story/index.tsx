import { StaticImageData } from 'next/image';
import React from 'react';

interface StoryProps {
    story: {
        id: number;
        name: string;
        image: StaticImageData;
    }
    
}

const Story= ({story} : StoryProps) => {
    return (
        <div className='w-full'>
        <div style={{backgroundImage: `url(${story.image.src})`, width:'150px', height:'120px'}} className='bg-center bg-cover  bg-no-repeat'>
            <h1>{story.name}</h1>
        </div>
        </div>
    );
}

export default Story;
