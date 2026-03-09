import React from "react";

const TemplateFeatures = ({ features, setFeatures }) => {
  const handleFeatureChange = (index, field, value) => {
    const updated = [...features];
    updated[index][field] = value;
    setFeatures(updated);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {features.map((feature, idx) => (
        <div key={idx} className="bg-white text-black rounded-lg p-5">
          <input
            className="font-bold text-xl mb-2 w-full border-b border-gray-300 focus:outline-none"
            value={feature.title}
            onChange={(e) => handleFeatureChange(idx, "title", e.target.value)}
          />
          <textarea
            className="w-full text-gray-700 focus:outline-none"
            value={feature.desc}
            onChange={(e) => handleFeatureChange(idx, "desc", e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default TemplateFeatures;