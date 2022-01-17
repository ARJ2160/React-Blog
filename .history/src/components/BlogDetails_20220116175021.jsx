import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useHistory } from "react-router-dom";
import moment from "moment";

import profile_image from "../images/picture.jpg";

const BlogDetails = () => {

    let blogDate = moment().format('D MMM YYYY');
    const { id } = useParams();
    const { data: blog, isPending, errorMsg } = useFetch("http://localhost:5000/postsdata/" + id);
    const history = useHistory()

    const handleDelete = () => {
      fetch('http://localhost:5000/postsdata/' + blog._id, { method: 'DELETE' })
        .then(() => history.push('/'))
        .catch(err => console.log(err))
    }

  return (
    <div className="blog-details">
      <div className="top-profile">
        <div className="top-profile-picture">
          <img src={profile_image} alt="profile-pic-top" />
        </div>
        <div className="top-profile-name">
          <p>Vishwajeet Deshmukh</p>
        </div>
      </div>
      {isPending && <div>Loading...</div>}
      {errorMsg && <div>{errorMsg}</div>}
          {blog && (
        <article className="blog-main-content" >
          <div className="main-content-header">
            <div className="content-title-date">
              <h2 className="blogdetails-title">{blog.title}</h2>
              <p className="blogdetails-date">{blogDate}</p>
            </div>
            <div className="content-image">
                <img className="blog-image" src={blog.imagesrc} alt="" />
            </div>
          </div>

          <div className="blogdetails-body"><p>{`${blog.postBody}`}</p></div>
          <button className="blogdetails-delete">
                <Link to="/create">Edit Post
                </Link>
          </button>
          <button className="blogdetails-delete" onClick={handleDelete}>Delete Me</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
