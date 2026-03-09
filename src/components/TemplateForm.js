import React, { useState } from "react";

const TemplateForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead captured:", email);
    setSubmitted(true);
    setEmail("");
  };

  return !submitted ? (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-3 rounded-md text-black w-full md:w-80 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-white text-blue-600 font-bold px-6 py-3 rounded-md hover:bg-gray-200 transition"
      >
        Get Started
      </button>
    </form>
  ) : (
    <p className="text-lg font-semibold text-center mb-12">
      Thanks! We'll be in touch soon.
    </p>
  );
};

export default TemplateForm;