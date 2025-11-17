"use client";

import { Button } from "@radix-ui/themes";
import GridBackground from "../components/GridBackground";
import Header from "../components/header";
import { useState, useCallback, useEffect } from "react";
import * as Form from "@radix-ui/react-form";

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

interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [characterCounts, setCharacterCounts] = useState({
    name: 0,
    message: 0
  });

  // Debounced input handler hrrrdrrrr
  const debouncedSetFormData = useCallback(
    (updates: Partial<FormData>) => {
      setFormData(prev => ({ ...prev, ...updates }));
    },
    []
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Update character counts
    if (name === 'name' || name === 'message') {
      setCharacterCounts(prev => ({ ...prev, [name]: value.length }));
    }

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }

    debouncedSetFormData({ [name]: value });
  }, [debouncedSetFormData, errors]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};


    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }


    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }


    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 5000) {
      newErrors.message = "Message must be less than 5000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("error");
      setStatusMessage("Please fix the errors above and try again.");
      return;
    }

    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch("/api/emailsend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      const result: ApiResponse = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setStatusMessage("Thanks for reaching out! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setCharacterCounts({ name: 0, message: 0 });
        setErrors({});
        
        // Auto-dismiss success message after 8 seconds
        setTimeout(() => setSubmitStatus("idle"), 8000);
      } else {
        setSubmitStatus("error");
        setStatusMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error && error.name === 'AbortError'
          ? "Request timed out. Please check your connection and try again."
          : "An error occurred. Please try again later."
      );
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

 
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && submitStatus !== 'idle') {
        setSubmitStatus("idle");
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [submitStatus]);

  return (
    <main>
      <Header />
      <GridBackground />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-20">
        <div className="flex flex-col gap-[32px] row-start-2 w-full max-w-2xl bg-white/30 px-8 py-8 shadow-2xl backdrop-blur-2xl rounded-xl border border-white/20">
          
       
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Get in Touch</h1>
            <p className="text-black text-lg leading-relaxed">
              I'm looking forward to hearing from you! If you prefer not to fill out forms, feel free to email me directly.
            </p>
            <a 
              href="mailto:martin@futurity.work" 
              className="inline-flex items-center gap-2 text-gray-700 hover:text-purple-700 transition-colors w-fit group"
              aria-label="Send email to martin@futurity.work"
            >
              <span className="underline decoration-purple-600 group-hover:decoration-purple-800">martin@futurity.work</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="h-px w-full bg-black/30 mx-2" />

          {/* Contact Form */}
          <Form.Root onSubmit={handleSubmit} className="w-full flex flex-col gap-6" noValidate>
            {/* Name Field */}
            <Form.Field name="name" className="w-full" aria-invalid={!!errors.name}>
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-sm font-semibold text-gray-900 leading-none pb-3">
                  Name *
                </Form.Label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">
                    {characterCounts.name}/100
                  </span>
                  {errors.name && (
                    <Form.Message className="text-xs font-medium text-red-600">
                      {errors.name}
                    </Form.Message>
                  )}
                </div>
              </div>
              <Form.Control asChild>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="ex. Toby Fox"
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg bg-white/60 border border-black/30 hover:border-purple-300 focus:border-purple-600 focus:outline-none backdrop-blur transition-all text-gray-900 placeholder-gray-500 focus:bg-white/80 data-[invalid]:border-red-600"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
              </Form.Control>
              {errors.name && (
                <div id="name-error" className="text-xs font-medium text-red-600 mt-1">
                  {errors.name}
                </div>
              )}
            </Form.Field>

    
            <Form.Field name="email" className="w-full" aria-invalid={!!errors.email}>
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-sm font-semibold text-gray-900 leading-none pb-3">
                  Email *
                </Form.Label>
                {errors.email && (
                  <Form.Message className="text-xs font-medium text-red-600">
                    {errors.email}
                  </Form.Message>
                )}
              </div>
              <Form.Control asChild>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="waddle-doo@website.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/60 border border-black/30 hover:border-purple-300 focus:border-purple-600 focus:outline-none backdrop-blur transition-all text-gray-900 placeholder-gray-500 focus:bg-white/80 data-[invalid]:border-red-600"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </Form.Control>
              {errors.email && (
                <div id="email-error" className="text-xs font-medium text-red-600 mt-1">
                  {errors.email}
                </div>
              )}
            </Form.Field>

          
            <Form.Field name="message" className="w-full" aria-invalid={!!errors.message}>
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-sm font-semibold text-gray-900 leading-none pb-3">
                  Share More Details *
                </Form.Label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">
                    {characterCounts.message}/5000
                  </span>
                  {errors.message && (
                    <Form.Message className="text-xs font-medium text-red-600">
                      {errors.message}
                    </Form.Message>
                  )}
                </div>
              </div>
              <Form.Control asChild>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe what you need..."
                  rows={6}
                  maxLength={5000}
                  className="w-full px-4 py-3 rounded-lg bg-white/60 border border-black/30 hover:border-purple-300 focus:border-purple-600 focus:outline-none backdrop-blur transition-all text-gray-900 placeholder-gray-500 focus:bg-white/80 resize-none data-[invalid]:border-red-600"
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
              </Form.Control>
              {errors.message && (
                <div id="message-error" className="text-xs font-medium text-red-600 mt-1">
                  {errors.message}
                </div>
              )}
            </Form.Field>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div 
                className="px-4 py-3 rounded-lg bg-green-50 border-2 border-green-300 text-green-800 text-sm font-medium flex items-center gap-2"
                role="alert"
                aria-live="polite"
              >
                <span className="text-green-600">✓</span>
                <span>{statusMessage}</span>
                <button 
                  onClick={() => setSubmitStatus("idle")}
                  className="ml-auto text-green-600 hover:text-green-800"
                  aria-label="Dismiss message"
                >
                  ×
                </button>
              </div>
            )}
            
            {submitStatus === "error" && (
              <div 
                className="px-4 py-3 rounded-lg bg-red-50 border-2 border-red-300 text-red-800 text-sm font-medium flex items-center gap-2"
                role="alert"
                aria-live="polite"
              >
                <span className="text-red-600">✕</span>
                <span>{statusMessage}</span>
                <button 
                  onClick={() => setSubmitStatus("idle")}
                  className="ml-auto text-red-600 hover:text-red-800"
                  aria-label="Dismiss message"
                >
                  ×
                </button>
              </div>
            )}

            
            <Form.Submit asChild>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-2"
                aria-busy={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </span>
                ) : (
                  "Submit"
                )}
              </Button>
            </Form.Submit>
          </Form.Root>
        </div>
      </div>
    </main>
  );
}
