import React from 'react';
import './Style.css'
export default class Headerheading extends React.Component{
    render(){
        return(
     <div class="col-md-6 details">
      <blockquote>
        <h5><b>Fiona Gallagher</b></h5>
        <small><cite title="Source Title">Chicago, United States of America  <i class="icon-map-marker"></i></cite></small>
      </blockquote>
      <p>
        fionagallager@shameless.com <br/>
        www.bootsnipp.com <br/>
        June 18, 1990
      </p>
    </div>
        )
    }
}