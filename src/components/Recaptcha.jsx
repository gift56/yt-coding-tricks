import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaComponent = () => {
  const [verified, setVerified] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }
  function loadingRecaptcha() {
    console.log("loaded recaptcha");
  }

  function handleSubscripe() {
    if (verified) {
      alert("You have Successfully subscribed!");
    } else {
      alert("Please verify if you're a human");
    }
  }

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Email Address"
        className="w-[400px] bg-white rounded outline-none h-14 px-4"
      />
      <button
        onClick={handleSubscripe}
        className="px-4 h-14 bg-purple-700 text-white text-base font-semibold"
      >
        Subscribe
      </button>
      <ReCAPTCHA
        sitekey="6Lc5b0ooAAAAAFV6RuPHVkfNIs4TSH3gI5CYTGdf"
        onChange={onChange}
        className="mt-4"
        asyncScriptOnLoad={loadingRecaptcha}
      />
    </div>
  );
};

export default RecaptchaComponent;
