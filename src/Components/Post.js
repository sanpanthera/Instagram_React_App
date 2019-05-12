import React from 'react';
import PropTypes from 'prop-types';

const Posts = (props) => {
    const post = props.post;
    return <div className="photoGrid">
        <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description}></img>
            <figcaption>
                <p>
                    {post.description}
                </p>
            </figcaption>
            <div className="button-container">
                <button className="remove-button" onClick={() => {
                    props.onRemovePhoto(post)
                }}>Remove</button>
            </div>
        </figure>
    </div>
}

Posts.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}

export default Posts;