import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import instance from "../../lib/instance";

const jobApplicationSchema = z.object({
  applicantName: z.string().min(1, "Applicant name is required.").trim(),
  applicantEmail: z
    .string()
    .min(1, "Email is required.")
    .email("Invalid email address.")
    .trim()
    .toLowerCase(),
  experience: z.coerce
    .number()
    .min(0, "Experience must be a non-negative number.")
    .transform((value) => Number(value)),
  resume: z
    .string()
    .url("Resume upload failed. Please upload a valid file.")
    .min(1, "Resume is required."),
  coverLetter: z.string().trim().optional(),
});

const JobApplicationForm = ({ jobId }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(jobApplicationSchema),
  });

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleResumeUpload = async (file) => {
    if (!file) return;

    setUploading(true);
    setMessage("Uploading resume...");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await instance.post("/career/upload-resume", formData);

      const data = await res.data.data;
      console.log(data.url);
      if (data.url) {
        setValue("resume", data.url);
        setMessage("Resume uploaded successfully.");
      } else {
        setMessage("Failed to upload resume. Try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Upload error. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (formData) => {
    setStatus("idle");
    setMessage("Submitting your application...");
    try {
      const res = await instance.post("/career/apply", { ...formData, jobId });
      const result = res.data;
      if (!result.success) throw new Error(result.message);
      setStatus("success");
      setMessage("Application submitted successfully!");
      console.log("Application submitted successfully!", result);
      reset();
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again.");
    }
  };

  const statusColors = {
    loading: "text-blue-500",
    success: "text-green-600",
    error: "text-red-600",
  };

  return (
    <div className=" bg-[#F8F6F3] flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="bg-white shadow-lg p-6 sm:p-10 w-full max-w-4xl rounded-2xl border border-[#e0d8c8]">
        <h1 className="text-4xl font-extrabold text-[#002248] mb-2 text-center">
          Job Application
        </h1>
        <p className="text-[#7b8ca0] mb-8 text-lg text-center">
          Please fill out the form below to apply for the position.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row sm:flex-wrap gap-6"
        >
          <div className="w-full sm:w-[calc(50%-12px)]">
            <label className="block text-base font-semibold text-[#002248] mb-1">
              Applicant Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("applicantName")}
              className="block w-full px-4 py-3 border border-[#e0d8c8] focus:border-[#008080] text-lg rounded-lg"
            />
            {errors.applicantName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.applicantName.message}
              </p>
            )}
          </div>

          <div className="w-full sm:w-[calc(50%-12px)]">
            <label className="block text-base font-semibold text-[#002248] mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("applicantEmail")}
              className="block w-full px-4 py-3 border border-[#e0d8c8] focus:border-[#008080] text-lg rounded-lg"
            />
            {errors.applicantEmail && (
              <p className="mt-1 text-sm text-red-600">
                {errors.applicantEmail.message}
              </p>
            )}
          </div>

          <div className="w-full sm:w-[calc(50%-12px)]">
            <label className="block text-base font-semibold text-[#002248] mb-1">
              Years of Experience
            </label>
            <input
              type="number"
              placeholder="0"
              {...register("experience", { valueAsNumber: true })}
              className="block w-full px-4 py-3 border border-[#e0d8c8] focus:border-[#008080] text-lg rounded-lg"
            />
            {errors.experience && (
              <p className="mt-1 text-sm text-red-600">
                {errors.experience.message}
              </p>
            )}
          </div>

          <div className="w-full sm:w-[calc(50%-12px)]">
            <label className="block text-base font-semibold text-[#002248] mb-1">
              Upload Resume (PDF only)
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => handleResumeUpload(e.target.files[0])}
              className="block w-full text-lg border border-[#e0d8c8] p-2 rounded-lg"
            />
            {uploading && (
              <p className="mt-1 text-sm text-blue-600">Uploading resume...</p>
            )}
            {errors.resume && (
              <p className="mt-1 text-sm text-red-600">
                {errors.resume.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <label className="block text-base font-semibold text-[#002248] mb-1">
              Cover Letter (Optional)
            </label>
            <textarea
              rows="4"
              placeholder="Tell us why you're a good fit..."
              {...register("coverLetter")}
              className="block w-full px-4 py-3 border border-[#e0d8c8] focus:border-[#008080] text-lg resize-none rounded-lg"
            />
          </div>

          {(status !== "idle" || isSubmitting) && (
            <div
              className={`w-full text-center py-2 ${
                statusColors[status] || "text-blue-500"
              }`}
            >
              <p className="font-medium">
                {isSubmitting ? "Submitting your application..." : message}
              </p>
            </div>
          )}

          <div className="w-full flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting || uploading}
              className="w-full sm:w-auto px-12 py-4 bg-[#008080] rounded-xl text-white text-lg font-semibold hover:bg-[#006666] transition-colors disabled:bg-[#7b8ca0] disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
