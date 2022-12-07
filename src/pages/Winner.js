import React from 'react';
import {Home} from "./Home";
import '../styles.css'
import {Routes, Route, useNavigate} from 'react-router-dom';
export const Winner = () => {
    
    
    const navigate = useNavigate();
      const navigateToHome = () => {
          navigate(-2);
      }
    
    
    return (
        <div className='bodyContainer-w'>
            <h2 className="ult-winner">WINNER</h2>
            <button className='home-button' onClick={() => {navigateToHome()}}>Go Home</button>
        </div>
    )
}