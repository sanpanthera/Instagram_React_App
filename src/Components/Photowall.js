import React from "react";
import Post from './Post';
import {Link} from 'react-router-dom';

const Photowall = (props) => {
    return <React.Fragment>
        <Link className="addIcon" to="/AddPhoto"></Link>
    <div>
        {props.posts.sort((x,y)=> y.id-x.id).map((post, index) => <Post key={index} post={post} index={index} {...props}/>)}
    </div>
    </React.Fragment>
}

export default Photowall;

