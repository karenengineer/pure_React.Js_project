
import React from 'react';
import './DrowerToggleButton.css';

const drowerToggleButton = props => (
<button className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line"/>
    <div className="toggle-button__line"/>
    <div className="toggle-button__line"/>
</button>
);

export default drowerToggleButton