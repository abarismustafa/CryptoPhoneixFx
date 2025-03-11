import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Getprofile } from "../../../../api/login/Login";
import { Link } from "react-router-dom";

const MyReferedMemberLink = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getDataProfile = async () => {
    try {
      const res = await Getprofile();
      setData(res?.data?.data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  const handleCopy = (link, title) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert(`${title} link copied successfully!`);
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
      });
  };

  if (loading) {
    return (
      <div className="text-center py-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!data?.refer_id) {
    return <p className="text-center text-danger">Referral ID not found!</p>;
  }

  const leftLink = `https://phoenixfxaiworld.maqtheworldgroup.com/${data.refer_id}=left`;
  const rightLink = `https://phoenixfxaiworld.maqtheworldgroup.com/${data.refer_id}=right`;

  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title text-center mb-4">Referral Link</h5>
        <div className="row align-items-center mb-3">
          <div className="col-lg-8">
            <input
              type="text"
              value={leftLink}
              readOnly
              className="form-control me-2"
            />
          </div>
          <div className="col-lg-4">
            <Link
              className="btn btn-primary"
              style={{ marginRight: "5px" }}
              to={leftLink}
              target="_blank"
            >
              Invitation Link
            </Link>
            <button
              className="btn btn-primary"
              onClick={() => handleCopy(leftLink, "Left")}
            >
              Copy
            </button>
          </div>
        </div>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-8">
            <input
              type="text"
              value={rightLink}
              readOnly
              className="form-control me-2"
            />
          </div>
          <div className="col-lg-4">
            <Link
              className="btn btn-primary"
              style={{ marginRight: "5px" }}
              to={rightLink}
              target="_blank"
            >
              Invitation Link
            </Link>
            <button
              className="btn btn-primary"
              onClick={() => handleCopy(rightLink, "Right")}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReferedMemberLink;
