import React, { Component } from 'react';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import { Route,Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return <React.Fragment>
      <h1>
        <Link to="/">Photowall</Link>
      </h1>
      <Route path="/" exact render={() => <Photowall {...this.props} />} />

      <Route path="/AddPhoto" render={({ history }) => <AddPhoto {...this.props} history={history}/>}></Route> 

    </React.Fragment>
  }
}

export default Main;