import React from 'react';
import '../App.css';
import NewsBox from '../components/box1';
import NewsBox2 from '../components/box2';
import NavBar from '../components/navbar';

 export default function Home() {

    return(
        <div className='Home'>
            <NavBar/>
            
            <h1 className='Title'>Current News</h1>
            <div className='TopicBox'>
                <div>
                 <h1>Europe</h1>
                 <div className='Hombebox1'>
                <NewsBox/>
                </div>
                </div>
                <div>
                <h1>North America</h1>
                <div className='Hombebox1'>
                    
                <NewsBox2/>
                </div></div>
            </div>
            
        </div>
    )
}

