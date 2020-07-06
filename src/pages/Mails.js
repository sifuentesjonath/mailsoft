import React from 'react';
import {Link } from 'react-router-dom';
import {Dropdown, Menu} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

import './styles/Mails.css';
import salesLoftLogo from '../images/salesloft-vector-logo.png'
import MailsList from '../components/MailsList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import emails from '../emails.json';
import TagsList from '../components/TagsList';

// Constant of options to the dropdown menu 
const options = [
    { key: 1, text: 'Move to Trash',icon: 'trash', value: 1 },
    { key: 2, text: 'Download as a zip',icon:'folder', value: 2 },
    { key: 3, text: 'Share',icon:'share alternate', value: 3 },
  ]

//this class is going to render the list of mails of the json.   will have a loader to better UX to the user that gives a sense of 
//quick response. -JONATHAN SIFUENTES-

class Mails extends React.Component {
    state = {
        loading: true,
        error: null,
        data : undefined
    };

//  Here i use the component life cycle methods to preset the data to call the JSON.
//-JONATHAN SIFUENTES-

    componentDidMount () {
        this.intervalId= setTimeout(this.setState({loading: false, data: emails}), 10000);

    }
    render(){
        if(this.state.loading === true && !this.state.data){
            return <PageLoading />;
        }
        if (this.state.error){
            return <PageError error = {this.state.error} />;
        }
        return (
            <React.Fragment>
                <div className="Mails">
                    <div className="Mails__hero">
                        <div className="Mails_container">
                            <img  className="Hero_logo"  src={salesLoftLogo} alt="Logo" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className ="Tags_container col-2">
                            <TagsList />
                        </div>
                    
                        <div className="Mails__container col-10 ">
                                <div className="Mails__buttons ">
                                         <Link to="/mails/new" className="btn btn-primary">
                                            New Mail
                                        </Link>
                                    <div  className=" btn  second-btn">
                                        <Menu compact>
                                        <Dropdown text='Actions to selected items' options={options} simple item />
                                        </Menu>
                                    </div>
                                </div>            
                            <MailsList  />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Mails;