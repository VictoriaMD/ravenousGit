import React from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {
    return(
        <div className="progress-bar">
       <Filler />
        </div>
    )
};

const Filler = (props) {
    return <div className="filler" />
    
};