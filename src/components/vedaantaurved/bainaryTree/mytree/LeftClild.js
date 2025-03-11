
import React from 'react'
import defualt from "../../../../asesets/logo/profile.jpg";
import { Badge } from 'react-bootstrap';
import LeftChildLeft from './LeftChildLeft';
const LeftClild = ({ bineryData }) => {
    console.log(bineryData);

    return (
        <div className="row">
            {bineryData && bineryData?.children?.map((item) => {
                // console.log(item);
                return <div className="col-6 justify-content-center position-relative" key={item?._id}>
                    <div className="text-center">
                        <div className="circle-tree overflow-hidden">
                            <img src={defualt} className="w-100 h-100" />
                        </div>
                        <Badge className="fs-5 ">{item?.refer_id}</Badge>
                    </div>
                    <div className="line">
                        <span className="left-arow"></span>
                        <span className="right-arow"></span>
                    </div>
                    <div className='row'>
                        <LeftChildLeft item={item} />
                    </div>
                </div>
            })}

            {/* <div className="col-6 justify-content-center position-relative">
                <div className="text-center">
                    <div className="circle-tree overflow-hidden">
                        <img src={defualt} className="w-100 h-100" />
                    </div>
                    <Badge className="fs-5 ">VA1097
                    </Badge>
                </div>
                <div className="line">
                    <span className="left-arow"></span>
                    <span className="right-arow"></span>
                </div>
            </div> */}
        </div>
    )
}

export default LeftClild