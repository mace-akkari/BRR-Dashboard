"use client";

import { useRef, useState } from "react";

export default function ITRequestPage() {
  const issueTypeRef = useRef<HTMLSelectElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const [submitting, setSubmitting] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      console.log({
        issueType: issueTypeRef.current?.value,
        description: descriptionRef.current?.value,
        file: fileRef.current?.files?.[0] || null,
      });

      if (issueTypeRef.current) issueTypeRef.current.value = "";
      if (descriptionRef.current) descriptionRef.current.value = "";
      if (fileRef.current) fileRef.current.value = "";

      setSubmitting(false);
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 4000);
    }, 1500);
  };

  return (
    <main className="mx-auto max-w-xl space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Submit IT Request</h1>
        <p className="mt-1 text-sm text-gray-400">
          Fill out the form below to submit a new IT support request.
        </p>
      </header>

      {alertVisible && (
        <div
          role="alert"
          className="rounded-md bg-green-600 px-4 py-2 text-white text-sm shadow transition-opacity"
        >
          IT Request submitted successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-[#2a3042] p-6 rounded-lg border border-gray-700"
      >
        <div>
          <label
            htmlFor="issueType"
            className="block text-sm font-medium text-white mb-1"
          >
            Issue Type
          </label>
          <select
            id="issueType"
            name="issueType"
            ref={issueTypeRef}
            required
            className="w-full rounded-md border border-gray-600 bg-[#1e2235] text-white p-2"
          >
            <option value="">Select an issue</option>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
            <option value="Network">Network</option>
            <option value="Account">Account</option>
            <option value="Other">Other</option>
          </select>
          <p className="mt-1 text-sm text-gray-400">
            Select the category that best describes your issue
          </p>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-white mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            ref={descriptionRef}
            required
            className="w-full rounded-md border border-gray-600 bg-[#1e2235] text-white p-2"
          />
          <p className="mt-1 text-sm text-gray-400">
            Provide as much detail as possible to help us resolve your issue
            quickly
          </p>
        </div>

        <div>
          <label
            htmlFor="file"
            className="block text-sm font-medium text-white mb-1"
          >
            Attachment (optional)
          </label>
          <input
            type="file"
            id="file"
            ref={fileRef}
            className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4
                       file:rounded-md file:border-0 file:bg-blue-900 file:text-white
                       hover:file:bg-blue-700"
          />
          <p className="mt-1 text-sm text-gray-400">
            Upload screenshots or relevant files (max 10MB)
          </p>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-blue-900 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
        >
          {submitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </main>
  );
}
