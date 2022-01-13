import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import moment from "moment";

import profile_image from "./images/picture.jpg";

const BlogDetails = () => {

    let blogDate = moment().format('D MMM YYYY');
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    errorMsg,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      <div className="top-profile">
        <div className="top-profile-picture">
          <img src={profile_image} alt="profile-photo-top" />
        </div>
        <div className="top-profile-name">
          <p>Vishwajeet Deshmukh</p>
        </div>
      </div>
      {isPending && <div>Loading...</div>}
      {errorMsg && <div>{errorMsg}</div>}
      {blog && (
        <article className="blog-main-content">
          <div className="main-content-header">
            <div className="content-title-date">
              <h2 className="blogdetails-title">{blog.title}</h2>
              <p className="blogdetails-date">{blogDate}</p>
            </div>
            <div className="content-image">
                <img src={blog.imgsrc} alt="" />
            </div>
          </div>

          <div className="blogdetails-body"><p>{`${blog.body}`}</p></div>
          <button className="blogdetails-delete" onClick={handleDelete}>Delete Me</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
