import React from 'react'
import MainNavigation from '../components/main-navigation';
import { Outlet } from 'react-router-dom';

export default function layout(props) {
  return (
    <div>
          <MainNavigation />
          <main>
       <Outlet />
      </main>
      
    </div>
  )
}
