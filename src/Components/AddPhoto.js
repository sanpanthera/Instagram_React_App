import React, {Component} from 'react';
import Title from './Title';

class AddPhoto extends Component {

  submitPost = event =>
  {
    event.preventDefault();
    const link = event.target.link.value;
    const description = event.target.description.value;
    if(link && description) {
      const post= {
        id:Number(new Date()),
        description: description,
        imageLink: link
      };
       this.props.onAddPost(post);
    }
  }

  render() {
      return (
        <React.Fragment>
          <Title title={'Photowall'} />
          <div className="form">
                <form onSubmit={this.submitPost}>
                   <input type="text" placeholder="Link" name="link"/>
                   <input type="text" placeholder="Description" name="description"/>
                   <button>Post</button>
                </form>
          </div>
        </React.Fragment>
      )
  }
}

export default AddPhoto;
