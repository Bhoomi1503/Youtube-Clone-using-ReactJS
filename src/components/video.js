import React from 'react'
import './video.css';
import { FaYoutube } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import cyber from '../images/cyber.png';
import bugbounty from '../images/bugbounty.png';
import book from '../images/book.png';
import design from '../images/design.png';

import figma from '../images/figma.png';
import htmlcss from '../images/htmlcss.png';
import java from '../images/java.png';
import portfolio from '../images/portfolio.png';
import react from '../images/react.png';
import XSS from '../images/XSS.png';
import resolve from '../images/resolve.png';
import reactjs from '../images/reactjs.png';
function video() {
  return (
    <div className='sec1'>
        <div className='sec'>
        <FaYoutube className='icon1'/>
        <h1>YOUTUBE</h1>
        <input type='text' className='inputtext' placeholder='Search...'  /><IoSearch className='icon2' />
        </div>
        <div className='con1'>
            <div className='content1'>
                <img src={cyber} className='img'/>
                <p>Cyber Security</p>
                <h6>2 years ago</h6>
            </div>
            <div className='content1'>
                <img src={bugbounty} className='img'/>
                <p>Bug Bounty</p>
                <h6>3 years ago</h6>
            </div>
            <div className='content1'>
                <img src={book} className='img'/>
                <p>The Power of Silence</p>
                <h6>1 years ago</h6>
            </div>
            <div className='content1'>
                <img src={design} className='img'/>
                <p>Figma Tutorial</p>
                <h6>2 years ago</h6>
            </div>
        </div>
        <div className='con1'>
            <div className='content1'>
                <img src={figma} className='img'/>
                <p>Figma Tutorial</p>
                <h6>1 years ago</h6>
            </div>
            <div className='content1'>
                <img src={htmlcss} className='img'/>
                <p>HTML & CSS</p>
                <h6>5 years ago</h6>
            </div>
            <div className='content1'>
                <img src={java} className='img'/>
                <p>Advanced Java</p>
                <h6>2 years ago</h6>
            </div>
            <div className='content1'>
                <img src={react} className='img'/>
                <p>React Tutorial</p>
                <h6>7 years ago</h6>
            </div>
        </div>
        <div className='con1'>
            <div className='content1'>
                <img src={portfolio} className='img'/>
                <p>Portfolio Design</p>
                <h6>3 years ago</h6>
            </div>
            <div className='content1'>
                <img src={reactjs} className='img'/>
                <p>React JS</p>
                <h6>9 minutes ago</h6>
            </div>
            <div className='content1'>
                <img src={resolve} className='img'/>
                <p>Davince Resolve</p>
                <h6>25 seconds ago</h6>
            </div>
            <div className='content1'>
                <img src={XSS} className='img'/>
                <p>XSS Attack</p>
                <h6>19 minutes ago</h6>
            </div>
        </div>
    </div>
  )
}

export default video
