import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const MailView = () => {
  const history = useHistory();
  const msg = useSelector((state) => state.msgData.message);

  const returnEvent = () => {
    history.replace("/home");
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      //   style={{ height: "100vh" }}
      style={{ marginTop: "2rem" }}
    >
      <div
        className="card"
        // style={{ maxWidth: "90rem" }}
      >
        <div className="card-body text-center">
          <strong className="d-flex">{msg.msgFrom}</strong>
          <strong className="d-flex">{msg.msgTitle}</strong>
          <p className="d-flex">{msg.msgMSGData}</p>
        </div>
        <div className="text-center">
          <button className="btn btn-outline-info" onClick={returnEvent}>
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailView;
