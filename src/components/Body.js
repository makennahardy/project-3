import React from 'react'
import pugGif from '../images/flying_pug.webp';
import horseyGif from '../images/horsey.webp';
import catGif from '../images/flying_cat.webp';
import squirrelGif from '../images/flying_squirrel.webp';
import { Outlet, Link } from "react-router-dom";
import '../styles.css'
export const Body = () => {
    return (
        <div>
        <div className = 'bodyContainer'>
            <div className ='body-header'>
                <h1> Choose Your Fighter </h1>
            </div>
            <nav>
                <div className = 'body-grid'>
                
                    <div className='fighter'><Link to="/dogboss"><img src={pugGif} className = 'giffy' alt="pug-gif" /></Link></div>
                    <div className='fighter'><Link to="/horseboss"><img src={horseyGif} className = 'giffy' alt="horsey-gif" /></Link></div>
                
                    <div className='fighter'><Link to="/catboss"><img src={catGif} className = 'giffy' alt="cat-gif" /></Link></div>
                    <div className='fighter'><Link to="/squirrelboss"><img src={squirrelGif} className = 'giffy' alt="squirrel-gif" /></Link></div>
                
                </div>
            </nav>
      <Outlet />
      
      
         
                
            
        </div>
             <div className="footer-holder">
                    <div className="footer">
                        <a className="github" href="https://github.com/makennahardy/project-3">GitHub</a>
                    </div>
            </div>  
        </div>
        
        
    )
}