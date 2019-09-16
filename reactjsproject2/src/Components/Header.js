import React from 'react';
//import './Index.html';
import './Style.css';
import Headerheading from './Headerheading';
import Headerimage from './Headerimage';
import Userbutton from './Userbutton';
export default class Header extends React.Component{
    render()
    {
        return(
            <div className="Header">
            <div class="container">
                <div class="row">
            <Headerimage/>
            <Headerheading/>  
            </div>
            <div class="row">
                <Userbutton/>
            </div>
    </div>   
    </div>
           
        )
    }
}