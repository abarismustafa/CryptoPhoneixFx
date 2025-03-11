import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img from "../../asesets/banner/default.png"

function TreeModuls(props) {

    return (
        <>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        User Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                    <div className='p-3 bg-light'>
                        <div className='d-flex align-items-center gap-4 rounded'>
                            <img src={img} style={{ height: "100px", width: "100px" }} className='rounded-circle' />
                            <div className=''>
                                <h1>Hand Dhdhhd</h1>
                                <p className='fs-4'>Free</p>
                            </div>
                        </div>
                    </div>
                    <h2 className='text-center fs-6 mt-3'>Referred By: test </h2>
                    <table >
                        <thead>
                            <tr role="row">
                                <th className="sorting">
                                
                                </th>
                                <th className="sorting">
                                LEFT
                                </th>
                                <th className="sorting" >RIGHT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td valign="top" className="dataTables_empty">Current BV</td>
                            <td valign="top" className="dataTables_empty">$0.00 USD</td>
                            <td valign="top" className="dataTables_empty">$0.00 USD</td>
                        </tr>
                    </tbody>
                </table>
                </>
            </Modal.Body>
        </Modal >
    </>
  );
}

export default TreeModuls;