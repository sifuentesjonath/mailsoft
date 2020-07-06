import React from 'react';

import './styles/PageLoading.css';
import Loader from './Loader';


// Component that contains the css Loader, its called when something is loading
function PageLoading() {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  );
}

export default PageLoading;