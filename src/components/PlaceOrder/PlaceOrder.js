import React from "react";

const PlaceOrder = () => {
  return (
    <div className="text-center mt-5">
      <h2 className="mb-5"> Please, Your product place Order</h2>
      <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Place Order
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h4>Your order has been $30. please Payment the money very quickly,, then your order coming soon... </h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success fs-5" data-bs-dismiss="modal">
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
