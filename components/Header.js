/*
 * Project: Jacqueline Taylor & Friends
 *
 * Created on Sun Apr 24 2022
 *
 * Filename: Header.js
 *
 * Copyright (c) 2022 Bujisoft
 */
import Image from 'next/image';

/* eslint-disable @next/next/no-html-link-for-pages */
const Header = () => {
  return (
    <header className='p-3 gradient text-white'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <a
            href='/'
            className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none '
          >
            <Image 
              src="/images/white-logo.png"
              width={148}
              height={60}
              alt="Jacqueline Taylor & Friends"
            />
          </a>
          {/* Remove for production */}

          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
          {/* 
          <li>
               <a href='/' className='nav-link px-2 text-secondary'>
                Home
              </a> 
            </li> */}
            <li>
              <a href='/about' className='nav-link px-2 text-white'>
                About
              </a>
            </li>
            <li>
              <a href='/features' className='nav-link px-2 text-white'>
                Features
              </a>
            </li>
            <li>
              <a href='/login' className='nav-link px-2 text-white'>
                Login
              </a>
            </li>
            <li>
              <a href='/signup' className='nav-link px-2 text-white'>
                Signup
              </a>
            </li>
          </ul>
         </div> 
      </div>
    </header>
  );
};
export default Header;
