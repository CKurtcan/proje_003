import React, { useState } from 'react';
import RaceImage from '../components/molecules/RaceImage';
import background from '../images/agac.jpg';
import { FaUser } from "react-icons/fa";

function EnterPanel(){

    const [hovered, setHovered] = useState(false);

    return(

        <div className="container container-sm text-center mt-5" 
        style={{
            border: '1px solid orange', 
            width: '480px', 
            height: '600px', 
            borderRadius: '5%', 
            backgroundImage: `url(${background})`, // Template literal kullanımı
            backgroundSize: 'cover', 
            backgroundPosition: 'center'
        }}>
            <div className="mt-4 mb-2" style={{color: 'orange'}}><h1>Knowledge Challenge</h1></div>
            <div className="mt-2" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                <RaceImage/>
            </div>
            <div className='mt-4'>
                <FaUser style={{color: '#ffffff', width: 20, height: 20}}/>
                <label className="form-label mb-3" style={{color: 'white', fontWeight: 'bold'}}>Username</label>
                <input className="form-control" type="text" placeholder= 'Enter your username'style={{backgroundColor: 'azure'}}/>
            </div>
            <div>
                <button className='mt-3' style={{backgroundColor: hovered ? 'darkblue' : 'blue', color:'white', width: 460, height: 40, borderRadius: 10}}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                ><h3>Start</h3></button>
            </div>
        </div>
    )
}

export default EnterPanel;