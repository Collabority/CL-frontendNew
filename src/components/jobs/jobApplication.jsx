import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: 0,
    resume: "",
    coverLetter: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.experience < 0) {
      newErrors.experience = "Experience must be 0 or greater";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleResumeUpload = async (file) => {
    if (!file) return;

    setUploading(true);
    setMessage("Uploading resume...");
    setSelectedFileName(file.name);

    try {
      // Replace this with your actual API call
      const formDataUpload = new FormData();
      formDataUpload.append("resume", file);

      // Mock API call - replace with your actual endpoint
      // const res = await fetch("/api/career/upload-resume", {
      //   method: "POST",
      //   body: formDataUpload,
      // });
      // const data = await res.json();
      
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful upload with a file URL
      const mockFileUrl = `https://example.com/resumes/${file.name}`;
      
      // CRITICAL: Update the resume field in formData
      setFormData(prev => ({
        ...prev,
        resume: mockFileUrl
      }));

      // Clear resume error if it exists
      if (errors.resume) {
        setErrors(prev => ({
          ...prev,
          resume: undefined
        }));
      }

      setMessage("Resume uploaded successfully!");
      setStatus("success");
    } catch (error) {
      console.error(error);
      setMessage("Upload error. Please try again.");
      setStatus("error");
      setSelectedFileName("");
      setFormData(prev => ({
        ...prev,
        resume: ""
      }));
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check if it's a PDF
      if (file.type !== 'application/pdf') {
        setMessage("Please upload a PDF file only.");
        setStatus("error");
        e.target.value = "";
        return;
      }
      // Call upload function
      handleResumeUpload(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setMessage("Please fix the errors before submitting.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    console.log("Form Data:", formData);
    
    try {
      // Replace with your actual API call
      // const response = await fetch("/api/submit-application", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus("success");
      setMessage("Application submitted successfully!");
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          experience: 0,
          resume: "",
          coverLetter: "",
        });
        setErrors({});
        setSelectedFileName("");
        setStatus("idle");
        setMessage("");
      }, 3000);
    } catch (error) {
      setStatus("error");
      setMessage("Submission failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Job Application
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Please fill out the form below to apply for the position.
        </p>

        <div className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Applicant Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Applicant Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="JohnDoe@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Experience and Resume Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Years of Experience */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Years of Experience
              </label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="2"
                min="0"
              />
              {errors.experience && (
                <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
              )}
            </div>

            {/* Upload Resume */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Resume (PDF only)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                  disabled={uploading}
                />
              </div>
              
              {selectedFileName && (
                <p className="text-sm text-gray-600 mt-1">
                  Selected: {selectedFileName}
                </p>
              )}
              
              {uploading && (
                <p className="text-sm text-blue-600 mt-1">Uploading...</p>
              )}
              
              {errors.resume && (
                <p className="text-red-500 text-sm mt-1 font-semibold">
                  {errors.resume}
                </p>
              )}
              
              {message && !errors.resume && status !== 'submitting' && (
                <p className={`text-sm mt-1 ${status === 'error' ? 'text-red-500' : 'text-green-600'}`}>
                  {message}
                </p>
              )}
            </div>
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Cover Letter (Optional)
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
              placeholder="Tell us why you're a good fit..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === 'submitting' || uploading || !formData.resume}
              className="px-12 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {status === 'submitting' ? "Submitting..." : "Submit Application"}
            </button>
          </div>

          {/* Global Status Message */}
          {status === "success" && message.includes("submitted") && (
            <div className="text-center text-green-600 font-semibold">
              {message}
            </div>
          )}
          {status === "error" && !uploading && message.includes("fix") && (
            <div className="text-center text-red-500 font-semibold">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;