import React from 'react'
import "./planList.css"
function PlanList() {
    return (
        <>
            <section>
                <div className="PageHeading">
                    <h1>Plan list</h1>
                </div>
                <div className="ContentArea">
                    <div className="card ContentArea-card">
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-lg-3'> 
                                    <div className="clipboard card border" style={{ clipPath: 'polygon(88% 9%, 88% 99%, 50% 95%, 11% 99%, 11% 7%, 50% 0)', height:"100px", backgroundColor: "red" }} ></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlanList
