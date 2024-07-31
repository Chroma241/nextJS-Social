import { useTranslation } from '../../../i18n';
import { LanguageSwitcher } from '../languageSwitcher';
import SearchInput from './SearchInput';
import NavButton from './NavButton';
import NavProfile from './NavProfile';
import NavLinks from './NavLinks';
import logo from '../../../../../public/logo.svg';
import Image, { StaticImageData } from 'next/image';
import { MdChat } from 'react-icons/md';
import { FaBell } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import profileTemplate from '@/../public/profile-template.jpg'

interface NavLinks{
    url: string;
    text: string;
    sublink?: NavLinks[];
}

interface User {
    name: string
    job: string
    email: string
    image: StaticImageData
}

const user:User = {
    name: 'Lori Ferguson',
    job: 'Web Developer',
    email: '',
    image: profileTemplate
}

interface HeaderProps {
    lng: string;
}

export const Header: React.FC<HeaderProps> = async ({ lng }) => {

    const { t } = await useTranslation(lng, 'navlink');

    const navLinks = t('links', { returnObjects: true }) as NavLinks[];



    return (
        <header className='bg-white'>
            <div className='container mx-auto flex items-center justify-evenly p-4 sm:justify-evenly lg:justify-normal lg:gap-0 gap-3'>
            <div className='flex gap-4 items-center md:w-9/12 lg:w-7/12'>
                <Image src={logo} alt="" className='h-8 w-auto'/>
                <SearchInput/>
            </div>
            <div className='hidden sm:ml-6 lg:block lg:w-2/12'>
                <nav className='flex space-x-4'>
                    <NavLinks links={navLinks} lng={lng}  />
                </nav>
            </div>
            <div className='lg:hidden sm:ml-4  md:block  '>
                <NavButton>
                    <IoIosMenu />
                </NavButton>
            </div>
            
            <div className='flex gap-2 items-center'>
                <NavButton>
                    <MdChat/>
                </NavButton>
                <NavButton>
                    <IoSettingsSharp />
                </NavButton>
                <NavButton>
                    <FaBell />
                </NavButton>
                <NavProfile user={user}/>
                    
            </div>
            </div>
        </header>
    );
};
