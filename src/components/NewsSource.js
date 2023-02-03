import React from "react";
import News from '../NewsSources.json';
import { Component } from 'react';
import '../App.css';
//Creating a compoment that renders a table and populates it with items from JSON
//News compoment gets iterated using keyword and index
export class TableTest extends Component {
    render() {
        return (
            <>
                <div>
                    <table border={1} className='Table' >
                        <tbody className="Tablecontent">
                            <tr>
                                <th>Organisation</th>
                                <th>Country</th>
                                <th>Factuality</th>
                            </tr>
                            {News.news.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.country}</td>
                                    <td>{item.factuality}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default TableTest;