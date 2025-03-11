import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomMarquee.css';
import { Link } from 'react-router-dom';
import { marqueGet } from '../../../api/login/Login';

const CustomMarquee = ({ retailerName }) => {
  const [dataMarque, setMarque] = useState([])

  const maequeSet = async () => {
    try {
      const res = await marqueGet()
      // console.log(res?.data);
      setMarque(res?.data?.data)


    } catch (error) {

    }
  }
  useEffect(() => {
    maequeSet()
  }, [])

  return (
    <>
      <div className="custom-marquee-container mt-2" >
        {dataMarque && dataMarque?.map((item) => {
          return <div className="marquee-content" key={item?._id}>
            <span className="congratulations">Congratulations!   </span>
            <span className="message1111">
              {/* Dear <strong>{retailerName}</strong>, Your KYC request has been submitted, but some required information is missing. Please complete the necessary details to proceed with the verification process.  <Link to="/registrationComplete" style={{ color: '#fff' }}>Click Here !</Link> */}
              {/* {dataMarque} */}
              {item?.subject} <Link to={`/news_deatils/${item?._id}`}>Details</Link> ||
            </span>
          </div>
        })}

      </div>


    </>
  );
};

export default CustomMarquee;