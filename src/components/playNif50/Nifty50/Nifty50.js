import { useState } from "react";
import { Nifty50Card } from "./nifty50Slide/Nifty50Card"
import { Nifty50HourlyContest } from "./nifty50Slide/nifty50HourlyContest/Nifty50HourlyContest"
import { Nifty50Slide } from "./nifty50Slide/Nifty50Slide"



export const Nifty50 = ({ markettypeData, activeTab }) => {
    // console.log(markettypeData);

    // console.log(markettypeData, activeTab);
    const [bannerData, setBannerData] = useState(null)
    // console.log(bannerData);


    return (
        <>

            <div className="mt-4">
                <Nifty50Slide bannerData={bannerData} />
            </div>
            <div className="mt-4">
                {/* <Nifty50Card markettypeData={markettypeData} activeTab={activeTab} /> */}
                <Nifty50HourlyContest setBannerData={setBannerData} />
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="video-how-to-pay">
                        <iframe width={1150} height={600} src="https://www.youtube.com/embed/0fZ2JH8NULI?si=RSNjODzQUsQg3yXK" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                    </div>
                </div>
            </div>
        </>
    )
}
