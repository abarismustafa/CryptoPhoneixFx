import { Link } from "react-router-dom";



const BlogList = ({ blogs }) => {
    console.log(blogs);

    return (
        <>
            <div className="row">
                {/* Card 1 */}
                {blogs.length > 0 ? (
                    blogs?.map((blog) => (
                        <div className="col-md-4" key={blog?._id}>
                            <div className="card-blog">
                                <img src={`https://api.paypandabnk.com/api/cloudinary/${blog?.attachment}`} className="card-img-top" alt="Image" />
                                <div className="card-body">
                                    <h5 className="card-title">{blog?.subject}</h5>
                                    <p className="card-text">
                                        {blog?.createdAt} | Play NIF 50<br />
                                        {blog?.description}
                                    </p>
                                    <Link to={`/blog_news_deatils/${blog?._id}`} className="read-more">read more</Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No blogs found for this category.</p>
                )}

                {/* Card 2 */}
            </div>

        </>
    )
}

export default BlogList