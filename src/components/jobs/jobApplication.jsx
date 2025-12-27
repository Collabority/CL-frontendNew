import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useParams } from "react-router-dom"; // Import useParams
import instance from "../../lib/instance"; // Your axios instance

const jobApplicationSchema = z.object({
  name: z.string().min(1, "Full Name is required").trim(),
  email: z.string().email("Invalid email address").trim().toLowerCase(),
  experience: z.coerce.number().min(0, "Experience must be 0 or greater"),
  resume: z.string().url("Resume is required (Upload PDF)").min(1, "Resume is required"),
  coverLetter: z.string().optional(),
});

// ✅ Accept jobId as a prop, but also check useParams as fallback
const JobApplicationForm = ({ jobId: propJobId }) => {
  const { id: paramJobId } = useParams();
  
  // Logic: Use Prop if available, otherwise use URL param
  const jobId = propJobId || paramJobId;

  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState("idle"); 
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(jobApplicationSchema),
  });

  const handleResumeUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    setMessage("Uploading resume...");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await instance.post("/career/upload-resume", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        setValue("resume", res.data.data.url, { shouldValidate: true });
        setMessage("Resume uploaded successfully!");
      }
    } catch (error) {
      console.error("Upload failed", error);
      setMessage("Failed to upload resume. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data) => {
    if (!jobId) {
      setMessage("Error: Invalid Job ID.");
      return;
    }

    setStatus("loading");
    
    try {
      const payload = { ...data, jobId };
      const res = await instance.post("/career/apply", payload);

      if (res.data.success) {
        setStatus("success");
        setMessage("Application submitted successfully!");
        reset();
      }
    } catch (error) {
      console.error("Submission failed", error);
      setStatus("error");
      setMessage(error.response?.data?.message || "Failed to submit application.");
    }
  };

  return (
    <div className="bg-white shadow-lg p-6 sm:p-10 w-full rounded-2xl border border-[#e0d8c8]">
      
      {/* Debug Info (Optional - remove in production) */}
      {/* <p className="text-xs text-gray-400 mb-4">Applying for Job ID: {jobId}</p> */}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-base font-semibold text-[#002248] mb-1">Full Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full px-4 py-3 border border-[#e0d8c8] rounded-lg focus:border-[#008080] outline-none"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-base font-semibold text-[#002248] mb-1">Email Address</label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-3 border border-[#e0d8c8] rounded-lg focus:border-[#008080] outline-none"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* Experience */}
           <div>
            <label className="block text-base font-semibold text-[#002248] mb-1">Years of Experience</label>
            <input
              type="number"
              {...register("experience")}
              className="w-full px-4 py-3 border border-[#e0d8c8] rounded-lg focus:border-[#008080] outline-none"
              placeholder="e.g. 2"
            />
            {errors.experience && <p className="text-red-600 text-sm mt-1">{errors.experience.message}</p>}
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-base font-semibold text-[#002248] mb-1">Resume (PDF)</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => handleResumeUpload(e.target.files[0])}
              className="w-full border border-[#e0d8c8] p-2 rounded-lg bg-gray-50"
            />
            <input type="hidden" {...register("resume")} />
            
            {uploading && <p className="text-blue-600 text-sm mt-1">Uploading...</p>}
            {!uploading && !errors.resume && message === "Resume uploaded successfully!" && (
              <p className="text-green-600 text-sm mt-1">✓ Attached</p>
            )}
            {errors.resume && <p className="text-red-600 text-sm mt-1">{errors.resume.message}</p>}
          </div>
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block text-base font-semibold text-[#002248] mb-1">Cover Letter (Optional)</label>
          <textarea
            rows="4"
            {...register("coverLetter")}
            className="w-full px-4 py-3 border border-[#e0d8c8] rounded-lg focus:border-[#008080] outline-none resize-none"
            placeholder="Tell us why you are a good fit..."
          ></textarea>
        </div>

        {/* Status Message */}
        {message && (
          <div className={`w-full text-center font-medium p-2 rounded ${
            status === 'error' ? 'text-red-600 bg-red-50' : 
            status === 'success' ? 'text-green-600 bg-green-50' : 'text-blue-600'
          }`}>
            {message}
          </div>
        )}

        {/* Submit Button */}
        <div className="w-full flex justify-center mt-2">
          <button
            type="submit"
            disabled={isSubmitting || uploading}
            className="w-full md:w-auto px-12 py-4 bg-[#008080] rounded-xl text-white text-lg font-semibold hover:bg-[#006666] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;