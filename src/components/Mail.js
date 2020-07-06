import React from 'react';
import './styles/Mail.css';
import logo from '../images/salesloft-vector-logo.png';
// This is the format of how it looks an email in 
// the platform, is the main structure of the visualization and when ypo want to create new
class Mail extends React.Component {
    render(){
        return(
            <div className="Mail">
            <div className="Mail__header">
              <img src={logo} alt="Logo de la empresa" />
            </div>
    
            <div className="Mail__section-info">
              <h1>{this.props.email}</h1>
              <h2>{this.props.subject}</h2>
                <p>{this.props.body}</p>
            </div>
    
            <div className="Mail__footer">Salesloft</div>
          </div>
           
        )
    }
}
export default Mail;