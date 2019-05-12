import React from "react";
import Post from './Post';

const Photowall = (props) => {
    return <div>
        {props.posts.map((post, index) => <Post key={index} post={post}  onRemovePhoto={props.onRemovePhoto}/>)}
    </div>
}

export default Photowall;

