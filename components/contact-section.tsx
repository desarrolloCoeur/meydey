"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "./reveal";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <Reveal>
          <div className="mb-24">
            <div className="grid grid-cols-12 gap-4 items-end">
              <div className="col-span-12 lg:col-span-6">
                <h2 className="text-5xl lg:text-7xl font-light text-[#203c5c] tracking-tight leading-none">
                  Contact
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="h-px bg-[#1b96a2] mb-4"></div>
                <p className="text-sm font-light text-neutral-600 leading-relaxed">
                  Ready to secure your business? Contact us for personalized
                  security and technology solutions.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-7">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-light text-neutral-600 mb-2 uppercase tracking-wide">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className={`w-full px-0 py-3 bg-transparent border-0 border-b text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#1b96a2] transition-colors duration-200 ${
                          errors.name ? "border-red-500" : "border-neutral-300"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-light text-neutral-600 mb-2 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className={`w-full px-0 py-3 bg-transparent border-0 border-b text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#1b96a2] transition-colors duration-200 ${
                          errors.email ? "border-red-500" : "border-neutral-300"
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-light text-neutral-600 mb-2 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className={`w-full px-0 py-3 bg-transparent border-0 border-b text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#1b96a2] transition-colors duration-200 ${
                        errors.phone ? "border-red-500" : "border-neutral-300"
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-light text-neutral-600 mb-2 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell us about your security needs..."
                      rows={4}
                      className={`w-full px-0 py-3 bg-transparent border-0 border-b text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#1b96a2] transition-colors duration-200 resize-none ${
                        errors.message ? "border-red-500" : "border-neutral-300"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-6">
                    <motion.button
                      type="submit"
                      className="bg-[#203c5c] text-white px-8 py-3 text-sm font-light uppercase tracking-wide hover:bg-[#0067a2] transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </div>
                </form>
              ) : (
                <motion.div
                  className="py-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 border-2 border-[#1b96a2] rounded-full flex items-center justify-center mb-6">
                    <Check size={20} className="text-[#1b96a2]" />
                  </div>
                  <h3 className="text-2xl font-light text-neutral-900 mb-4">
                    Message Sent
                  </h3>
                  <p className="text-sm font-light text-neutral-600 leading-relaxed">
                    Thank you for contacting MEYDEY. We&apos;ll get back to you
                    within 24 hours to discuss your security needs.
                  </p>
                </motion.div>
              )}
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-xs font-light text-neutral-600 mb-4 uppercase tracking-wide">
                  Headquarters
                </h3>
                <p className="text-sm font-light text-neutral-900">
                  Colima, Colima, Mexico
                </p>
              </div>

              <div>
                <h3 className="text-xs font-light text-neutral-600 mb-4 uppercase tracking-wide">
                  Branch Office
                </h3>
                <p className="text-sm font-light text-neutral-900">
                  Bahía de Banderas, Nayarit, Mexico
                </p>
              </div>

              <div>
                <h3 className="text-xs font-light text-neutral-600 mb-4 uppercase tracking-wide">
                  Service Coverage
                </h3>
                <p className="text-sm font-light text-neutral-900">
                  Nationwide service across Mexico
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
