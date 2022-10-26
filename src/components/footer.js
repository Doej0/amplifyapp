import React from 'react';
import logo from "../FullLogo_Transparent.png";
import {Image} from "semantic-ui-react";

export default function Footer(){
    return(
       <footer className="w3-container w3-theme w3-large w3-padding-16">
          <Image src={logo} alt="Vee Johnson Web Dev" className='ui tiny centered image'/>
       </footer> 
    );
}