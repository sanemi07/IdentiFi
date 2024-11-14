"use client";

import React, { useState, useEffect } from "react";
import Logo from './_components/logo'
import { Menu } from './_components/menu'
import ActionButtons from "./_components/action-buttons";

const Navbar = () => {
  const navbarclasses=`flex items-center justify-between space-x-10 bg-white h-14
  sticky top-0 z-0 border-b border-gray-200
  
  `
  return (
    <div className={navbarclasses}>
      <div className='flex items-center justify-center space-x-4'>
        <Logo/>
        <Menu/>
      </div>
      <ActionButtons/>
        
    </div>
  )
}

export default Navbar