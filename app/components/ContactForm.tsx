"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { profile } from "@/app/data/profile";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type Status = "idle" | "success" | "error";

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    /**
     * ──────────────────────────────────────────────────────────
     * CONTACT FORM INTEGRATION POINT
     * ──────────────────────────────────────────────────────────
     * Currently uses mailto: as a fallback.
     * To integrate with EmailJS, Resend, or an API route:
     *
     * 1. EmailJS:
     *    import emailjs from '@emailjs/browser';
     *    await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
     *
     * 2. API Route (Next.js):
     *    const res = await fetch('/api/contact', {
     *      method: 'POST',
     *      body: JSON.stringify(formData),
     *    });
     *
     * 3. Resend:
     *    const res = await fetch('/api/contact', { ... });
     * ──────────────────────────────────────────────────────────
     */

    // Fallback: open mailto
    try {
      const subject = encodeURIComponent(
        `Portfolio Contact from ${formData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(
        `mailto:${profile.email}?subject=${subject}&body=${body}`,
        "_blank"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 5s
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl text-sm text-[#e2eaf4] placeholder-[#4a5c74] outline-none transition-all duration-200";
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name */}
      <div>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className={`${inputBase} ${
            errors.name ? "border-red-500/50" : ""
          }`}
          style={{
            ...inputStyle,
            borderColor: errors.name
              ? "rgba(239,68,68,0.5)"
              : inputStyle.border.replace("1px solid ", ""),
          }}
          onFocus={(e) => {
            if (!errors.name)
              (e.target as HTMLInputElement).style.borderColor =
                "rgba(34,211,238,0.4)";
            (e.target as HTMLInputElement).style.boxShadow =
              "0 0 0 3px rgba(34,211,238,0.05)";
          }}
          onBlur={(e) => {
            if (!errors.name)
              (e.target as HTMLInputElement).style.borderColor =
                "rgba(255,255,255,0.08)";
            (e.target as HTMLInputElement).style.boxShadow = "none";
          }}
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={11} />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className={inputBase}
          style={{
            ...inputStyle,
            borderColor: errors.email
              ? "rgba(239,68,68,0.5)"
              : "rgba(255,255,255,0.08)",
          }}
          onFocus={(e) => {
            if (!errors.email)
              (e.target as HTMLInputElement).style.borderColor =
                "rgba(34,211,238,0.4)";
            (e.target as HTMLInputElement).style.boxShadow =
              "0 0 0 3px rgba(34,211,238,0.05)";
          }}
          onBlur={(e) => {
            if (!errors.email)
              (e.target as HTMLInputElement).style.borderColor =
                "rgba(255,255,255,0.08)";
            (e.target as HTMLInputElement).style.boxShadow = "none";
          }}
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={11} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          className={`${inputBase} resize-none`}
          style={{
            ...inputStyle,
            borderColor: errors.message
              ? "rgba(239,68,68,0.5)"
              : "rgba(255,255,255,0.08)",
          }}
          onFocus={(e) => {
            if (!errors.message)
              (e.target as HTMLTextAreaElement).style.borderColor =
                "rgba(34,211,238,0.4)";
            (e.target as HTMLTextAreaElement).style.boxShadow =
              "0 0 0 3px rgba(34,211,238,0.05)";
          }}
          onBlur={(e) => {
            if (!errors.message)
              (e.target as HTMLTextAreaElement).style.borderColor =
                "rgba(255,255,255,0.08)";
            (e.target as HTMLTextAreaElement).style.boxShadow = "none";
          }}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={11} />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{
          background:
            status === "success"
              ? "linear-gradient(135deg, #059669, #10b981)"
              : "linear-gradient(135deg, #0891b2, #a855f7)",
          boxShadow:
            status === "success"
              ? "0 0 20px rgba(16,185,129,0.2)"
              : "0 0 20px rgba(34,211,238,0.15)",
        }}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </span>
        ) : status === "success" ? (
          <span className="flex items-center gap-2">
            <CheckCircle size={16} />
            Sent! Check your email client
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send size={15} />
            Send Message
          </span>
        )}
      </motion.button>

      {status === "error" && (
        <p className="text-red-400 text-xs text-center flex items-center justify-center gap-1">
          <AlertCircle size={12} />
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
