import React from 'react';
import Post from '..';
import avatar01 from '@/../public/images/avatar/01.jpg';
import avatar02 from '@/../public/images/avatar/02.jpg';
import avatar03 from '@/../public/images/avatar/03.jpg';
import avatar04 from '@/../public/images/avatar/04.jpg';

import imagePost from '@/../public/images/post/1by1/01.jpg';
import imagePost2 from '@/../public/images/post/1by1/02.jpg';
import imagePost3 from '@/../public/images/post/1by1/03.jpg';

import { StaticImageData } from 'next/image';


interface PostType{
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

const posts:PostType[] = [

    {
        id: 1,
        content: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.",
        image: imagePost,
        author: 'Lori Ferguson',
        authorJob: 'Web Developer at Webestica',
        authorImage: avatar01,
        date: '4hr',
        share: 3,
        like:3,
        comments: [
            {
                id: 1,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                author: '<NAME>',
                authorImage: 'https://picsum.photos/id/1005/600/300',
                date: '2hr',
                reply: [
                    {
                        id: 1,
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        author: '<NAME>',
                        authorImage: 'https://picsum.photos/id/1005/600/300',
                        date: '2hr',
                        reply: []
                },
                ],
            }
        ],
    },
    {
        id: 2,
        content: "I'm so privileged to be involved in the @bootstrap hiring process! Interviewing with their team was fun and I hope this can be a valuable resource for folks! #inclusivebusiness #internship #hiring #apply",
        image: imagePost2,
        author: 'Judy Nguyen',
        authorJob: 'Web Developer at Webestica',
        authorImage: avatar02,
        date: '4hr',
        share: 3,
        like:12,
        comments: [
            {
                id: 1,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                author: '<NAME>',
                authorImage: 'https://picsum.photos/id/1005/600/300',
                date: '2hr',
                reply: [
                    {
                        id: 1,
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        author: '<NAME>',
                        authorImage: 'https://picsum.photos/id/1005/600/300',
                        date: '2hr',
                        reply: []
                },
                ]
            },
        ]
    },

    {
        id: 3,
        content: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.",
        image: imagePost3,
        author: 'Lori Ferguson',
        authorJob: 'Web Developer at Webestica',
        authorImage: avatar03,
        date: '1hr',
        share: 3,
        like:1,
        comments: [
            {
                id: 1,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                author: '<NAME>',
                authorImage: 'https://picsum.photos/id/1005/600/300',
                date: '12/12/2021',
                reply: [
                    {
                        id: 1,
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        author: '<NAME>',
                        authorImage: 'https://picsum.photos/id/1005/600/300',
                        date: '2hr',
                        reply: []
                    },
                ]
            },
        ]
    },

]




const PostList = ({lng}: {lng: string}) => {
    return (
        <div className='flex flex-col gap-5'>
            { posts.map((post) => (
                <Post key={post.id} post={post} lng={lng} />
            ))}
        </div>
    );
}

export default PostList;
