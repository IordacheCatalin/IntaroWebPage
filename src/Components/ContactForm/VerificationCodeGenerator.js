import React, { useState, useEffect } from "react";
import "./ContactForm.css";

const VerificationCodeGenerator = ({
  onUpdate,
  onVerificationStatusChange,
  isCodeVerified,
}) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [userEnteredCode, setUserEnteredCode] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);

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

  return (
    <div className="verification-code">
      <button
        type="button"
        className="custom-btn verificationBtn"
        onClick={generateVerificationCode}
      >
        New Code
      </button>
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
