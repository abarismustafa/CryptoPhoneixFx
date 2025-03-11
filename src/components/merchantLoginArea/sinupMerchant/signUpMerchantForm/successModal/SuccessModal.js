
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import '../successModal/sucessModal.css'
import img from '../../../../../assets/img/logo-name.PNG'
import { useNavigate } from 'react-router-dom'
const SuccessModal = (props) => {
    // console.log(props);
    const navigate = useNavigate()
    const closeModal = () => {
        props.onHide();
        navigate("/login-area");
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
        >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='sucess-modal'>
                            <h2>Welcome To PhonenixFx AiWorld</h2>
                            <div className='img-logo-modal'>
                                <img src={img} alt="" />
                            </div>
                            <h2 className='mt-3'>(Register Successfully)</h2>


                            <div className='content-modal-sucss mt-3'>
                                <h1>Member Code :</h1>
                                <p>{props?.sucessData?.refer_id}</p>
                            </div>
                            <div className='content-modal-sucss'>
                                <h1>Password :</h1>
                                <p>{props?.resiter?.password}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={closeModal} className>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SuccessModal