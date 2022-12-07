import React,{useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import '../styles.css';
import {Winner} from './Winner';
import cat from '../images/bob-cat.gif';

export const SquirrelBoss = () => {
    
      const navigate = useNavigate();
      const [size, setSize] = useState(500);
      const navigateToWin = () => {
          navigate('/winner');
      }
      
    return (
        <div className='bodyContainer'>
            
            <button onClick={() => {(size===0) ? navigateToWin() : setSize(size - 100)}}>Fight The Beast!!</button>
            <div className='bossHolder'>
                <img src ={cat} className='boss' width={size} height={size} alt='mousey'/>
            </div>
            <Routes>
                <Route path='/winner' element={<Winner />} />
            </Routes>
        </div>
    )
}