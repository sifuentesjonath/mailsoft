import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Mails from '../pages/Mails';
import MailNew from '../pages/MailNew';
import MailDetails from  '../pages/MailDetails';
import NotFound from '../pages/NotFound';


function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/mails" component={Mails}/>
        <Route exact path="/mails/new" component={MailNew} />
        <Route exact path="/mails/:mailId" component={MailDetails} />
        <Route component={NotFound} />
      </Switch>
    </Layout> 
    </BrowserRouter>
  );
}

export default App;
