import React from 'react';

import './SideDrower.css';

const sideDrower = props => {
     let drowerClasses = 'side_drower';
     if (props.show) {
         drowerClasses = 'side_drower open';
     }
     return ( 
    <nav className={drowerClasses}> 
        <ul>
            <li>
                <a href="/">Products</a>
            </li>
            <li>
                <a href="/">Users</a>
            </li>
        </ul>
    </nav> )
}

export default sideDrower;