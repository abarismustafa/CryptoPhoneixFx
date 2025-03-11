import React from 'react'
import { BiDollar } from 'react-icons/bi';
import { BsStack } from 'react-icons/bs';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { GoBellFill } from "react-icons/go";
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { MdAccountBalanceWallet, MdOutlineRecycling } from 'react-icons/md';
function DashboardHyip() {
    return (
        <>
            <section>
                <div className="PageHeading">
                    <h1>Dashboard</h1>
                </div>
                <div className="ContentArea">
                    <div className="card ContentArea-card">
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-xl-12'>
                                    <div className='card px-4'>
                                        <div className='d-flex gap-3 align-items-center'>
                                            <div className='icon'>
                                                <span className='bg-primary rounded px-2 py-1 text-white fs-6'><GoBellFill /></span>
                                            </div>
                                            <div className=''>
                                                <div><b>Please Allow</b> / Reset Browser Notification</div>
                                                <div><small>If You Want To Push Notification then You Have to Allow Notification  From Browser</small></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-12'>
                                    <div className='card px-4'>
                                        <div className='d-flex gap-3 align-items-center'>
                                            <div className='icon'>
                                                <span className='bg-primary rounded px-2 py-1 text-white fs-6'><GoBellFill /></span>
                                            </div>
                                            <div className=''>
                                                <div><b>2FA Auththentication</b></div>
                                                <div><small>To Keep Safe your Account,Please Enable  Security I wil Make Secure  Content and Balance.</small></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4'>
                                    <div className='card p-1 '>
                                        <div className='border border-2 px-3 py-3 rounded'>
                                            <div className='d-flex justify-content-between align-items-center'>

                                                <div className=''>
                                                    <div>Deposit Wallet Balance</div>
                                                    <div><b><span><BiDollar /></span><span>10.00</span></b></div>
                                                </div>
                                                <div className="icon">
                                                    <div className="rounded-circle border fs-6 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                                                        <span className="border rounded-circle d-flex justify-content-center align-items-center" style={{ width: "24px", height: "24px" }}>
                                                            <BiDollar />
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4'>
                                    <div className='card p-1 '>
                                        <div className='border border-2 px-3 py-3 rounded'>
                                            <div className='d-flex justify-content-between align-items-center'>

                                                <div className=''>
                                                    <div>Intrest Wallet Balance</div>
                                                    <div><b><span><BiDollar /></span><span>10.00</span></b></div>
                                                </div>
                                                <div className="icon">
                                                    <div className="rounded-circle border fs-6 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                                                        <span className="border rounded-circle d-flex justify-content-center align-items-center" style={{ width: "24px", height: "24px" }}>
                                                        <BsStack />
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4'>
                                    <div className='card p-1 '>
                                        <div className='border border-2 px-3 py-3 rounded'>
                                            <div className='d-flex justify-content-between align-items-center'>

                                                <div className=''>
                                                    <div>Total Investment Amount</div>
                                                    <div><b><span><BiDollar /></span><span>0.00</span></b></div>
                                                </div>
                                                <div className="icon">
                                                    <div className="rounded-circle border fs-6 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                                                        <span className="border rounded-circle d-flex justify-content-center align-items-center" style={{ width: "24px", height: "24px" }}>
                                                        <MdOutlineRecycling />
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4'>
                                    <div className='card p-1 '>
                                        <div className='border border-2 px-3 py-3 rounded'>
                                            <div className='d-flex justify-content-between align-items-center'>

                                                <div className=''>
                                                    <div>Total Deposit Amount</div>
                                                    <div><b><span><BiDollar /></span><span>0.00</span></b></div>
                                                </div>
                                                <div className="icon">
                                                    <div className="rounded-circle border fs-6 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                                                        <span className="border rounded-circle d-flex justify-content-center align-items-center" style={{ width: "24px", height: "24px" }}>
                                                        <FaFileInvoiceDollar />
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4'>
                                    <div className='card p-1 '>
                                        <div className='border border-2 px-3 py-3 rounded'>
                                            <div className='d-flex justify-content-between align-items-center'>

                                                <div className=''>
                                                    <div>Toatal Withdrawal Amount</div>
                                                    <div><b><span><BiDollar /></span><span>0.00</span></b></div>
                                                </div>
                                                <div className="icon">
                                                    <div className="rounded-circle border fs-6 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                                                        <span className="border rounded-circle d-flex justify-content-center align-items-center" style={{ width: "24px", height: "24px" }}>
                                                        <IoCloudDownloadOutline />
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4'>
                                    <div className='card p-1 '>
                                        <div className='border border-2 px-3 py-3 rounded'>
                                            <div className='d-flex justify-content-between align-items-center'>

                                                <div className=''>
                                                    <div>Referral Earning</div>
                                                    <div><b><span><BiDollar /></span><span>0.00</span></b></div>
                                                </div>
                                                <div className="icon">
                                                    <div className="rounded-circle border fs-6 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                                                        <span className="border rounded-circle d-flex justify-content-center align-items-center" style={{ width: "24px", height: "24px" }}>
                                                        <MdAccountBalanceWallet />
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashboardHyip
