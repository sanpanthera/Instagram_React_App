import React from "react";
import Post from './Post';
import PropTypes from 'prop-types'

const Photowall = (props) => {
    return <React.Fragment>
        
        <a className="addIcon" onClick={props.onNavigation} href="#addPhotos"> </a>
    <div>
        {props.posts.map((post, index) => <Post key={index} post={post}  onRemovePhoto={props.onRemovePhoto}/>)}
    </div>
    </React.Fragment>
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photowall;

