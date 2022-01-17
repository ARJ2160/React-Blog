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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo alias fugit recusandae similique obcaecati iusto quas provident dolore, harum voluptas itaque ea est minima rem soluta, aspernatur aperiam consequatur commodi.
            {blogs.map((blog) => {
                const { _id, author, postBody, title, imagesrc } = blog
                    return(
                        <div className = "blog-preview" key = { _id } >
                            <Link to={`/postsdata/${_id}`}>
                                <div className="blog-thumbnail" style={{ backgroundImage: `url(${imagesrc})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}  ></div>
                                <div className="blog-preview-bg">
                                    <h2>{title}</h2>
                                    <p className="blog-excerpt">{handleExcerpt(postBody) + " ..."}</p>
                                    <p className="blog-author">{author}</p>
                                    <p className="blog-date">{blogDate}</p>
                                </div>
                            </Link>
                        </div>
                    )
                }
            )}
    </div>
    );
};

export default BlogList;
