import React from "react";

const TemplateHero = ({ headline, setHeadline, subtext, setSubtext }) => {
  return (
    <div className="text-center mb-10">
      <input
        className="text-4xl md:text-5xl font-bold mb-4 bg-transparent border-b border-white text-center w-full focus:outline-none"
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
      />
      <textarea
        className="text-lg md:text-xl mb-8 bg-transparent border-b border-white w-full text-center focus:outline-none"
        value={subtext}
        onChange={(e) => setSubtext(e.target.value)}
      />
    </div>
  );
};

export default TemplateHero;