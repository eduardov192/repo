import React from "react";
import { useGlobalContext } from "../context";
import { useEffect } from "react";

export const Alert = () => {
  const {
    alert: { type, msg },
    showAlert,
  } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div className={`${type}`} role="alert">
        <span className="block sm:inline"> {msg}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
      </div>
    </div>
  );
};

export default Alert;
