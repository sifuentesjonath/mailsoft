import React from 'react';
import './styles/MailNew.css';
import PageLoading from '../components/PageLoading';
import header from '../images/salesloft-vector-logo.png';
import Mail from '../components/Mail';
import MailForm from '../components/MailForm';



// This page is rendered when you wnat to write a new email, it lets you confirm the sendind, and gives you 
// a previsualization of how it will look in the app 


class MailNew extends React.Component {
   state ={
       loading: false,
       error: null,
       form:{
           email:'',
           subject:'',
           body:''
       }, 
   };

   handleChange = e => { 
    this.setState({
        form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
        },
    });
   };

   
    render(){
        if (this.state.loading) {
            return <PageLoading />;
          }
      
          return (
            <React.Fragment>
              <div className="MailNew__hero">
                <img
                  className="MailNew__hero-image img-fluid"
                  src={header}
                  alt="Logo"
                />
              </div>
      
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <Mail
                      subject={this.state.form.subject || 'SUBJECT'}
                      email={this.state.form.email || 'EMAIL'}
                      body={this.state.form.body || 'MESSAGE'}
                    />
                  </div>
      
                  <div className="col-6">
                    <h1>New Email</h1>
                    <MailForm
                      onChange={this.handleChange}
                      formValues={this.state.form}
                      error={this.state.error}
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
    }
}

export default MailNew;
