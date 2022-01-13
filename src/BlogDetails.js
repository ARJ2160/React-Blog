import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isPending, errorMsg } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory()

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=> {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
             {isPending && <div>Loading...</div>}
             {errorMsg && <div>{errorMsg}</div>}
             {blog && (
                 <article>
                     <h2>{ blog.title }</h2>
                     <p className="blog-author">Written By: { blog.author }</p>
                     <div className="blog-body">
                         { `${blog.body}` }
                     </div>
                     <button className="blog-delete" onClick={handleDelete}>Delete Me</button>
                 </article>
             )}
        </div>
     );
}
 
export default BlogDetails;