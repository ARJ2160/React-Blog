
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const { data: blogs, isPending, errorMsg } = useFetch("http://localhost:8000/blogs")

  return (
    <div className="homepage">
      {errorMsg && <div>{errorMsg}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
