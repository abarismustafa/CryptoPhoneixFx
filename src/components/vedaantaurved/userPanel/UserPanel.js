import React, { useEffect, useState } from 'react'
import aibotLogo from "../../../asesets/logo/profile.jpg"
import logoImg from '../../../assets/img/logo-name.PNG'
// import ExportPdf from '../../../common/exportPdf/ExportPdf';
import { baseUrlImage } from '../../../baseUrl';
import { authCertificate } from '../../../api/login/Login';
// import { getUpdateProfile } from '../../../api/login/Login';

const WelcomeLetter = () => {
    const [state, setState] = useState(null)
    const userProfileData = async () => {
        try {
            const res = await authCertificate()
            setState(res?.data?.data)
        } catch (error) {
            alert(error?.message)
        }
    }
    useEffect(() => {
        userProfileData()
    }, [])
    return (
        <div className="mx-xl-5 mx-lg-3 mx-sm-2 my-5 exppdf">
            <div className="d-flex justify-content-center align-items-center">
                {state?.sign ? (
                    <img
                        // src={`${baseUrlImage}${state?.sign}`}
                        src={`${logoImg}`}
                        alt="profile image"
                        className="mb-3 img-fluid"
                        style={{ width: '280px', height: '125px', }}
                    />
                ) : (
                    <img
                        src={aibotLogo}
                        alt="profile not found"
                        className="mb-3 rounded-circle img-fluid"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                )}
            </div>

            <header className="text-center mb-4">

                <h1 className="fw-bold">Welcome Letter</h1>
            </header>


            <div className='card p-4'>
                <p>15/06/2021</p>
                {state ? <p><strong>My Dear Mr. PhoenixFx AiWorld,</strong></p> : <p><strong>User Not Found</strong></p>}
                <p>
                    Congratulations! You have successfully registered with {state ? <strong>{state?.staff?.name}</strong> : <strong>User Not Found</strong>}.
                    Welcome to <strong>PhoenixFx AiWorld</strong> Family, a team of stout-hearted professionals! You are joining a
                    revolution in the Era of Wellness as a Member who would utilize {state ? <strong>PhoenixFx AiWorld</strong> : <strong>User Not Found</strong>}'s unique
                    Organic and Natural Products for their own good health and financial prosperity. Your Member ID is {state?.refer_id}, Joining Date is {state?.onBoardDate}.
                </p>
                <p>
                    <strong>What will you achieve?</strong>
                </p>
                <ul>
                    <li>4.5% to 20% discount on (PVs) the entire range of high-quality products.</li>
                    <li>
                        You can order products online to be delivered to your home! You can either pay online through
                        Credit/Debit Card.
                    </li>
                    <li>You get gifts by doing certain business points (BPs). As a new Member, you get gifts as part of the Welcome Program.</li>
                    <li>
                        And as an exciting Member, you get gifts when you share the  {state ? <strong>PhoenixFx AiWorld</strong> : <strong>User Not Found</strong>} opportunity with others
                        and recruit others in your team.
                    </li>
                    <li>You have an opportunity to avail Sales Action Promotions/Discount Offers.</li>
                    <li>
                        You decide when and how much you want to work. The only investment needed to build your own business
                        with  {state ? <strong>PhoenixFx AiWorld</strong> : <strong>User Not Found</strong>} is some 10–20 catalogs.
                    </li>
                    <li>
                        Being a  <strong> PhoenixFx AiWorld</strong> Member is a lot of fun. You will have the opportunity to meet new people and
                        enjoy beauty events and exciting activities.
                    </li>
                    <li>You can build your career in  <strong> PhoenixFx AiWorld</strong>  as a Manager, Director, or higher.</li>
                    <li>You can travel around the world with  <strong> PhoenixFx AiWorld</strong>.</li>
                    <li>
                        Unlimited time and life income: You can build your income unlimited and lifetime depending on your
                        passion and efforts.
                    </li>
                </ul>
                <p>
                    We are proud to welcome you into our PhoenixFx AiWorld Family – A Dream to Become Healthier, Smarter, and Prosper in exponential ways!
                    WE STOP AT NOTHING!
                </p>
                <p className="mt-4">Yours sincerely,</p>
            </div>

            <div className='card mt-4 p-4'>
                <div >
                    <div className="d-flex justify-content-center align-items-center">
                        {state?.sign ? (
                            <img
                                src={`${baseUrlImage}${state?.sign}`}
                                alt="profile image"
                                className="mb-3 rounded-circle img-fluid"
                                style={{ width: '125px', height: '125px', objectFit: 'cover' }}
                            />
                        ) : (
                            <img
                                src={aibotLogo}
                                alt="profile not found"
                                className="mb-3 rounded-circle img-fluid"
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                        )}
                    </div>
                    <p className="fw-bold"> {state ? <strong>PhoenixFx AiWorld</strong> : <strong>User Not Found</strong>}</p>
                    <p>For  {state ? <strong>PhoenixFx AiWorld</strong> : <strong>User Not Found</strong>}.</p>
                    <p>Place: __________</p>
                    <p>Applicant Signature: __________</p>
                </div>
                <div className="text-end mt-4">

                    {/* <ExportPdf /> */}
                </div>
            </div>

        </div >
    );
};

export default WelcomeLetter;
