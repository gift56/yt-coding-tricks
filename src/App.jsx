import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import RecaptchaComponent from "./components/Recaptcha";

const App = () => {
  const [show, setShow] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current?.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [show]);

  const varaint = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 },
  };

  return (
    <div className="w-full flex items-center flex-col justify-center h-screen overflow-hidden bg-gray-400 text-black">
      <button
        onClick={() => setShow(true)}
        className="w-fit p-3 rounded-lg font-medium bg-white cursor-pointer outline-none"
      >
        Click Me
      </button>

      <RecaptchaComponent />

      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#0000004f] z-40 place-items-center flex justify-center transition-all duration-500 overflow-auto ${
          show ? "flex" : "hidden"
        }`}
      >
        <motion.div
          animate={show ? "open" : "closed"}
          variants={varaint}
          ref={modalRef}
          className="w-[90%] md:w-[600px] p-4 bg-white rounded-lg flex flex-col items-start justify-start h-fit"
        >
          <h2>Opened</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
            asperiores tenetur. Numquam eligendi, hic repellat aperiam ab soluta
            rerum excepturi.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
