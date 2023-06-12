import React from "react";
import EmailSignUp from "./EmailSignUp";

export default function Footer() {
  return (
    <div className="email-footer">
      <div>Subscribe to get ChippiCon event updates!</div>
      <EmailSignUp />
    </div>
  );
}
