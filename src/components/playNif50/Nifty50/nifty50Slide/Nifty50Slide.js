
import Slider from "react-slick";
import { baseUrlImage } from "../../../../baseUrl";
export const Nifty50Slide = ({ bannerData }) => {
    // console.log(markettypeData[0].banners);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="slider-container slide-set-met">
                <Slider {...settings}>
                    {bannerData && bannerData?.banners?.map((item) => {
                        return <div key={item?._id}>
                            <div className="cart-itiems">
                                <img src={`${baseUrlImage}${item?.banner_image}`} alt="" />
                                {/* <h2>{item?.title}</h2> */}
                            </div>
                        </div>
                    })}
                </Slider>
            </div>
        </>
    )
}
