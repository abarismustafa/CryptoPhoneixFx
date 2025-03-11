import BlogList from "../blogList/BlogList"


const BlogTab = ({ tabs, activeTab, setActiveTab, blogs }) => {
    return (
        <>
            <div className="tabs-blog">
                <div className="tabs">
                    <div className="tab-buttons">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab._id}
                                className={`tab-button ${tab._id === activeTab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab._id)} // Set the active tab's ID
                            >
                                {tab.slug}
                            </button>
                        ))}
                    </div>

                </div>
            </div>

            <div className="tab-content">
                <BlogList blogs={blogs} />
            </div>
        </>
    )
}

export default BlogTab