import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Vishwajeet");
  const [imgsrc, setImg] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, imgsrc };
    fetch("http://localhost:8000/blogs", {
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
          value={imgsrc}
          onChange={(e) => setImg(e.target.value)}
        ></input>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Loading</button>}
      </form>
    </div>
  );
};

export default Create;
