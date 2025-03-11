import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img from "../../../../asesets/logo/profile.jpg"

function TreeModuls(props) {

    return (
        <>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='bg-primary rounded-top-left rounded-top-right p-2 text-center'>
                    <Modal.Title id="contained-modal-title-vcenter" >
                        <span className=' text-white'>Member Binary Details</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <div className='p-3 bg-light'>
                            <div className='d-flex align-items-center gap-4 rounded'>
                                <img src={img} style={{ height: "100px", width: "100px" }} className='rounded-circle' />
                                <div className=''>
                                    {/* <h1>Hand Dhdhhd</h1> */}
                                    <p className='fs-4'>Member Code : AI33456</p>

                                </div>
                            </div>
                        </div>
                        <h2 className='text-center fs-6 mt-3'>Referred By User Code: AI9996786 </h2>
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
                                    <td valign="top" className="dataTables_empty">Current Free Users</td>
                                    <td valign="top" className="dataTables_empty">12</td>
                                    <td valign="top" className="dataTables_empty">8</td>

                                </tr>
                                <tr>
                                    <td valign="top" className="dataTables_empty">Current Paid Users</td>
                                    <td valign="top" className="dataTables_empty">6</td>
                                    <td valign="top" className="dataTables_empty">3</td>

                                </tr>
                                <tr>
                                    <td valign="top" className="dataTables_empty">Total Invesment</td>
                                    <td valign="top" className="dataTables_empty">12000</td>
                                    <td valign="top" className="dataTables_empty">25000</td>

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