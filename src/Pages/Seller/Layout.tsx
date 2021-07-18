import { ClerkProvider } from '@clerk/clerk-react';
import React from 'react';
import NavOne from '../../components/User/BottomNav/NavOne';

function Layout(props: any) {
  return (
    <div className='max-w-5xl	align-center mx-auto'>
      {props.children}
      <div className='md:hidden'>
        <NavOne />
      </div>
    </div>
  );
}

export default Layout;
