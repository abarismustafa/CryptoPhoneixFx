import React, { useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import CardModuls from "./PlanCardModuls";
import { Link } from "react-router-dom";
import PlanModal from "./planModal/PlanModal";
import circular_img from "../../assets/img/banner/counter_shape.png";


export default function PlansCards({
  planGet,
  planData,
  walletShowHeader,
  walletData,
}) {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openModal = (item) => {
    setItem(item);
    setModalShow(true);
  };
  return (
    <>
      {planData &&
        planData?.map((item) => {
          // console.log(item);
          return (
            <div className="col-lg-4 col-md-6" key={item?._id}>
              <div className="card">
                <CardModuls show={show} handleClose={handleClose} />
                <div className="packageItem" style={{ backgroundImage: `url(${circular_img})` }}>
                  <h4>${item?.prices[0]?.BasePrice}USD</h4>
                  <div className="price">
                    <p>{item?.name}</p>
                  </div>

                  <ul className="p-0">
                    {/* <li>
                      <span className="text-white">
                        <span className="text-success">✔</span> Matching Bonus:
                        ${item?.MatchBonus} USD
                      </span>
                      <button
                        type="button"
                        className="btn btn-link text-decoration-none"
                        title="More info"
                        onClick={handleShow}
                      >
                        <CiCircleQuestion />
                      </button>
                    </li> */}
                    <li>
                      <span className="text-white">
                        <span className="text-success">✔</span> Referral Income:
                        ${item?.ReferIncome} USD
                      </span>
                      <button
                        type="button"
                        className="btn btn-link text-decoration-none"
                        title="More info"
                        onClick={handleShow}
                      >
                        <CiCircleQuestion />
                      </button>
                    </li>
                    <li className=" ">
                      <span>
                        <span className="text-success">✔</span> level Income: $
                        {item?.levelincome} USD
                      </span>
                      <button
                        type="button"
                        className="btn btn-link  text-decoration-none"
                        title="More info"
                        onClick={handleShow}
                      >
                        <CiCircleQuestion />
                      </button>
                    </li>
                    <li className=" ">
                      <span>
                        <span className="text-success">✔</span>Earn upto{" "}
                        {item?.earnUpto} USD $ Daily From Matching Bonus{" "}
                      </span>
                      <button
                        type="button"
                        className="btn btn-link text-decoration-none"
                        title="More info"
                        onClick={handleShow}
                      >
                        <CiCircleQuestion />
                      </button>
                    </li>
                  </ul>
                  {/* <Link to="/depositmethod" className="btn btn-outline-primary w-100">Subscribe</Link> */}
                  <button
                    type="button"
                    className="commonButton"
                    disabled={item?.isPurchase === true}
                    onClick={() => openModal(item)}
                  >
                    {/* Subscribe */}
                    {item?.isPurchase ? "Purchased" : "Subscribe"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      <PlanModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={item}
        walletShowHeader={walletShowHeader}
        walletData={walletData}
        planGet={planGet}
      />
    </>
  );
}
