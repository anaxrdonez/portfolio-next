"use client";

import { FormEvent, useEffect, useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Your message is too short.").max(2000),
  company: z.string().optional(), // honeypot
});

type FormData = {
  name: string;
  email: string;
  message: string;
  company: string;
};

type FieldErrors = Partial<Record<keyof FormData, string>>;

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [startedAt, setStartedAt] = useState(0);

  useEffect(() => {
    setStartedAt(Date.now());
  }, []);

  function validateField(name: keyof FormData, value: string) {
    const nextData = { ...form, [name]: value };
    const result = contactSchema.safeParse(nextData);

    if (result.success) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    const fieldIssue = result.error.issues.find((issue) => issue.path[0] === name);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldIssue?.message ?? "",
    }));
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const key = name as keyof FormData;

    setForm((prev) => ({ ...prev, [key]: value }));
    validateField(key, value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setSubmitMessage("");

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormData;
        if (!nextErrors[field]) nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      setStatus("error");
      setSubmitMessage("Please review the form fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          startedAt,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus("success");
      setSubmitMessage("Message sent successfully.");
      setErrors({});
      setForm({
        name: "",
        email: "",
        message: "",
        company: "",
      });
      setStartedAt(Date.now());
    } catch (error) {
      setStatus("error");
      setSubmitMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  }

  return (
    <section
      id="contact"
      className="rounded-[2rem] border border-white/60 bg-white/65 p-8 shadow-sm backdrop-blur-xl md:p-12"
    >
      <div className="mb-8">
        <div className="mb-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
          Contact
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          Let’s work together
        </h2>

        <p className="mt-3 max-w-2xl text-neutral-600">
          If you’d like to collaborate, discuss a project, or just say hello,
          send me a message here.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4 text-neutral-700">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Email
            </p>
            <a
              href="mailto:anaordonez.prac@gmail.com"
              className="mt-1 inline-block text-lg font-medium transition hover:text-black"
            >
              anaordonez.prac@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              GitHub
            </p>
            <a
              href="https://github.com/anaxrdonez"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-lg font-medium transition hover:text-black"
            >
              github.com/anaxrdonez
            </a>
          </div>

          <p className="pt-4 text-sm leading-7 text-neutral-500">
            I’m interested in AI engineering, automation, intelligent systems,
            and interactive digital experiences.
          </p>
        </div>

        <div className="relative">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div
              className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden opacity-0"
              aria-hidden="true"
            >
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.company}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-neutral-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className={`w-full rounded-2xl border bg-white/80 px-4 py-3 text-neutral-900 outline-none transition ${
                  errors.name
                    ? "border-red-300 focus:border-red-400"
                    : "border-neutral-200 focus:border-violet-400"
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-neutral-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={`w-full rounded-2xl border bg-white/80 px-4 py-3 text-neutral-900 outline-none transition ${
                  errors.email
                    ? "border-red-300 focus:border-red-400"
                    : "border-neutral-200 focus:border-violet-400"
                }`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-neutral-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                className={`w-full rounded-2xl border bg-white/80 px-4 py-3 text-neutral-900 outline-none transition ${
                  errors.message
                    ? "border-red-300 focus:border-red-400"
                    : "border-neutral-200 focus:border-violet-400"
                }`}
                placeholder="Tell me about your project or idea..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex min-w-[150px] items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Sending..." : "Send message"}
              </button>

              <div className="min-h-[24px]">
                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 animate-[fadeInUp_0.45s_ease-out]">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">
                      ✓
                    </span>
                    <span>{submitMessage}</span>
                  </div>
                )}

                {status === "error" && submitMessage && (
                  <p className="text-sm font-medium text-red-600">{submitMessage}</p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}