
import { Link } from 'react-router-dom'
import logo from '../../asesets/logo/logo1.png'
function Footer() {
    return (
        <>
            <footer>
                <div className="Wrapper">
                    <div className="FooterParent row" uk-scrollspy="cls: uk-animation-fade; target: > div; delay: 300;  repeat: false">
                        <div className="col-lg-3 col-md-6 uk-scrollspy-inview uk-animation-fade" style={{}}>
                            <div className="footerLogo">
                                <img src={logo} alt="logo" />
                            </div>
                            <ul className="address">
                                <li>
                                    <h4><a href="#">Champion Software Technologies Ltd.</a></h4>
                                    <p>336-337-351-352, Iskon Mall, <br />150 Feet Ring Road,<br /> Rajkot, Gujarat - 360005</p>
                                </li>
                                <li>
                                    <p><span>Call:</span><a href="tel:+918459006006">+91 8459 006 006</a></p>
                                    <p><span>Mail:</span><a href="mailto:sales@masterpay.pro">sales@masterpay.pro</a></p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 menuLinks uk-scrollspy-inview uk-animation-fade" style={{}}>
                            <h3>Navigation</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="services">Services</Link></li>
                                <li><Link to="about">About us</Link></li>
                                <li><Link to="contact-us">Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 menuLinks uk-scrollspy-inview uk-animation-fade" style={{}}>
                            <h3>Other Links</h3>
                            <ul>
                                {/* <li><a href="#">FAQs</a></li> */}
                                <li><a href="#">Make MasterPay your Digital Dost</a></li>
                                <li><Link to="privacy-policy/1">Privacy Policy</Link></li>
                                <li><Link to="terms-conditions/2">Terms &amp; Conditions</Link></li>
                                <li><Link to="grievance-redressal-policy/3">Grievance Redressal Policy</Link></li>
                                <li><Link to="refund-and-cancellation-policy/4">Refund &amp; Cancellation Policy</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 connectWithUs uk-scrollspy-inview uk-animation-fade" style={{}}>
                            <h3>Connect with us</h3>
                            <div className="FooterSocials">
                                <a href="#" rel="noreferer, ,noopener" target="_blank" style={{ backgroundColor: '#3b5998' }}>
                                    <svg viewBox="0 0 8 15">
                                        <path d="M7.699,0.003 L5.780,-0.000 C3.624,-0.000 2.231,1.449 2.231,3.691 L2.231,5.393 L0.302,5.393 C0.135,5.393 0.000,5.530 0.000,5.699 L0.000,8.166 C0.000,8.334 0.135,8.471 0.302,8.471 L2.231,8.471 L2.231,14.694 C2.231,14.863 2.366,15.000 2.533,15.000 L5.050,15.000 C5.216,15.000 5.351,14.863 5.351,14.694 L5.351,8.471 L7.607,8.471 C7.774,8.471 7.909,8.334 7.909,8.166 L7.910,5.699 C7.910,5.618 7.878,5.540 7.822,5.483 C7.765,5.426 7.688,5.393 7.608,5.393 L5.352,5.393 L5.352,3.950 C5.352,3.257 5.515,2.905 6.406,2.905 L7.698,2.905 C7.865,2.905 8.000,2.767 8.000,2.599 L8.000,0.309 C8.000,0.140 7.865,0.003 7.699,0.003 Z" />
                                    </svg>
                                </a>
                                <a href="#" rel="noreferer, ,noopener" target="_blank" style={{ backgroundColor: '#55acee' }}>
                                    <svg viewBox="0 0 16 14">
                                        <path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M16.000,1.657 C15.405,1.938 14.771,2.124 14.110,2.215 C14.790,1.778 15.309,1.091 15.553,0.262 C14.919,0.670 14.219,0.957 13.473,1.117 C12.871,0.427 12.013,-0.000 11.077,-0.000 C9.261,-0.000 7.799,1.587 7.799,3.533 C7.799,3.813 7.821,4.082 7.875,4.339 C5.148,4.195 2.735,2.788 1.114,0.644 C0.831,1.173 0.665,1.778 0.665,2.429 C0.665,3.653 1.250,4.737 2.122,5.365 C1.595,5.354 1.078,5.189 0.640,4.930 C0.640,4.940 0.640,4.955 0.640,4.969 C0.640,6.685 1.777,8.111 3.268,8.440 C3.001,8.518 2.710,8.556 2.408,8.556 C2.198,8.556 1.986,8.543 1.787,8.495 C2.212,9.894 3.418,10.923 4.852,10.956 C3.736,11.896 2.319,12.463 0.785,12.463 C0.516,12.463 0.258,12.450 -0.000,12.415 C1.453,13.423 3.175,14.000 5.032,14.000 C11.068,14.000 14.368,8.615 14.368,3.948 C14.368,3.792 14.363,3.641 14.356,3.491 C15.007,2.993 15.554,2.372 16.000,1.657 Z" />
                                    </svg>
                                </a>
                                <a href="#" rel="noreferer, ,noopener" target="_blank" style={{ backgroundColor: '#3371b7' }}>
                                    <svg viewBox="0 0 12 12">
                                        <path d="M12.000,7.357 L12.000,12.000 L9.428,12.000 L9.428,7.668 C9.428,6.580 9.056,5.837 8.125,5.837 C7.414,5.837 6.991,6.338 6.805,6.822 C6.737,6.995 6.720,7.236 6.720,7.478 L6.720,12.000 L4.147,12.000 C4.147,12.000 4.182,4.663 4.147,3.903 L6.720,3.903 L6.720,5.051 C6.715,5.059 6.708,5.068 6.703,5.077 L6.720,5.077 L6.720,5.051 C7.062,4.500 7.672,3.713 9.038,3.713 C10.731,3.713 12.000,4.870 12.000,7.357 ZM1.456,-0.000 C0.576,-0.000 -0.000,0.604 -0.000,1.399 C-0.000,2.176 0.559,2.798 1.422,2.798 L1.439,2.798 C2.336,2.798 2.894,2.176 2.894,1.399 C2.877,0.604 2.336,-0.000 1.456,-0.000 ZM0.153,12.000 L2.725,12.000 L2.725,3.903 L0.153,3.903 L0.153,12.000 Z" />
                                    </svg>
                                </a>
                                <a href="#" rel="noreferer, ,noopener" target="_blank" style={{ backgroundColor: '#b77606' }}>
                                    <svg viewBox="0 0 13 13">
                                        <path d="M9.412,13.000 L3.587,13.000 C1.609,13.000 -0.000,11.391 -0.000,9.412 L-0.000,3.587 C-0.000,1.609 1.609,-0.000 3.587,-0.000 L9.412,-0.000 C11.391,-0.000 13.000,1.609 13.000,3.587 L13.000,9.412 C13.000,11.391 11.391,13.000 9.412,13.000 ZM11.846,9.412 L11.846,3.587 C11.846,2.245 10.754,1.153 9.412,1.153 L3.587,1.153 C2.245,1.153 1.153,2.245 1.153,3.587 L1.153,9.412 C1.153,10.755 2.245,11.847 3.587,11.847 L9.412,11.847 C10.755,11.847 11.847,10.755 11.847,9.412 L11.846,9.412 ZM9.990,3.864 C9.768,3.864 9.550,3.773 9.393,3.616 C9.235,3.459 9.144,3.240 9.144,3.018 C9.144,2.795 9.235,2.577 9.393,2.420 C9.550,2.262 9.768,2.172 9.990,2.172 C10.213,2.172 10.432,2.262 10.588,2.420 C10.746,2.577 10.836,2.795 10.836,3.018 C10.836,3.240 10.746,3.459 10.588,3.616 C10.431,3.773 10.213,3.864 9.990,3.864 ZM6.500,9.850 C4.653,9.850 3.150,8.347 3.150,6.500 C3.150,4.653 4.653,3.150 6.500,3.150 C8.347,3.150 9.850,4.653 9.850,6.500 C9.850,8.347 8.347,9.850 6.500,9.850 ZM6.500,4.304 C5.289,4.304 4.304,5.289 4.304,6.500 C4.304,7.711 5.289,8.696 6.500,8.696 C7.711,8.696 8.696,7.711 8.696,6.500 C8.696,5.289 7.711,4.304 6.500,4.304 Z" />
                                    </svg>
                                </a>
                            </div>
                            <h3>Download Mobile App</h3>
                            <div className="Store-ic">
                                <a href="#" rel="noreferer, ,noopener" target="_blank">
                                    <img src="https://www.masterpay.pro/assets_theme2/img/playstore.svg" alt="Get it on Google Play" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="FooterBottom">
                    <div className="Wrapper">
                        <p>Copyright ©2023 LB Enterprise All Rights Reserved, Share By <a href="https://www.abarissoftech.com/" target='blank'>Abaris Softech</a></p>
                    </div>
                </div>
                <div id="backToTop" className="show">
                    <svg viewBox="0 0 240.835 240.835">
                        <path d="M129.007,57.819c-4.68-4.68-12.499-4.68-17.191,0L3.555,165.803c-4.74,4.74-4.74,12.427,0,17.155
      c4.74,4.74,12.439,4.74,17.179,0l99.683-99.406l99.671,99.418c4.752,4.74,12.439,4.74,17.191,0c4.74-4.74,4.74-12.427,0-17.155
      L129.007,57.819z" />
                    </svg>
                </div>
            </footer>

        </>
    )
}
export default Footer