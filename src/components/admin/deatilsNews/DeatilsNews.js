import { useParams } from "react-router-dom"

import '../deatilsNews/deatilsNews.css'
import { marqueDetails } from "../../../api/login/Login"
import { useEffect, useState } from "react"
import { baseUrlImage } from "../../../baseUrl"
const DeatilsNews = () => {
    const params = useParams()
    const [data, setData] = useState(null)
    const newsDeatils = async () => {
        try {
            const res = await marqueDetails(params)
            // console.log(res?.data?.data);
            setData(res?.data?.data)

        } catch (error) {

        }
    }
    useEffect(() => {
        newsDeatils()
    }, [])
    return (
        <>
            <div className="PageHeading"><h1>News Details</h1></div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>News Details</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <div className="form-row" style={{ alignItems: 'end' }}>
                                <div className="col-lg-12">
                                    <div className="article-container">
                                        <div className="image-container">
                                            <img src={`${baseUrlImage}${data?.banner_image}`} alt="image" />
                                            <div className="image-caption">News Banner</div>
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

export default DeatilsNews