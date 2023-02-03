import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import { TableTest } from '../components/NewsSource';

export default function Info() {

    return(
        <div>
            <NavBar/>
            <h1 className='Title'>Source checking</h1>
            <p>Below you can find a current list of known news sources and their countries of origin</p>
            <TableTest/>
        </div>
    )
}
