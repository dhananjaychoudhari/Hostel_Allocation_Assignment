import React from 'react';
import './Style.css';
import './fonts/material-icon/css/material-design-iconic-font.min.css';
import logo from './logo.svg';
import { facebookProvider, googleProvider } from './authmethod';
import SocialMediaAuth from './authentication';
function LoginPage()
{
    const handleOnClick=async(provider)=>{
        const res= await SocialMediaAuth(provider);
        console.log(res);

    }

    return(
        <div>
        
        <div className='header'>
        <header><i><img src={logo} /></i><h1>Newton School</h1></header>
        <hr></hr>
        </div>
        <div className='body'>
            <h2>Hostel Allocation</h2>
            <div className="social-login">
                        <span className="social-label">Please Sign-in:</span>
                        <ul className="socials">
                            <li><a><i onClick={()=>handleOnClick(facebookProvider)} className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                            {/* <li><a href="https://www.twitter.com"><i onClick={handleOnClick} className="display-flex-center zmdi zmdi-twitter"></i></a></li> */}
                            <li><a><i onClick={()=>handleOnClick(googleProvider)} className="display-flex-center zmdi zmdi-google"></i></a></li>
                        </ul>
                    </div>
        </div>
        </div>
    )

}
export default LoginPage;