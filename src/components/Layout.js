import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


// Layout includes header with menu and A footer 
function Layout(props){
    return(
        <React.Fragment>
            <Navbar />
            {props.children}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;