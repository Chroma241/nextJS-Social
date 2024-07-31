import React from 'react';
import Link from 'next/link';
import styles from './style.module.css';

interface NavLink {
    url: string;
    text: string;
    sublink?: NavLink[];
}

interface NavLinksProps {
    links: NavLink[];
    lng: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, lng }) => {
    const renderLinks = (links: NavLink[], lng: string) => {
        return (
            <ul className="flex">
                {links.map((link, index) => (
                    <li key={index} className={`${styles.menuItem} ${''}` }>
                        <Link href={`/${lng}${link.url}`}>
                            {link.text}
                        </Link>
                        {link.sublink && link.sublink.length > 0 && (
                            <ul className={`${styles.submenu} ${''}`} >
                                {link.sublink.map((sublink, index) => (
                                    <li key={index} className={`${styles.menuItem} ${''}` }>
                                        <Link href={`/${lng}${sublink.url}`}>
                                            {sublink.text}
                                        </Link>
                                        {sublink.sublink && sublink.sublink.length > 0 && (
                                            <ul className={`${styles.submenu} ${''}`}>
                                                {renderLinks(sublink.sublink, lng)}
                                            </ul>
                                        ) }
                                    </li>
                                
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return <nav className='flex space-x-4'>{renderLinks(links, lng)}</nav>;
};

export default NavLinks;
