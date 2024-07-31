import React from 'react';


const NavButton = ({children} : Readonly<{children: React.ReactNode}>) => {
    return (
        <div className='flex items-center space-x-2 bg-slate-200 rounded-sm p-2 h-full'>
            {children}
        </div>
    );
}

export default NavButton;
