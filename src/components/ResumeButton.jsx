import React from "react";

const Resume = ({ styles }) => {
  const onButtonClick = () => {
    fetch("KaiHallamCV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "KaiHallamCV.pdf";
        alink.click();
      });
    });
  };

  return (
    <div>
      <button
        type="button"
        className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 btn-highlight py-4 px-6 
    bg-blue-gradient font-poppins 
    font-medium text-[18px] 
    text-primary outline-none ${styles} rounded-[10px]`}
        onClick={() => {
          onButtonClick();
        }}
      >
        Download CV/Resume
      </button>
    </div>
  );
};

export default Resume;
