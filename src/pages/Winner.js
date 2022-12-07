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
        <div className='bodyContainer'>
            <h2>WINNER</h2>
            <button onClick={() => {navigateToHome()}}>Go Home</button>
        </div>
    )
}