import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";
const { v4: uuidv4 } = require('uuid');

const EditPosts = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Vishwajeet");
  const [imagesrc, setImg] = useState("");
//   const [isPending, setIsPending] = useState(false);
  const history = useHistory();

    
    const { id } = useParams();
    const { data: blog, isPending, errorMsg } = useFetch("http://localhost:5000/postsdata/" + id);
    setTitle(blog.title)
    setBody(blog.postBody)
    setAuthor(blog.author)
    

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { _id: uuidv4(), title, author, postBody: body, imagesrc };
    fetch("http://localhost:5000/postsdata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
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
        <input type="text"
          required
          value={imagesrc}
          onChange={(e) => setImg(e.target.value)}
        ></input>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Loading</button>}
      </form>
    </div>
  );
};

export default EditPosts;
