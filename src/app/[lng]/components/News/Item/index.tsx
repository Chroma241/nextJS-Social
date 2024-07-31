import React from 'react';

interface Article {
    title: string;
    content: string;
    author: string;
    link: string;
    date: string;
}

const Item = ({article} : {article: Article}) => {
    return (
        <div>
            <h1 className='text-1xl font-semibold'>{article.title}</h1>
            <p className='text-sm text-gray-500'>{article.date}</p>
        </div>
    );
}

export default Item;
