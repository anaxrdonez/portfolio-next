"use client";

import { useState } from "react";

export default function DownloadRequestForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    startedAt: Date.now(),
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/request-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send request.");
      }

      setStatus("success");
      setFeedback("Your request has been sent successfully.");
      setForm({
        name: "",
        email: "",
        message: "",
        company: "",
        startedAt: Date.now(),
      });
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="download-name"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Name
          </label>
          <input
            id="download-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-500"
          />
        </div>

        <div>
          <label
            htmlFor="download-email"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Email
          </label>
          <input
            id="download-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-500"
          />
        </div>

        <div>
          <label
            htmlFor="download-message"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Message
          </label>
          <textarea
            id="download-message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me a bit about your interest in the project..."
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-500"
          />
        </div>

        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Request Download"}
        </button>

        {feedback ? (
          <p
            className={`text-sm ${
              status === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}