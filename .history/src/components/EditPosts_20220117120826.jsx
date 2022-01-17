import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
// import useFetch from "../useFetch";
import axios from "axios";

const EditPosts = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Vishwajeet");
    const [imagesrc, setImg] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const { id } = useParams();
    
    const getEditBlogData = async () => {
        await fetch("http://localhost:5000/postsdata/" + id)
            .then(res => {
                // setIsPending(false)
                const blog = res.data
                console.log(blog);
                setTitle(blog.title)
                setBody(blog.postBody)
                setAuthor(blog.author)
                setImg(blog.imagesrc)
            })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getEditBlogData(),[])

    const handleEdit = e => {
        e.preventDefault()
        
        const blog = { title, author, postBody: body, imagesrc };
        fetch('http://localhost:5000/postsdata/update/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            setIsPending(false);
            history.push('/')
        }).catch(err => console.log(err))
    }
    
    return (
        <div className="create">
            <form onSubmit={handleEdit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <textarea
                    required
                    value={body}
                    rows={10}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Vishwajeet">Vishwajeet</option>
                    <option value="ARJ">ARJ</option>
                </select>

                <label>Enter Image Path</label>
                <input
                    type="text"
                    required
                    value={imagesrc}
                    onChange={(e) => setImg(e.target.value)}
                ></input>

                {!isPending && <button>Edit Blog</button>}
                {isPending && <button disabled>Loading</button>}
            </form>
        </div>
    );
};

export default EditPosts;