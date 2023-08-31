import React, { useState, useEffect } from "react";
import "./ContactForm.css";

import { ReactComponent as RefreshBtn } from "../../Assets/refresh.svg";
import { ReactComponent as RefreshBtnHover } from "../../Assets/refreshOnHover.svg";

const VerificationCodeGenerator = ({
  onUpdate,
  onVerificationStatusChange,
  isCodeVerified,
}) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [userEnteredCode, setUserEnteredCode] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    generateVerificationCode();
  }, []);

  const generateVerificationCode = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    setVerificationCode(code);
    onUpdate(code);
    onVerificationStatusChange(false);
  };

  const handleUserEnteredCodeChange = (event) => {
    const enteredCode = event.target.value;
    setUserEnteredCode(enteredCode);

    if (enteredCode.length === 5) {
      verifyCode(enteredCode); // Automatically verify the entered code
    } else {
      // Clear any previous verification status
      onVerificationStatusChange(false);
      setVerificationStatus(null);
    }
  };

  const verifyCode = (codeToVerify) => {
    if (codeToVerify === verificationCode) {
      const emailValidationMessage = document.getElementById(
        "emailValidationmessage"
      );
      emailValidationMessage.innerText = "Verification code is correct.";
      emailValidationMessage.classList.remove("statusError");
      emailValidationMessage.classList.add("statusOk");
      onVerificationStatusChange(true);
      setVerificationStatus("Matched");
    } else {
      onVerificationStatusChange(false);
      setVerificationStatus("Not Matched");

      if (codeToVerify.length === 5) {
        const emailValidationMessage = document.getElementById(
          "emailValidationmessage"
        );
        emailValidationMessage.innerText = "Verification code is incorrect.";
        emailValidationMessage.classList.add("statusError");
      } else {
        const emailValidationMessage = document.getElementById(
          "emailValidationmessage"
        );
        emailValidationMessage.innerText = ""; // Clear error message if not 5 characters
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="verification-code">
      <div
        onClick={generateVerificationCode}
        className="verificationBtn"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? <RefreshBtnHover /> : <RefreshBtn />}
      </div>
      <div className="ToBeTypeCode">{verificationCode}</div>
      <input
        type="text"
        placeholder="Enter verification code"
        value={userEnteredCode}
        onChange={handleUserEnteredCodeChange}
        className="custom-input"
      />

      {/* {verificationStatus && <p>{verificationStatus}</p>} */}
    </div>
  );
};

export default VerificationCodeGenerator;
