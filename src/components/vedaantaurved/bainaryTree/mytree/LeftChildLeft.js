
import React from 'react'
import defualt from "../../../../asesets/logo/profile.jpg";
import { Badge } from 'react-bootstrap';
import ChildIsChild from './ChildIsChild';
const LeftChildLeft = ({ item }) => {
    // console.log(item);

    return (
        <>
            {item && item?.children?.map((item) => {
                return <div className="col-6 justify-content-center position-relative">
                    <div className="text-center">
                        <div className="circle-tree overflow-hidden">
                            <img src={defualt} className="w-100 h-100" />
                        </div>
                        <Badge className="fs-5 ">{item?.name}</Badge>
                    </div>
                    <div className="line">
                        <span className="left-arow"></span>
                        <span className="right-arow"></span>
                    </div>
                    <div className='row'>
                        <ChildIsChild item={item} />
                    </div>
                </div>
            })}

        </>
    )
}

export default LeftChildLeft