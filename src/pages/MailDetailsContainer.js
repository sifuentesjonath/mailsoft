import React from 'react';
import MailDetails from './MailDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';


// This has the page that first evaluates if an error is present, if not it will return the component of the mail visualization 
class MailDetailsContainer extends React.Component{
    state = {
        loading: true,
        error: null,
    };
    componentDidMount(){
        this.setState({ loading: true, error: null });
    }
      render(){
        if (this.state.loading) {
            return <PageLoading />;
          }
      
          if (this.state.error) {
            return <PageError error={this.state.error} />;
          }
      
          return (
            <MailDetails />

          );
        }
      }

export default MailDetailsContainer;