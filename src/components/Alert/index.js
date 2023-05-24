import React, { useEffect, useState } from "react";
import "./style.css";

export const Alert = ({ msg }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (msg) {
      setShow(true);
      setTimeout(() => setShow(false), 5000);
    }
  }, [msg]);

  return <>{show && <div className="alert-box">{msg}</div>}</>;
};
