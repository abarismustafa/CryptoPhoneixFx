import { Link } from "react-router-dom"
import { baseUrlImage } from "../../../../baseUrl"


export const Nifty50Card = ({ markettypeData, activeTab }) => {
    // console.log(markettypeData);

    return (
        <>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            {markettypeData && markettypeData?.market_type?.map((item) => {
                                return <div className="col-lg-4" key={item?._id}>
                                    <div className="card-setitem mt-2">
                                        <img src={`${baseUrlImage}${item?.banner_image}`} alt="" />
                                        <div className="HourlyContest">
                                            <Link to={`/hourly-contest/${item?._id}/${activeTab}`}>{item?.title}</Link>
                                        </div>
                                        <div className="join">
                                            <Link to="#"> Join</Link>
                                        </div>
                                    </div>
                                </div>
                            })}


                            {/* 
                <div className="col-lg-4">
                    <div className="card-setitem">
                        <img src="https://cdn.pixabay.com/photo/2018/12/10/02/14/manhattan-3866140_640.jpg" alt="" />
                    </div>
                </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
