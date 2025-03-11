import React from "react";

const LocationModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  locationDialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bgGray">
              <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="locationBody ">
                <h3>Let's Personalize Your Experience!</h3>
                <p>
                  Find the perfect gifts for you or your loved ones – it's like
                  magic!
                </p>
                <form className="form">
                  <div className="radioPart">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Within India
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Outside India
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter delivery location or pincode"
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn bgBlue text-white" type="button">
                      Continue Shopping
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationModal;
