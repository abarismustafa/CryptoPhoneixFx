import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { baseUrlImage } from "../../../../baseUrl"
import { blogCategoryDetails } from "../../../../api/login/Login"
import Loader from "../../../../common/loader/Loader"



const BlogDetails = () => {
    const params = useParams()
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const newsDeatils = async () => {
        setLoader(true)
        try {
            const res = await blogCategoryDetails(params?.id)
            // console.log(res?.data?.data);
            setData(res?.data?.data)
            setLoader(false)
        } catch (error) {
            setLoader(false)
        }
    }
    useEffect(() => {
        newsDeatils()
    }, [])
    return (
        <>
            {loader && <Loader />}
            <div className="PageHeading"><h1>Blog Details</h1></div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Blog Details</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="col-lg-12">
                                    <div className="article-container">
                                        <div className="image-container">
                                            <img src={`${baseUrlImage}${data?.attachment}`} alt="image" />
                                            <div className="image-caption">Blog Banner</div>
                                        </div>
                                        <div className="article-content">
                                            <h1>{data?.subject}</h1>
                                            <p className="publish-date">
                                                Created At : {data?.createdAt} || updatedAt : {data?.updatedAt}
                                            </p>
                                            <p>{data?.description}</p>
                                            {/* <p>But the two women have come to define the competing strains of French feminism from different generations and recently found themselves at opposite ends of an old-fashioned political brawl.</p> */}
                                            {/* More article content here */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default BlogDetails