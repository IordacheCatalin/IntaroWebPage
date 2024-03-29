import React, { useState } from "react";
import "./ContactForm.css";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

import VerificationCodeGenerator from "./VerificationCodeGenerator";

const ContactForm = () => {
  const { t } = useTranslation("global");
  const [generatedVerificationCode, setGeneratedVerificationCode] =
    useState("");
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit");

    // Verify the verification code
    if (!isCodeVerified) {
      const emailValidationMessage = document.getElementById(
        "emailValidationmessage"
      );
      emailValidationMessage.innerText = "Please enter the verification code.";
      emailValidationMessage.classList.add("statusError");
      return; // Prevent further submission
    }

    // Clear any previous error messages
    const emailValidationMessage = document.getElementById(
      "emailValidationmessage"
    );
    
    emailValidationMessage.innerText = "";

    // Validate form fields
    const newErrors = {};
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
    }
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number must be 10 digits";
    }
    if (formData.subject.trim() === "") {
      newErrors.subject = "Subject is required";
    }
    if (formData.message.length < 50) {
      newErrors.message = "Message must be at least 50 characters long";
    }

    setErrors(newErrors); // Set custom error messages

    if (Object.keys(newErrors).length === 0) {
      // Clear errors on successful submission
      setErrors({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
        verificationCode: "",
      });

      // Send email using emailjs
      const emailData = {
        to_name: "Intaro.ro", // Replace with recipient's name
        from_name: formData.firstName + " " + formData.lastName,
        from_email: formData.email,
        phone_number: formData.phoneNumber,
        subject: formData.subject,
        message: formData.message,
      };

      emailjs
        .send(
          "service_zj8cj3s",
          "template_elpjxxd",
          emailData,
          "IyE2K0EVX7mtrRSs6"
        )
        .then(
          (result) => {
            const emailValidationMessage = document.getElementById(
              "emailValidationmessage"
            );
            emailValidationMessage.innerText = "Email successfully sent!";
            // Perform additional actions after successful email sending
            // For example, clear form inputs
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            const emailValidationMessage = document.getElementById(
              "emailValidationmessage"
            );
            emailValidationMessage.innerText = "Email not send!";
            emailValidationMessage.classList.add("statusError");
            // Handle errors if the email sending fails
          }
        );
    }
  };

  const handleVerificationCodeUpdate = (code) => {
    setGeneratedVerificationCode(code);
    setIsCodeVerified(false); // Reset the verification status when code changes
  };

  const handleVerificationStatusChange = (status) => {
    setIsCodeVerified(status);
  };

  return (
    <div className="container mt-3">
      <h2>{t("Contact.Text01")}</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="">
          {/* <label htmlFor="firstName" className="form-label">
         
        </label> */}
          <input
            type="text"
            className={`form-control custom-input mt-3 ${
              errors.firstName && "is-invalid"
            }`}
            id="firstName"
            name="firstName"
            value={formData.firstName}
            placeholder={t("Contact.Text02")}
            onChange={handleChange}
          />
          {errors.firstName && (
            <div className="custom-error">{errors.firstName}</div>
          )}
        </div>
        <div className="">
          {/* <label htmlFor="lastName" className="form-label">
         
        </label> */}
          <input
            type="text"
            className={`form-control custom-input mt-3 ${
              errors.lastName && "is-invalid"
            }`}
            id="lastName"
            name="lastName"
            value={formData.lastName}
            placeholder={t("Contact.Text03")}
            onChange={handleChange}
          />
          {errors.lastName && (
            <div className="custom-error">{errors.lastName}</div>
          )}
        </div>
        <div className="">
          {/* <label htmlFor="email" className="form-label">
          
          </label> */}
          <input
            type="email"
            className={`form-control  custom-input mt-3 ${
              errors.email && "is-invalid"
            }`}
            id="email"
            name="email"
            value={formData.email}
            placeholder={t("Contact.Text04")}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="custom-error">{errors.email}</div>}
        </div>
        <div className="">
          {/* <label htmlFor="phoneNumber" className="form-label">
          
          </label> */}
          <input
            type="tel"
            className={`form-control custom-input mt-3 ${
              errors.phoneNumber && "is-invalid"
            }`}
            id="phoneNumber"
            name="phoneNumber"
            pattern="[0-9]"
            value={formData.phoneNumber}
            placeholder={t("Contact.Text05")}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && (
            <div className="custom-error">{errors.phoneNumber}</div>
          )}
        </div>
        <div className="">
          {/* <label htmlFor="subject" className="form-label">
            
          </label> */}
          <select
            className={`form-select custom-input mt-3 ${
              errors.subject && "is-invalid"
            }`}
            id="subject"
            name="subject"
            value={formData.subject}
            placeholder={t("Contact.Text06")}
            onChange={handleChange}
            required
          >
            <option value="">{t("Contact.Text06")}</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && (
            <div className="custom-error">{errors.subject}</div>
          )}
        </div>
        <div className="">
          {/* <label htmlFor="message" className="form-label">
           
          </label> */}
          <textarea
            className={`form-control custom-input mt-3 ${
              errors.message && "is-invalid"
            }`}
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            placeholder={t("Contact.Text07")}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && (
            <div className="custom-error">{errors.message}</div>
          )}
        </div>
        <VerificationCodeGenerator
          onUpdate={handleVerificationCodeUpdate}
          onVerificationStatusChange={handleVerificationStatusChange}
          isCodeVerified={isCodeVerified}
        />
        <span>
          <button type="submit" className="custom-btn">
            {t("Contact.Text08")}
          </button>
          <span
            className="emailValidationmessage"
            id="emailValidationmessage"
          ></span>
        </span>
      </form>
    </div>
  );
};

export default ContactForm;
