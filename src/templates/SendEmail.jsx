import React from "react";
import "@styles/SendEmail.scss";
import logo from "@logos/logo_yard_sale.svg";
import email from "@icons/email.svg";
import Link from "next/link";
import Image from "next/image";

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container">
        <Image src={logo} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <Image src={email} alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span> Didnt receive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
