import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './Style.css';

function Booked()
{
const[cname,setcname]=useState();
useEffect(()=>{

})
return(
    <div>
          <div className='header'>
        <header><i><img src={logo} /></i><h1>Newton School</h1></header>
        <hr></hr>
        </div>
        <div className="bbody">
        <h1>Welcome{}</h1>
        You have already booked a room.
        <h2 className="cdetail">Your room details are as follows:</h2>
        Hostel No.<b>{}2</b>
        <br/>
        Room No.<b>{}2</b>
        </div>
    </div>
)

}
export default Booked;