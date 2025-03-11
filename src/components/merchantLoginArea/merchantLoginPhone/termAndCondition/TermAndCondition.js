import { Button, Modal } from "react-bootstrap"

function TermAndCondition(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} className="dilog-condition">
                <Modal.Header closeButton>
                    <Modal.Title>Terms and Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row m-0">
                        <div className="col-lg-12">
                            <div className="subscription-container card p-3">
                                <h2 className="text-center bg-warning rounded">‘AIBOT Trading Subscription</h2>
                                <p>
                                    The subscription worth <strong>$125</strong> is valid for <strong>12 months</strong> from the sign-up date.
                                </p>

                                <ul>
                                    <li>Standard package subscribers are entitled to <strong>70% profit</strong> on the profit earned from ‘AI BOT Trading.</li>
                                    <li>Classic package subscribers are entitled to <strong>70% profit</strong> on the profit earned from ‘AI BOT Trading.</li>
                                    <li>Premium package subscribers are entitled to <strong>70% profit</strong> on the profit earned from ‘AI BOT Trading.</li>
                                    <li>‘AI BOT Trading subscription is <strong>non-refundable</strong>.</li>
                                    <li>No <strong>ROI</strong> is valid on ‘AI BOT Trading Subscription.</li>
                                    <li>
                                        After subscribing to ‘AI BOT Trading, the subscriber is eligible for
                                        <strong> three packages</strong>: Standard Category, Classic Category, and Premium Category.
                                    </li>
                                    <li>Profit earned on investment will be credited to the subscriber’s wallet on the <strong>1st date of every month</strong>.</li>
                                    <li>
                                        To choose an investment package, the subscriber needs to sign up at
                                        <a href="https://partners.aibotworld.in/" target="_blank" rel="noopener noreferrer"> partners.aibotworld.in</a>.
                                    </li>
                                    <li>Profit can be withdrawn immediately after being credited to the wallet.</li>
                                    <li>
                                        Subscribers can choose a package according to their investment. Package category details are mentioned below.
                                    </li>
                                    <li>Subscribers can withdraw profit, with a minimum withdrawal amount of <strong>USD 10</strong>.</li>
                                    <li>After investment, trading will start <strong>immediately</strong> through ‘AI BOT Trading.</li>
                                    <li>
                                        <strong>Available invested amount*</strong> can be withdrawn anytime, either fully or partially, and will be processed
                                        within <strong>24-72 working hours</strong>.
                                    </li>
                                    <li>
                                        If you withdraw your capital or principal:
                                        <ul>
                                            <li>Within <strong>three months</strong>, a <strong>15%</strong> deduction will apply.</li>
                                            <li>Between <strong>three to six months</strong>, a <strong>10%</strong> deduction will apply.</li>
                                            <li>After <strong>six months</strong>, no deduction will be applied.</li>
                                        </ul>
                                    </li>
                                </ul>

                                <p>
                                    For any questions or queries related to the ‘AI BOT Trading application, please email us at
                                    <a href="mailto:aibot@gmail.com"> aibot@gmail.com</a>.
                                </p>

                                <p>
                                    <strong>*Available invested amount:</strong> If any loss trade is running on the account, the available amount will be calculated on a
                                    <strong> pro-rata basis</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default TermAndCondition
