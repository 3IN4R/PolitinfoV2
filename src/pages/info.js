import React from 'react';
import '../App.css';
import NavBar from '../components/navbar';
import { TableTest } from '../components/newsource';

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
