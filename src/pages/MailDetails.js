import React from 'react';
import './styles/MailDetails.css';
import logo from '../images/salesloft-vector-logo.png';
import Mail from '../components/Mail';
import emails from '../emails.json';
import {Link} from 'react-router-dom';



function MailDetails () {
  
// page that shows the detail of the email, it has hardcoded the information of id 1
// also has a button to return to the mails page 
    return (
        <div>
      <div className="MailDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={logo} alt="Logo de la empresa" className="MailDetails_logo"/>
            </div>
            <div className="col-6 MailDetails__hero-attendant-name">
              <h1>
                {emails[1].sender} {emails[1].subject}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Mail
              email={emails[1].sender}
              subject={emails[1].subject}
              body= {emails[1].body}
            />
            <Link className="btn btn-danger" to="/mails">
               Return
              </Link>
          </div>
        </div>
      </div>
    </div>
    )
}

export default MailDetails;
