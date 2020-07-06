import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/correo.png';
import {Menu} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './styles/Navbar.css'
import '../global.css'


// Navbar showed in all the app, with an interavtive menu that let you navigate faster 
class Navbar extends React.Component {
    
    // this state is necessary to render the menu items 
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem } = this.state
        return (
            
            <div className="Navbar">
                <div className= "container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar_brand_logo" src={logo} alt= "logo"/>
                        <span className="font-weight-ligth">                                SalesLoft    </span>

                        <span className="font-weight-bold">Mailing App</span>                   
                    </Link>                    
                </div>
                <div className="Navbar_menu">
                <Menu>
                    <Link to="/mails">
                    <Menu.Item
                        name='Inbox'
                        active={activeItem === 'Inbox'}
                        onClick={this.handleItemClick}
                        >
                        Inbox
                        </Menu.Item>
                    </Link >
                    <Link to="/mails/new">
                    <Menu.Item
                        name='NewMail'
                        active={activeItem === 'NewMail'}
                        onClick={this.handleItemClick}
                        >
                        New Mail
                        </Menu.Item>
                    </Link>
                    <Link to="/mails/:mailId">
                    <Menu.Item
                        name='MailInfo'
                        active={activeItem === 'MailInfo'}
                        onClick={this.handleItemClick}
                        >
                        Mail Info
                        </Menu.Item>
                    </Link>                     
                </Menu>
                </div>

            </div>
        );
    }
}
export default Navbar;