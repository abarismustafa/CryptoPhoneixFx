import { useEffect, useState } from "react"

import useRazorpay from "react-razorpay";
import { paymentgatewaycheckout, rozarPayApi, slelectPaymetSet } from "../../../../api/login/Login";
import { useCallback } from "react";
import Loader from "../../../../common/loader/Loader";
import { ToastContainer } from "react-toastify";
import { toastSuccessMessage, toastSuccessMessageError } from "../../../../common/tostShow/TostShow";
import { useNavigate } from "react-router-dom";
import { baseUrl, baseUrlImage } from "../../../../baseUrl";
function PaymentGatway({ walletShowHeader }) {
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        amount: '',
        // note: ''
    })

    const handleChange = (e) => {
        const clone = { ...formData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFormData(clone)
    }
    const [Razorpay] = useRazorpay();



    const [paymentSelectData, setPaymentSelectData] = useState([])
    // console.log(paymentSelectData && paymentSelectData?.getPaymentGatewayCred);
    const [user, setUser] = useState(null)
    // console.log(user);



    const paymentSelect = async () => {
        try {
            const res = await slelectPaymetSet()
            // console.log(res?.data?.data);
            setPaymentSelectData(res?.data?.data?.getPaymentGatewayCred)
            setUser(res?.data?.data)
        } catch (error) {

        }
    }

    const handlePayment = useCallback(async (data) => {
        console.log('paymetRzor', data);
        const filterSecrateKy = paymentSelectData?.map((item) => {
            return item
        })
        // console.log(filterSecrateKy);


        const filterRoazarKey = filterSecrateKy?.filter((item) => {
            return item?.slug == 'razorpay'
        })
        // console.log('filterRoazarKey', filterRoazarKey[0]?.key);
        try {
            // const res = await rozarPayApi(rozarPayData);
            // "rzp_test_9VeeiBAgDSX9Tq"
            // console.log('hkjbhjkhjlknl', user);

            const options = {
                key: filterRoazarKey[0]?.key,
                amount: data?.amount,
                currency: data?.currency,
                name: "PlayNif50",
                description: "Test Transaction",
                image: `${baseUrlImage}image-1729583770735.jpeg`,
                order_id: data?.id,
                // callback_url: `${baseUrl}` + '/paymentGateway/mb/checkout',
                handler: (res) => {
                    console.log(res);
                    checkoutPaymentRazorPay(res)
                    // handleClose()
                    walletShowHeader()
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
        setLoader(true)
        const clone = { ...formData, paymentGate: 'razorpay' }
        try {
            const res = await rozarPayApi(clone)
            // console.log(res?.data?.data);
            if (res?.data?.error == false) {
                // toastSuccessMessage(res?.data?.message)
                // setTimeout(() => {
                //     navigate('/contest-payment-report')
                // }, 1000)
                handlePayment(res?.data?.data)
            }
            else {
                toastSuccessMessageError(res?.data?.message)
            }
            setFormData({
                amount: ''
            })
            setLoader(false)
        } catch (error) {
            setLoader(false)
        }
    }


    const checkoutPaymentPhonePay = async (data) => {
        setLoader(true)
        const clone = { ...formData, paymentGate: 'phonepe' }
        try {
            const res = await rozarPayApi(clone)
            // console.log(res?.data?.data);
            if (res?.data?.error == false) {
                // toastSuccessMessage(res?.data?.message)
                // setTimeout(() => {
                //     navigate('/contest-payment-report')
                // }, 1000)
                handlePhonePay(res?.data?.data?.url)
            }
            else {
                toastSuccessMessageError(res?.data?.message)
            }
            setFormData({
                amount: ''
            })
            setLoader(false)
        } catch (error) {
            setLoader(false)
        }
    }

    const checkoutPaymentRazorPay = async (data) => {
        try {
            const res = await paymentgatewaycheckout(data)
            // console.log(res?.data?.message);
            walletShowHeader()
            setTimeout(() => {
                if (res?.data?.message == 'message') {
                    toastSuccessMessage(res?.data?.message)

                }
            }, 3000)
        } catch (error) {

        }
    }


    const handlePhonePay = async (url) => {
        try {
            window.location.href = url
        } catch (error) {

        }
    }


    useEffect(() => {
        paymentSelect()
    }, [])

    if (!paymentSelectData || !user) return <Loader />;
    return (
        <>
            {loader && <Loader />}

            <div className="PageHeading">
                <h1>Payment Gateway </h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header" style={{}}><span>Filter</span></div>
                    <div className="card-body" style={{}}>
                        <form method="post" name="frmBillReport" id="frmBillReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" style={{ alignItems: "end" }}>
                                <div className="form-group col-lg-4 col-md-12 ">
                                    <label htmlFor="txtFrom">Amount <span style={{ color: 'red' }}>*</span></label>
                                    <input className="form-control datefield" id="txtFrom" name="amount" type="number" value={formData?.amount} placeholder="Enter Amount" onChange={handleChange} />
                                </div>
                                {/* <div className="form-group col-md-2">
                                    <label htmlFor="txtTo">Note <span style={{ color: 'red' }}>*</span></label>
                                    <input className="form-control datefield" id="txtTo" name="note" type="text" value={formData?.note} placeholder="Enter Note" onChange={handleChange} />
                                </div> */}
                                <div className="form-group col-lg-6 col-md-12 ">
                                    <button type="button" className="btn btn-primary mr-3" disabled={!formData?.amount} onClick={checkoutPayment}>Via Razorpay</button>
                                    <button type="button" className="btn btn-primary" disabled={!formData?.amount} onClick={checkoutPaymentPhonePay}>Via Phone Pay</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
            <ToastContainer />
        </>
    )
}
export default PaymentGatway