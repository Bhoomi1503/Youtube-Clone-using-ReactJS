import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { LuMusic4 } from "react-icons/lu";
import { GrHistory } from "react-icons/gr";
import { IoLaptopOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { FaWandMagicSparkles } from "react-icons/fa6";
import './sidebar.css';

function sidebar() {
  return (
    <div className='con'>
        <GiHamburgerMenu className='icons' />
        <TiHome className='icons' />
        <SiYoutubeshorts className='icons' />
        <LuMusic4 className='icons' />
        <GrHistory className='icons' />
        <IoLaptopOutline className='icons' />
        <IoRocketOutline className='icons' />
        <BiLike className='icons' />
        <FaWandMagicSparkles className='icon' />
      
    </div>
  )
}

export default sidebar
