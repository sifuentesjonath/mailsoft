import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import salesloftLogoImage from '../images/salesloft-vector-logo.png';
import mailImage from '../images/correo.png';



//This component is the first one is shown, as a welcome page to the app.
//it just shows the tittle and a button that redirects you to the main page of the Mails.
export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={salesloftLogoImage}
                alt="Salesloft Logo"
                className="img-fluid mb-2"
              />

              <h1>Email Management System</h1>
              <Link className="btn btn-primary" to="/mails">
                Start
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={mailImage}
                alt="Mail"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}