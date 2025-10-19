'use client'; 

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LanguageSwitcher from '@/LanguageSwitcher';
import useDarkMode from './useDarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Link from 'next/link';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations('HomePage');
  const [theme, toggleTheme] = useDarkMode();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="fixed w-full z-10 shadow-md bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 md:py-4">
   
        <div className="flex items-center gap-2 md:gap-4">
          <Image
            src="/image/image 9.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </div>


        <nav className="flex-1 flex items-center justify-end md:justify-between ml-4 md:ml-8">
       
          <ul className="hidden md:flex w-full justify-between font-medium text-gray-800 dark:text-white text-sm lg:text-base">
            <Link href="/"><li className="hover:text-yellow-500 cursor-pointer transition-colors">{t('a1')}</li></Link>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">{t('a2')}</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">{t('a3')}</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">{t('a4')}</li>
            <Link href="/news"><li className="hover:text-yellow-500 cursor-pointer transition-colors">{t('a5')}</li></Link>
            <Link href="/vakan"><li className="hover:text-yellow-500 cursor-pointer transition-colors">{t('a6')}</li></Link>
          </ul>

     
          <div className="block md:hidden ml-2">
            <div
              onClick={handleClick}
              className="cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              role="button"
              aria-label="Open menu"
            >
              <Image alt="Menu" width={20} height={20} src="/image/menu.png" />
            </div>

            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  'aria-labelledby': 'mobile-menu-button',
                },
              }}
            >
              <MenuItem onClick={handleClose}><Link href="/"><span>{t('a1')}</span></Link></MenuItem>
              <MenuItem onClick={handleClose}><Link href="/news"><span>{t('a5')}</span></Link></MenuItem>
              <MenuItem onClick={handleClose}><Link href="/vakan"><span>{t('a6')}</span></Link></MenuItem>
            </Menu>
          </div>

        
          <div className=" ml-4 lg:ml-6">
            <LanguageSwitcher currentLang={locale} />
          </div>

         
          <button
            onClick={toggleTheme}
            className="ml-3 md:ml-6 lg:ml-9 p-1.5 md:p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {theme === 'dark' ? (
              <DarkModeIcon sx={{ fontSize: 20 }} className="md:text-2xl" />
            ) : (
              <WbSunnyIcon sx={{ fontSize: 20 }} className="md:text-2xl" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
