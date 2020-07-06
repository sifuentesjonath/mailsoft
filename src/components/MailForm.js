import React from 'react';
import './styles/MailForm.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// Structure of the form when you want to create a new Mail

const MySwal = withReactContent(Swal);
class MailForm extends React.Component {

  // animated effect to indicates that you sent an email
    handleClick = e => {
      MySwal.fire({
        title: <p>Email was Sended</p>,
        onOpen: () => {
          MySwal.clickConfirm()
        }
      }).then(() => {
        return MySwal.fire(<p>The Email was Sended</p>)
      })

      };

// Here i use databinding to generate a previsualization when you write something in the input 
    render() {
        return (
          <div>
            <form >
    
              <div className="form-group">
                <label>Email</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="email"
                  name="email"
                  value={this.props.formValues.email}
                />
              </div>
    
              <div className="form-group">
                <label>Subject</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  name="subject"
                  value={this.props.formValues.subject}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  name="body"
                  value={this.props.formValues.body}
                />
              </div>
              <button onClick={this.handleClick} type='button'className="btn btn-primary">
                Send
              </button>
              <button className="btn btn-danger margin">
                  <Link className="text-reset text-decoration-none" to="/mails" >
                Return
                  </Link>
              </button>
            </form>
          </div>
        );
      }

}

export default MailForm;