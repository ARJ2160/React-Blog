import { Link } from "react-router-dom";
import moment from "moment";

const BlogList = ({ blogs }) => {

  let blogDate = moment().format('D MMM YYYY');

  const handleExcerpt = (blogBody) => {
    const wordarray = blogBody.split(" ").slice(0, 18).join(" ");
    return wordarray;
  }

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <div className="blog-thumbnail" style={{backgroundImage:`url(${blog.imgsrc})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center"}}  ></div>
            <div className="blog-preview-bg">
              <h2>{blog.title}</h2>
              <p className="blog-excerpt">{handleExcerpt(blog.body) + " ..."}</p>
              <p className="blog-date">{blogDate}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
