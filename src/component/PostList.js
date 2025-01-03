import React from 'react';
const PostLst = (props) =>{
    return (
        <div>
            {props.posts.map((post)=> <div id={post.id}>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>)}
        </div>
    )
}
export default PostLst;

