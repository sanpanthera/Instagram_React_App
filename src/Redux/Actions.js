import {database} from '../database/config';

//remove
export const startAddingPost = post =>{
    return (dispatch) => {
        return database.ref('posts').update({[post.id]:post}).then(()=>{
            dispatch(addPost(post));
        })
        .catch( error =>{
            console.log(error);
        })
    }
}

export const startLoadingPost = () =>
{
    return (dispatch) => {
        return database.ref('posts').once('value').then(snapshot=> {
            let posts = [];
            snapshot.forEach(childSnapshot => {
                posts.push(childSnapshot.val());
            });

            dispatch(loadPosts(posts));
        }).catch( error =>{
            console.log(error);
        })
    }
}

export const startRemovingPost = (index,id) => {
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            return database.ref(`comments/${id}`).remove().then(()=>{
                dispatch(removePost(index));

            })
           }).catch( error =>{
            console.log(error);
        })
    }
}

export const startSavingComments = (comment, postId) =>{
    return (dispatch) => {
        return database.ref(`comments/${postId}`).push(comment).then(()=>{
            dispatch(addComment(comment, postId));
        })
        .catch( error =>{
            console.log(error);
        })
    }
}

export const startLoadingComments = () => {
    return (dispatch) => {
        return database.ref('comments').once('value').then(snapshot=> {
            let comments = {};
            snapshot.forEach(childSnapshot => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val());
            });

            dispatch(loadComments(comments));
        }).catch( error =>{
            console.log(error);
        })
    }
}

export const removePost = index => ({ 
    type: 'REMOVE_POST',
    index 
});


//adding post
export const addPost = post =>({
    type: 'ADD_POST',
    post
});

export const addComment = (comment, postId) =>({
    type: 'ADD_COMMENT',
    comment,
    postId
});


export const loadPosts = posts =>({
    type: 'LOAD_POSTS',
    posts
});

export const loadComments = comments => ({
    type: 'LOAD_COMMENTS',
    comments
})