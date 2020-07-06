import React from 'react';

import './styles/PageError.css';


// this component is rendered when an error occurs, it gives you a better context of what is happening
function PageError(props) {
  return <div className="PageError">{props.error.message}</div>;
}

export default PageError;
