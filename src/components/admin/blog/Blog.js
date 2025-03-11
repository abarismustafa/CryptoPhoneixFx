import { useEffect, useState } from "react";
import BlogTab from "./blogTab/BlogTab"
import '../blog/blog.css'
import BlogList from "./blogList/BlogList";
import { blogCategory, blogCategoryID } from "../../../api/login/Login";
import Loader from "../../../common/loader/Loader";



const Blog = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [tabs, setTab] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [loader, setLoader] = useState(false)


    const listCategoryBlogTab = async () => {
        setLoader(true)
        try {
            const res = await blogCategory();
            setTab(res?.data?.data);
            setLoader(false)
            if (res?.data?.data.length > 0) {
                setActiveTab(res.data.data[0]?._id);
                setLoader(false)
            }
        } catch (error) {
            console.error("Error fetching blog categories:", error);
            setLoader(false)
        }
    };


    const listBlogbyId = async (id) => {
        try {
            const res = await blogCategoryID(id);
            console.log(res);

            setBlogs(res?.data?.data);
        } catch (error) {
            console.error("Error fetching blogs by ID:", error);
        }
    };

    useEffect(() => {
        listCategoryBlogTab();
    }, []);


    useEffect(() => {
        if (activeTab) {
            listBlogbyId(activeTab);
        }
    }, [activeTab]);

    // const tabs = [
    //     { label: "Tab 1", content: <BlogList /> },
    //     { label: "Tab 2", content: <BlogList /> },
    //     { label: "Tab 3", content: <BlogList /> },
    // ];
    return (
        <>
            {loader && <Loader />}
            <div className="PageHeading">
                <h1>Blog</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Blog</span></div>
                    <div className="card-body">
                        <div className="form-row" >
                            <div className="col-lg-12">
                                <BlogTab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} blogs={blogs} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog