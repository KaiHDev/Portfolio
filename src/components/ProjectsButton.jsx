import React from "react";

const ProjectsButton = ({ styles }) => {
    const onButtonClick = () => {
        const section = document.getElementById("projects");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
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
        View Projects
      </button>
    </div>
  );
};

export default ProjectsButton;
