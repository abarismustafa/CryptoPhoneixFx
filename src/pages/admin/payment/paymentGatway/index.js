import PaymentGatway from "../../../../components/admin/payment/paymentGatway/PaymentGatway"


function PaymentGateWayPage({ walletShowHeader }) {
    return (
        <>
            <PaymentGatway walletShowHeader={walletShowHeader} />
        </>
    )
}
export default PaymentGateWayPage