import React, { Component } from 'react';

class AddPhoto extends Component {

  submitPost = event => {
    event.preventDefault();
    const link = event.target.link.value;
    const description = event.target.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: link
    };

    if (link && description) {
       this.props.addPost(post);
       this.props.history.push('/');
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="form">
          <form onSubmit={this.submitPost}>
            <input type="text" placeholder="Link" name="link" />
            <input type="text" placeholder="Description" name="description" />
            <button>Post</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default AddPhoto;
