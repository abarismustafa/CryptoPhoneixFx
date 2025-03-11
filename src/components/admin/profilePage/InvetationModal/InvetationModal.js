
import { Button, Modal } from "react-bootstrap"
import QRCode from 'qrcode.react';
import { Link } from "react-router-dom";
import { useState } from "react";



const InvetationModal = (props) => {
    const url = `https://phoenixfxaiworld.maqtheworldgroup.com/${props?.refer_id}`;
    const [copied2, setCopied2] = useState(false);
    const handleCopyClic2 = (referralCode) => {
        navigator.clipboard.writeText(`https://phoenixfxaiworld.maqtheworldgroup.com/${referralCode}`)
            .then(() => {
                setCopied2(true);  // Set feedback
                setTimeout(() => setCopied2(false), 2000);
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    }
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Invitation Code
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="qr-code-set" style={{ width: '500px', margin: 'auto', textAlign: 'center' }}>
                                <h2>Scan the QR Code to sign up</h2>
                                <QRCode value={url} size={230} />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div>
                                <h4 style={{ color: 'red' }}>Invitation Code</h4>
                                <div className="inviteCode">
                                    <p>{props?.refer_id}</p>
                                    <button type="button" className="btn btn-primary" onClick={() => props?.handleCopyClick(props?.refer_id)}>
                                        {props?.copied ? 'Copied!' : 'Copy Referral Code'}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h4 style={{ color: 'red', marginTop: '10px' }}>Invitation Link</h4>

                                <div className="inviteLink">
                                    <p>{`https://phoenixfxaiworld.maqtheworldgroup.com/${props?.refer_id}`}</p>
                                    <button type="button" className="btn btn-primary" onClick={() => handleCopyClic2(props?.refer_id)}>
                                        {copied2 ? 'Copied!' : 'Copy Invitation Link'}
                                    </button>
                                    <Link className="btn btn-primary ml-2" to={`https://phoenixfxaiworld.maqtheworldgroup.com/${props?.refer_id}`} target="_blank">
                                        Invitation Link
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default InvetationModal