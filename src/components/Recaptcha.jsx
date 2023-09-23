import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaComponent = () => {
  const [verified, setVerified] = useState(false);
  function handleSubscript(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div>
      <input type="text" placeholder="Email Address" className="w-[400px] bg-white rounded outline-none h-14" />
      <button></button>
    </div>
  );
};

export default RecaptchaComponent;
