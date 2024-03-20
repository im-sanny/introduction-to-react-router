import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div>
            <h2>Post details about: {id}</h2>
            <p>Title: {title}</p>
            <p><small>Body: {body}</small></p>
        </div>
    );
};

export default PostDetails;