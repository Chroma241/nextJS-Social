import React from 'react';
import { useTranslation } from '../../../i18n';
import Item from './Item';

interface Article {
    title: string;
    content: string;
    author: string;
    link: string;
    date: string;
}

const News = async ({lng}: {lng: string}) => {

    const { t } = await useTranslation(lng, 'blog');

    const articles = t('article',{returnObjects: true}) as Article[];

    return (
        <div className='flex flex-col justify-center gap-3  bg-white overflow-hidden rounded-md shadow-lg p-4'>
            <h1 className='text-2xl font-semibold'>{t("main.todayNews")}</h1>

            <div className='flex flex-col gap-2'>
                {articles.map((article:Article, index:number) => (
                    <Item key={index} article={article}/>
                ))}
            </div>
        </div>
    );
}

export default News;
