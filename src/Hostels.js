import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import male from './male.png';
import female from './female.png';
import './Style.css';

function Hostels(){

    return(
        <div>
        <div className='header'>
        <header><i><img src={logo} /></i><h1>Newton School</h1></header>
        <hr></hr>
        </div>
        <div className="hbody">
        <h1>Choose Your Hostel</h1>
            <div className="gender">
               <div className="male">
               <button> <header><i><img src={male} /></i></header></button>
                </div>
                <div className="female">
               <button><header><i><img src={female} /></i></header></button>
                </div>
              </div>
          <div className="choose">
               
                <button>B1</button>
                <button>B2</button>
                 <button>B3</button>
            
              
                <button>B4</button>
                <button>B5</button>
                <button>B6</button>
             
                </div>
        </div>
        <div>

        </div>
        </div>
    )
}

export default Hostels;