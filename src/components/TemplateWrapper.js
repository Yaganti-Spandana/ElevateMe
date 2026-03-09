import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const TemplateWrapper = ({ children }) => {
  const templateRef = useRef(null);

  const handleDownload = () => {
    if (templateRef.current) {
      html2canvas(templateRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("Template.pdf");
      });
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <div ref={templateRef} className="w-full max-w-5xl rounded-xl">
        {children}
      </div>
      <button
        onClick={handleDownload}
        className="mt-8 bg-blue-600 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Download Template as PDF
      </button>
    </div>
  );
};

export default TemplateWrapper;