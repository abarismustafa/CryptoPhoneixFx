import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img1 from '../../asesets/travel/callme.jpg'

function SendQuery(props) {
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
                        Our expert will get in touch with you shortly
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 className='text-align-center'>Dubai Explorer</h4>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='set-count-ment'>
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='row'>
                                <div className="form-group col-md-12">
                                    <label htmlFor="txtUserId">Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="start_date" id="account_no" className="form-control" placeholder="Enter Name" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="txtUserId">Email <span style={{ color: 'red' }}>*</span></label>
                                    <input type="email" name="start_date" id="account_no" className="form-control" placeholder="Enter Email" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="txtUserId">Contact Number <span style={{ color: 'red' }}>*</span></label>
                                    <input type="email" name="start_date" id="account_no" className="form-control" placeholder="Enter Contact Number" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="txtUserId">Travel Date <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="start_date" id="account_no" className="form-control" placeholder="Enter Travel Date " />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="txtUserId">Night <span style={{ color: 'red' }}>*</span></label>
                                    <select class="form-select" name="type">
                                        <option selected>Select Night</option>
                                        <option value="all">Night1</option>
                                        <option value="all">Night2</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="txtUserId">Person <span style={{ color: 'red' }}>*</span></label>
                                    <select class="form-select" name="type">
                                        <option selected>Select Person</option>
                                        <option value="all">Person1</option>
                                        <option value="all">Person2</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12">
                                    <button type='button' className='btn btn-primary' style={{ width: '100%' }}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}
export default SendQuery