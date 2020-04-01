import React from 'react';

class Weather extends React.Component{
	render(){
	return(
    <div>
    <center>
       { this.props.city && this.props.country && <div className="abc"> 

       { this.props.city && this.props.country && <p> Location: 

         <span> {this.props.city }, {this.props.country } </span> </p> }

        { this.props.temperature && <p>Temperature: 

          <span> {this.props.temperature } </span> </p> }

        { this.props.humidity && <p>Humidity: 

           <span> {this.props.humidity }  </span> </p> }

        {this.props.description && <p>Conditions: 

        	<span> {this.props.description }  </span> </p> }
        	
        {this.props.error && <p className ="erro">{this.props.error}</p>}
        </div> }
      </center>
      </div>
	);
	}
};

export default Weather;