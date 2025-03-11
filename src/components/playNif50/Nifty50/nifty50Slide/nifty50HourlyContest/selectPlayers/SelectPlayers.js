import { useCallback, useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"
import { add_participateContestant, checkoutContestParticipate, contestPublic, paymentgatewaycheckout, rozarPayApi, slelectPaymetSet } from "../../../../../../api/login/Login";
import { toastSuccessMessage, toastSuccessMessageError } from "../../../../../../common/tostShow/TostShow";
import { ToastContainer } from "react-toastify";
import useRazorpay from "react-razorpay";
import { not } from "ajv/dist/compile/codegen";



export const SelectPlayers = ({ walletShowHeader, walletData }) => {

    const params = useParams()
    // console.log(params);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const length = 4
    const [otp, setOtp] = useState(new Array(length).fill(''));
    // console.log(otp);

    let str = ''
    for (let index = 0; index < otp.length; index++) {
        const element = otp[index];
        str = str + element
    }

    // console.log(str);

    const inputs = useRef([]);

    const otpChandleChange = (index, value) => {
        // const input = value.replace(/[^0-9+]/g, '');
        const newOtp = [...otp];
        if (value.length == 2) {
            return
        }
        newOtp[index] = value;
        setOtp(newOtp);


        // Move to the next input field if there's a value
        if (value && inputs.current[index + 1]) {
            inputs.current[index + 1].focus();
        }

    };

    const handleKeyDown = (index, e) => {
        // Move to the previous input field if backspace is pressed and the input is empty
        if (e.key === 'Backspace' && !otp[index] && inputs.current[index - 1]) {
            inputs.current[index - 1].focus();
        }
    };


    const [formData, setFormData] = useState({
        prediction: '',
        paymentMethod: "",
        // paymentGate: '',
        contest: ""
    })

    console.log(formData);



    const changeHandle = (e) => {
        const clone = { ...formData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFormData(clone)
    }

    const [contestPublicGetData, setContestPublicGetData] = useState(null)
    // console.log(contestPublicGetData);


    const contestPublicGet = async () => {
        try {
            const res = await contestPublic(params?.id)
            // console.log(res?.data);

            setContestPublicGetData(res?.data?.data);

        } catch (error) {

        }
    }

    const [paymentSelectData, setPaymentSelectData] = useState([])
    // console.log(paymentSelectData);

    const [user, setUser] = useState(null)
    const paymentSelect = async () => {
        try {
            const res = await slelectPaymetSet()
            // console.log(res?.data?.data);
            setPaymentSelectData(res?.data?.data?.getPaymentGatewayCred)
            setUser(res?.data?.data)

        } catch (error) {

        }
    }

    const [rozarPayData, setRozarPayData] = useState()

    // console.log(rozarPayData);


    const submitData = async () => {
        const clone = { ...formData, contest: params?.id }
        // console.log('clone', clone);
        try {
            const res = await add_participateContestant(clone)
            // console.log(res?.data?.data);
            // setRozarPayData(res?.data?.data)
            if (res?.data?.error == false) {
                toastSuccessMessage(res?.data?.message)
                handleClose()
                walletShowHeader()
                if (formData?.paymentMethod == "razorpay") {
                    handlePayment(res?.data?.data);
                }
                if (formData?.paymentMethod == "phonepe") {
                    handlePhonePay(res?.data?.data?.url)
                }
            } else {
                toastSuccessMessageError(res?.data?.message)
            }

        } catch (error) {

        }
    }


    // rozarPayamet
    const [Razorpay] = useRazorpay();

    const handlePayment = useCallback(async (data) => {
        // console.log(data);
        const filterSecrateKy = paymentSelectData.map((item) => {
            return item
        })
        const filterRoazarKey = filterSecrateKy?.filter((item) => {
            return item?.slug == 'razorpay'
        })
        // console.log('filterRoazarKey', filterRoazarKey[0]?.key);
        try {
            // const res = await rozarPayApi(rozarPayData);
            // "rzp_test_9VeeiBAgDSX9Tq"
            const options = {
                key: filterRoazarKey[0]?.key,
                amount: data?.amount,
                currency: data?.currency,
                name: "PlayNif50",
                description: "Test Transaction",
                image: "https://api.paypandabnk.com/api/cloudinary/image-1729583770735.jpeg",
                order_id: data?.id,
                handler: (res) => {
                    // console.log(res);
                    checkoutPayment(res)
                    handleClose()

                },
                prefill: {
                    name: user?.user?.name,
                    email: user?.user?.email,
                    contact: user?.user?.mobile,
                },
                // notes: {
                //     address: "Razorpay Corporate Office",
                // },
                // theme: {
                //     color: "#3399cc",
                // },
            };
            const rzpay = new Razorpay(options);
            rzpay.on("payment.failed", function (response) {
                // console.log(response);
                // alert(response.error.code);
                // alert(response.error.description);
                // alert(response.error.source);
                // alert(response.error.step);
                // alert(response.error.reason);
                // alert(response.error.metadata.order_id);
                // alert(response.error.metadata.payment_id);
            });
            rzpay.open();
        } catch (error) {
            console.error("Error in handlePayment:", error);
        }
    }, [Razorpay, paymentSelectData, user]);


    const checkoutPayment = async (data) => {
        try {
            const res = await checkoutContestParticipate(data)
            walletShowHeader()

            // console.log(res);

        } catch (error) {

        }
    }



    // rozarPayamet

    //phonePay

    let data = {
        name: 'phone pay',
        amount: 1,
        number: '9999999999',
        MID: 'MID' + Date.now(),
        transactionId: 'T' + Date.now()
    }
    const handlePhonePay = async (url) => {
        try {
            window.location.href = url
        } catch (error) {

        }
    }

    //phonePay


    useEffect(() => {
        contestPublicGet()
        paymentSelect()
    }, [])
    return (
        <>
            <div className="PageHeading">
                <h1>Nifty50 League</h1>
            </div>

            <div className="ContentArea">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xl-6 wid-100 mt-3">
                                <div className="select-palyers">
                                    <div className="select-palyers-header">
                                        <p>You Can Predict Market Rate Up/Down here</p>
                                    </div>
                                    <div className="progress-bar" />
                                    <div className="prediction-card">
                                        <div className="market-info">
                                            <p>Open: <span>{contestPublicGetData?.market_opening}</span> &nbsp;
                                                {/* High: <span className="high">16695.5</span> */}
                                                &nbsp; Low: <span className="low">{contestPublicGetData?.market_closing}</span></p>
                                        </div>
                                        <div className="market-logo">
                                            <img src={`https://backoffice.adamclick.com/api/cloudinary/${contestPublicGetData?.banner_image}`} alt="Market Logo" />
                                            <h2>{contestPublicGetData?.market_type}</h2>
                                            <p>{contestPublicGetData?.market_market_current}</p>
                                            {/* <p className="subtext">current rate</p> */}
                                        </div>
                                        <div className="prediction-buttons">
                                            <button className="up">U</button>
                                            <input type="number" placeholder="Prediction Value" name="prediction" value={formData?.prediction} onChange={changeHandle} />
                                            <button className="down">D</button>
                                        </div>
                                        <button type="button" onClick={handleShow} disabled={!formData?.prediction} className="btn  btn-primary-next mt-3">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 wid-100 mt-3">
                                <div className="select-palyers">
                                    <div className="select-palyers-header">
                                        <p>Ranking Rewards</p>
                                    </div>
                                    {contestPublicGetData && contestPublicGetData?.rankingRewards?.map((item) => {
                                        return <div className="col-lg-6" key={item?._id}>
                                            <div className="select-palyers">
                                                {/* <strong>Maximum Rank :  {item?.maxRank}</strong>
                                                <br /> */}
                                                <strong>Rank :  {item?.minRank == item?.maxRank ? item?.minRank : item?.minRank + '-' + item?.maxRank}</strong>
                                                <br />
                                                <strong>Reward : {item?.reward}</strong>
                                            </div>
                                        </div>
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal className="pkg-details-modal"
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}

                style={{
                    zIndex: 1050,

                }}>
                <Modal.Header closeButton className="pkg-details-header">
                    <Modal.Title className="pkg-details-title">Package Purchase Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pkg-details-body">
                    <div className="pkg-info-grid">
                        <div className="pkg-info-item">
                            <div className="pkg-info-label">Current Balance</div>
                            <div className="pkg-info-value">₹ {walletData?.main_wallet ?? 0}</div>
                        </div>
                        <div className="pkg-info-item">
                            <div className="pkg-info-label">
                                Available Balance after transaction
                            </div>
                            <div className="pkg-info-value">

                                {
                                    (walletData?.main_wallet - (contestPublicGetData?.isFree ? 0 : contestPublicGetData?.entryFee)) < 0
                                        ? "₹ 0"
                                        : `₹ ${(walletData?.main_wallet - (contestPublicGetData?.isFree ? 0 : contestPublicGetData?.entryFee))
                                            .toFixed(2)
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                                }
                                {/* {(walletData2?.main_wallet - saleRate?.real_value) < 0 
      ? ` (Available Balance after transaction: ₹ ${Math.abs(walletData2?.main_wallet - saleRate?.real_value)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")})`
      : ""} */}
                            </div>
                        </div>
                    </div>

                    <div className="pkg-details-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Entry MRP</td>
                                    <td>₹ {contestPublicGetData?.isFree == true ? '0' : contestPublicGetData?.entryFee}</td>
                                </tr>
                                {/* <tr>
                                    <td>Sale Price</td>
                                    <td>₹ {saleRate?.sale_rate ?? 0}</td>
                                </tr>
                                <tr>
                                    <td>Tax ({saleRate?.tax ?? 0}{saleRate?.tax_type})</td>
                                    <td>₹ {(saleRate?.sale_rate * saleRate?.tax / 100).toFixed(2)}</td>
                                </tr> */}
                                <tr className="total-row">
                                    <td>Total Amount</td>
                                    <td>₹ {contestPublicGetData?.isFree == true ? '0' : contestPublicGetData?.entryFee}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="pkg-tpin-section">

                        <label className="pkg-tpin-label">Select Method  <span className="text-danger">*</span></label>
                        <select className="form-select mb-3" aria-label="Default select example" name="paymentMethod" onChange={changeHandle}>
                            <option selected disabled>select Method</option>
                            <option value={'wallet'} >Wallet</option>
                            {paymentSelectData && paymentSelectData?.map((item) => {
                                return <option value={item?.slug}>{item?.name}</option>
                            })}
                        </select>



                        {/* <label className="pkg-tpin-label">Enter Tpin <span className="text-danger">*</span></label>
                        <div className="pkg-tpin-inputs">
                            {otp.map((value, index) => (
                                <input
                                    key={index}
                                    type="password"
                                    value={value}
                                    onChange={(e) => otpChandleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    ref={(input) => (inputs.current[index] = input)}
                                    className="pkg-tpin-input"
                                />
                            ))}
                        </div> */}
                        <button
                            type="button"
                            className="pkg-pay-button"
                            disabled={!formData?.paymentMethod || formData?.paymentMethod.length <= 0}
                            onClick={submitData}
                        >
                            {/* {isLoading ? 'Processing...' : 'PAY NOW'} */}
                            PAY NOW
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* <Modal
                size="lg"
                show={showInvoice}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="invoice-modal"

                style={{
                    zIndex: 1050,

                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Invoice</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{
                    backgroundColor: '#ffffff',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                }}>
                    <Invoice />
                </Modal.Body>
            </Modal> */}
            <ToastContainer />
        </>
    )
}
