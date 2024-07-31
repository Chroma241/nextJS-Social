import React from 'react';
import Link from 'next/link';
import { useTranslation } from '../../i18n';

const Page = async ({params: {lng}}: Readonly<{params: {lng: string}}>) => {

    const { t } = await useTranslation(lng, 'blog');
    return (
        <div>
            
            <h1>{t('title')}</h1>
            <Link href={`/${lng}`}>{t('to-back')}</Link>
        </div>
    );
}

export default Page;
