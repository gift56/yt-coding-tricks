import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaComponent = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return <ReCAPTCHA sitekey="6Lc5b0ooAAAAAFV6RuPHVkfNIs4TSH3gI5CYTGdf" onChange={onChange} />;
};

export default RecaptchaComponent;
