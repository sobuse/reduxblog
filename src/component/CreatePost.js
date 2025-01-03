import React, {useState} from "react";

const CreatePost = () => {
    const [title , setTitle]=useState();
    const [content , setContent] = useState();

    const handleSubmit = (e) => {
        e.prevemntDefault();    
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <lable htmlFor="Title">Title</lable>
                <input type="text" name="title" onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <lable htmlFor="Content">Content</lable>
                <textarea name="content" id="content" cols="30" row= "10" onChange={e => setContent(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Add"/>
            </div>

        </form>
    )
}
export default CreatePost;