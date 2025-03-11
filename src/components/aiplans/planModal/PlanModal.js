import { ToastContainer } from "react-toastify"
import { addPlanPurchage, checkoutContestParticipate, slelectPaymetSet } from "../../../api/login/Login";

import useRazorpay from "react-razorpay";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { toastSuccessMessage } from "../../compeleteRegister/ToastShare";
import { toastSuccessMessageError } from "../../../common/tostShow/TostShow";
const PlanModal = (props) => {
    const params = useParams()
    // console.log(props?.item)

    const navigate = useNavigate()
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
        package_id: '',
        paymentMethod: "",
        // paymentGate: '',
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
            // const res = await contestPublic(params?.id)
            // // console.log(res?.data);

            // setContestPublicGetData(res?.data?.data);

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
        const clone = {
            ...formData, package_id: props?.item?._id
        }
        console.log('clone', clone);
        try {
            const res = await addPlanPurchage(clone)
            if (res?.data?.error == false) {
                toastSuccessMessage(res?.data?.message)
                props?.onHide()
                props?.planGet()
                navigate('/package-payment-report')
                props?.walletShowHeader()
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
                    // handleClose()

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
            // walletShowHeader()

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
            <Modal className="pkg-details-modal"
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="pkg-details-header">
                    <Modal.Title className="pkg-details-title">Package Purchase Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pkg-details-body">
                    <div className="pkg-info-grid">
                        <div className="pkg-info-item">
                            <div className="pkg-info-label">Current Balance</div>
                            <div className="pkg-info-value">$ {props?.walletData?.main_wallet ?? 0}</div>
                        </div>
                        <div className="pkg-info-item">
                            <div className="pkg-info-label">
                                Available Balance after transaction
                            </div>
                            <div className="pkg-info-value">
                                $ {
                                    Math.max(
                                        0,
                                        (props?.walletData?.main_wallet || 0) -
                                        (props?.item?.prices?.[0]?.TotalPrice || 0)
                                    )
                                        .toFixed(2)
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                }
                                {/* {
                                    (props?.walletData?.main_wallet - (props?.item?.prices[0]?.TotalPrice ? 0 : props?.item?.prices[0]?.TotalPrice)) < 0
                                        ? "₹ 0"
                                        : `₹ ${(props?.walletData?.main_wallet - (props?.item?.prices[0]?.TotalPrice ? 0 : props?.item?.prices[0]?.TotalPrice))
                                            .toFixed(2)
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                                } */}


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
                                    <td>Package MRP</td>
                                    <td>$ {props?.item?.prices[0]?.TotalPrice == true ? '0' : props?.item?.prices[0]?.TotalPrice}</td>
                                </tr>

                                <tr>
                                    <td>Discount MRP</td>
                                    <td>$ 0</td>
                                    {/* <td>₹ {props?.item?.prices[0]?.TotalPrice == true ? '0' : props?.item?.prices[0]?.TotalPrice}</td> */}
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
                                    <td>$ {props?.item?.prices[0]?.TotalPrice == true ? '0' : props?.item?.prices[0]?.TotalPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="pkg-tpin-section">
                        <label className="pkg-tpin-label">Select Payment Method  <span className="text-danger">*</span></label>
                        <select className="form-select mb-3" aria-label="Default select example" name="paymentMethod" onChange={changeHandle}>
                            <option selected disabled>Select Method</option>
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

export default PlanModal