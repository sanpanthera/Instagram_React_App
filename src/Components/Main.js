import React, { Component } from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  removePhoto = postRemoved => {
    this.setState((state) => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }));
  }

  componentDidMount() {
    const data = this.simulateDBFetchData();
    this.setState({
      posts: data
    })
  }

  addPhoto = (photoSubmitted) => {
    this.setState(prevState => ({
      posts: [...prevState.posts, photoSubmitted]
    }));
  }

  simulateDBFetchData = () => {
    return [{
      id: 0,
      description: "beautiful landscape",
      imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-europeanbest-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
    },

    {
      id: 1,
      description: "Aliens???",
      imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        "08323785_735653395_n.jpg"
    },

    {
      id: 2,
      description: "On a vacation!",
      imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]
  }

  render() {
    return <React.Fragment>
      <Route path="/" exact render={() => (
        <div>
          <Title title={'Photowall'} />
          <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
        </div>
      )} />

      <Route path="/AddPhoto" render={({ history }) => <AddPhoto
        onAddPost={(addedPost) => { 
          this.addPhoto(addedPost); 
           history.push('/');
        }} />}></Route>

    </React.Fragment>
  }
}

export default Main;