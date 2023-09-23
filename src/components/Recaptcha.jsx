import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaComponent = () => {
  const [verified, setVerified] = useState(false);

  function handleSubscripe() {}

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
    </div>
  );
};

export default RecaptchaComponent;
