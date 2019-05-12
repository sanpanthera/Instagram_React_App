import React from "react";
import Post from './Post';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const Photowall = (props) => {
    return <React.Fragment>
        <Link className="addIcon" to="/AddPhoto"></Link>
    <div>
        {props.posts.sort((x,y)=> y.id-x.id).map((post, index) => <Post key={index} post={post}  onRemovePhoto={props.onRemovePhoto}/>)}
    </div>
    </React.Fragment>
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photowall;

