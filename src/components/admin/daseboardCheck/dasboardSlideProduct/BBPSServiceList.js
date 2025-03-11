import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import { FaMobileAlt, FaLightbulb, FaShippingFast, FaRupeeSign, FaGraduationCap, FaHospital, FaTools } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { CgDisplayFullwidth } from "react-icons/cg";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { GiGasStove } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { AiFillInsurance } from "react-icons/ai";
import '../dasboardSlideProduct/dasboardSlideProduct2.css';

function BBpsservicelist({services}) {
    const navigate = useNavigate();
    const [loadedImages, setLoadedImages] = useState({});
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getSlidesToShow = () => {
        if (windowWidth >= 1200) return Math.min(6, services.length);
        if (windowWidth >= 992) return Math.min(5, services.length);
        if (windowWidth >= 768) return Math.min(4, services.length);
        if (windowWidth >= 576) return Math.min(3, services.length);
        return Math.min(2, services.length);
    };

    const slidesToShow = getSlidesToShow();
    const infiniteScroll = services.length > slidesToShow;
    const slidesToScroll = Math.min(slidesToShow, services.length);

    const settings = {
        dots: false,
        infinite: infiniteScroll,
        speed: 2000,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        arrows: services.length > slidesToShow,
        autoplay: services.length > 1,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: Math.min(5, services.length),
                    slidesToScroll: Math.min(5, services.length),
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: Math.min(4, services.length),
                    slidesToScroll: Math.min(4, services.length),
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(3, services.length),
                    slidesToScroll: Math.min(3, services.length),
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: Math.min(2, services.length),
                    slidesToScroll: Math.min(2, services.length),
                }
            }
        ]
    };

    const getIcon = (serviceName) => {
        const iconMap = {
            "Aeps Cash Deposit": FaRupeeSign,
            "Credit Card": CiCreditCard1,
            "Electricity": FaLightbulb,
            "DMT": FaMoneyBillTransfer,
            "Gas": GiGasStove,
            "Landline Postpaid": TbDeviceLandlinePhone,
            "Fastag": FaShippingFast,
            "DTH": CgDisplayFullwidth,
            "Broadband Postpaid": MdOutlineDeveloperBoard,
            "Water": IoIosWater,
            "Mobile Postpaid": FaMobileAlt,
            "Recharge": FaMobileAlt,
            "Aeps Bank Withdraw": FaMoneyBillTransfer,
            "Aeps Adhaar pay": FaRupeeSign,
            "CMS": BsFillFileEarmarkPostFill,
            "Education Fees": FaGraduationCap,
            "Quick Dhan": FaMoneyBillTransfer,
            "NCMC Recharge": FaRupeeSign,
            "Hospital and Pathology": FaHospital,
            "Insurance": AiFillInsurance,
            "LPG Gas": GiGasStove,
        };

        const Icon = iconMap[serviceName] || FaTools;
        return <Icon />;
    };

    const routeMap = {
        "206": "/aeps-cash-deposit",
        "19": "/ccbill_payment_report",
        "18": "/electricity-bills",
        "33": "/mobile-reacharge",
        "13": "/dth-reacharge",
        "11": "/gas-bills",
        "10": "/postpaid-recharge",
        "5": "/Boardband",
        "35": "/airtel-cms",
        "12": "/landline-bills",
        "208": "/aeps-OnBoarded",
        "207": "/aeps-OnBoarded",
        "9": "/fastag-recharge",
        "188": "/money-transfer",
        "28": "/water-bills",
        "15": "/health-insurance-bill",
    };

    const handleNavigation = (serviceName) => {
        const route = routeMap[serviceName] || "/Dashboard";
        navigate(route);
    };

    const handleImageLoad = (serviceId) => {
        setTimeout(() => {
            setLoadedImages(prev => ({ ...prev, [serviceId]: true }));
        }, 1000);
    };

    return (
        <div className="slider-container-2">
             {services && services.length > 0 && (
            <Slider {...settings}>
                {services.map((service) => (
                    <div key={service?._id} className="product" onClick={() => handleNavigation(service?._id)}
                    style={{ cursor: routeMap[service?.service_name] ? 'pointer' : 'default' }}>
                        <div className="prodc">
                            <div className={`moobile ${service.icon ? 'd-flex justify-content-center align-items-center' : 'moobile'}`}>
                                {service.icon ? (
                                    loadedImages[service._id] ? (
                                        <ReactFancyBox
                                            thumbnail={`https://api.paypandabnk.com/api/cloudinary/${service?.icon}`}
                                            image={`https://api.paypandabnk.com/api/cloudinary/${service?.icon}`}
                                            className="ljhdfjdh"
                                        />
                                    ) : (
                                        <img 
                                            src={`https://api.paypandabnk.com/api/cloudinary/${service?.icon}`} 
                                            alt={service?.service_name}
                                            onLoad={() => handleImageLoad(service._id)}
                                            style={{ display: 'none' }}
                                        />
                                    )
                                ) : (
                                    getIcon(service?.service_name)
                                )}
                            </div>
                            <div className="nameDivice">
                                {service?.service_name}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            )}
        </div>
    );
}

export default BBpsservicelist;