//import React, {useState, useEffect} from 'react';
import '../App.css';
//import '../Landing.css';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/img/pngegg.png'
import LandingBtn from '../components/landingbtn';

export default function Landing() {
   const navigate = useNavigate();
    function handleClick(){
       navigate('/home')  
    }

    return(
        <div>
            <div className='landingst'>
               <img src={Logo} className='Gaga' alt='logo'></img>
              <h1 className='landingheader'>Welcome to Politinfo</h1>
            </div>
            <div className='landingt' ><p className='landingpar'>Stay informed, know what the news are and who the source of the news is</p></div>
            <LandingBtn className='button' link={handleClick} account='Start learning now'/>
        </div>
    )
}
