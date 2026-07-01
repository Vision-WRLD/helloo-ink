"use client";

import { useState } from "react";
import {
  User,
  Palette,
  Calendar,
  Upload,
  ChevronRight,
  ChevronLeft,
  Check,
  AlertCircle,
  ImagePlus,
  X,
} from "lucide-react";
import {
  artists,
  placementOptions,
  sizeOptions,
  budgetOptions,
  allStyles,
} from "@/lib/data";
import { FadeIn } from "@/components/FadeIn";

const steps = [
  { id: 1, label: "Contact Info", icon: User },
  { id: 2, label: "Tattoo Details", icon: Palette },
  { id: 3, label: "References", icon: Upload },
  { id: 4, label: "Review & Submit", icon: Calendar },
];

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredArtist: "",
    placement: "",
    size: "",
    style: "",
    budget: "",
    description: "",
    referenceFileNames: [] as string[],
  });

  const updateForm = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const addReference = () => {
    if (form.referenceFileNames.length < 5) {
      setForm((prev) => ({
        ...prev,
        referenceFileNames: [
          ...prev.referenceFileNames,
          `reference-${prev.referenceFileNames.length + 1}.jpg`,
        ],
      }));
    }
  };

  const removeReference = (index: number) => {
    setForm((prev) => ({
      ...prev,
      referenceFileNames: prev.referenceFileNames.filter((_, i) => i !== index),
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return (
          form.firstName.trim() !== "" &&
          form.lastName.trim() !== "" &&
          form.email.trim() !== "" &&
          form.phone.trim() !== ""
        );
      case 2:
        return (
          form.placement !== "" && form.size !== "" && form.style !== ""
        );
      case 3:
        return true;
      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="text-[#C41E3A] text-sm uppercase tracking-[0.3em] font-medium mb-4">
              Start Your Journey
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wider mb-6">
              BOOK A <span className="text-[#D4A574]">CONSULTATION</span>
            </h1>
            <p className="text-[#999999] text-lg max-w-2xl mx-auto">
              Ready to bring your vision to life? Fill out the form below and
              we&apos;ll match you with the perfect artist for your piece.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-12 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Submit Your Vision",
                desc: "Tell us about your idea, style, and placement preferences.",
              },
              {
                step: "02",
                title: "Consultation & Design",
                desc: "Meet your artist, refine the concept, and approve the design.",
              },
              {
                step: "03",
                title: "The Session",
                desc: "Sit back, relax, and let us create something amazing on your skin.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.15}>
                <div className="text-center relative">
                  {i < 2 && (
                    <div className="hidden sm:block absolute top-6 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#C41E3A]/50 to-transparent" />
                  )}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#C41E3A] text-[#C41E3A] font-heading text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-xl tracking-wider mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#999999] text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Step Form */}
      <section className="section-padding relative">
        <div className="max-w-3xl mx-auto px-4">
          {!submitted ? (
            <>
              {/* Step Indicators */}
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.id;
                  const isComplete = currentStep > step.id;
                  return (
                    <div key={step.id} className="flex items-center gap-2 sm:gap-4">
                      {i > 0 && (
                        <div
                          className={`hidden sm:block w-8 lg:w-16 h-px ${
                            isComplete ? "bg-[#C41E3A]" : "bg-white/10"
                          }`}
                        />
                      )}
                      <button
                        onClick={() => {
                          if (isComplete) setCurrentStep(step.id);
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-xs sm:text-sm ${
                          isActive
                            ? "bg-[#C41E3A]/20 text-[#C41E3A]"
                            : isComplete
                            ? "text-[#D4A574] cursor-pointer"
                            : "text-[#999999]"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                            isActive
                              ? "bg-[#C41E3A] text-white"
                              : isComplete
                              ? "bg-[#D4A574]/20 text-[#D4A574]"
                              : "bg-white/5 text-[#999999]"
                          }`}
                        >
                          {isComplete ? <Check size={14} /> : <Icon size={14} />}
                        </div>
                        <span className="hidden sm:inline">{step.label}</span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Form Content */}
              <div className="glass-card p-6 sm:p-10">
                {/* Step 1: Contact Info */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="font-heading text-2xl tracking-wider mb-6">
                      CONTACT INFORMATION
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-[#999999] mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={form.firstName}
                          onChange={(e) => updateForm("firstName", e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F5F5F5] placeholder:text-[#333333] focus:border-[#C41E3A] focus:outline-none transition-colors"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#999999] mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={form.lastName}
                          onChange={(e) => updateForm("lastName", e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F5F5F5] placeholder:text-[#333333] focus:border-[#C41E3A] focus:outline-none transition-colors"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-[#999999] mb-2">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateForm("email", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F5F5F5] placeholder:text-[#333333] focus:border-[#C41E3A] focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#999999] mb-2">Phone *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F5F5F5] placeholder:text-[#333333] focus:border-[#C41E3A] focus:outline-none transition-colors"
                        placeholder="(905) 555-1234"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Tattoo Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="font-heading text-2xl tracking-wider mb-6">
                      TATTOO DETAILS
                    </h2>
                    <div>
                      <label className="block text-sm text-[#999999] mb-2">
                        Preferred Artist
                      </label>
                      <select
                        value={form.preferredArtist}
                        onChange={(e) => updateForm("preferredArtist", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F5F5F5] focus:border-[#C41E3A] focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">No preference</option>
                        {artists.map((a) => (
                          <option key={a.slug} value={a.slug}>
                            {a.name} — {a.specialty}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-[#999999] mb-2">
                        Placement on Body *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-2">
                        {placementOptions.map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => updateForm("placement", p)}
                            className={`text-left px-3 py-2 rounded text-sm transition-all ${
                              form.placement === p
                                ? "bg-[#C41E3A] text-white"
                                : "bg-white/5 text-[#999999] hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-[#999999] mb-2">
                        Approximate Size *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {sizeOptions.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => updateForm("size", s)}
                            className={`px-3 py-3 rounded text-sm transition-all text-center ${
                              form.size === s
                                ? "bg-[#C41E3A] text-white"
                                : "bg-white/5 text-[#999999] hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-[#999999] mb-2">Style *</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {allStyles.slice(0, 12).map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => updateForm("style", s)}
                            className={`px-3 py-2 rounded text-sm transition-all text-center ${
                              form.style === s
                                ? "bg-[#D4A574] text-[#0A0A0A] font-semibold"
                                : "bg-white/5 text-[#999999] hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-[#999999] mb-2">
                        Budget Range
                      </label>
                      <select
                        value={form.budget}
                        onChange={(e) => updateForm("budget", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F5F5F5] focus:border-[#C41E3A] focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select budget range</option>
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-[#999999] mb-2">
                        Describe Your Vision
                      </label>
                      <textarea
                        value={form.description}
                        onChange={(e) => updateForm("description", e.target.value)}
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F5F5F5] placeholder:text-[#333333] focus:border-[#C41E3A] focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your tattoo idea... The more detail, the better!"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: References */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="font-heading text-2xl tracking-wider mb-2">
                      REFERENCE IMAGES
                    </h2>
                    <p className="text-[#999999] text-sm mb-6">
                      Upload up to 5 reference images to help your artist
                      understand your vision.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {form.referenceFileNames.map((name, i) => (
                        <div
                          key={i}
                          className="relative aspect-square rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group"
                        >
                          <div className="text-center">
                            <ImagePlus size={24} className="mx-auto text-[#999999] mb-2" />
                            <p className="text-[#999999] text-xs truncate px-2">{name}</p>
                          </div>
                          <button
                            onClick={() => removeReference(i)}
                            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Remove reference"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                      {form.referenceFileNames.length < 5 && (
                        <button
                          onClick={addReference}
                          className="aspect-square rounded-lg border-2 border-dashed border-white/10 flex items-center justify-center hover:border-[#C41E3A]/50 transition-colors group"
                        >
                          <div className="text-center">
                            <ImagePlus size={24} className="mx-auto text-[#333333] group-hover:text-[#C41E3A] transition-colors mb-2" />
                            <p className="text-[#333333] text-xs group-hover:text-[#999999] transition-colors">
                              Add Image
                            </p>
                          </div>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="font-heading text-2xl tracking-wider mb-6">
                      REVIEW & SUBMIT
                    </h2>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-4">
                        <h3 className="text-[#C41E3A] text-xs uppercase tracking-wider mb-3">
                          Contact Info
                        </h3>
                        <p className="text-[#F5F5F5] text-sm">{form.firstName} {form.lastName}</p>
                        <p className="text-[#999999] text-sm">{form.email}</p>
                        <p className="text-[#999999] text-sm">{form.phone}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <h3 className="text-[#C41E3A] text-xs uppercase tracking-wider mb-3">
                          Tattoo Details
                        </h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-[#999999]">Artist:</span>
                          <span className="text-[#F5F5F5]">
                            {form.preferredArtist
                              ? artists.find((a) => a.slug === form.preferredArtist)?.name || "No preference"
                              : "No preference"}
                          </span>
                          <span className="text-[#999999]">Placement:</span>
                          <span className="text-[#F5F5F5]">{form.placement}</span>
                          <span className="text-[#999999]">Size:</span>
                          <span className="text-[#F5F5F5]">{form.size}</span>
                          <span className="text-[#999999]">Style:</span>
                          <span className="text-[#F5F5F5]">{form.style}</span>
                          <span className="text-[#999999]">Budget:</span>
                          <span className="text-[#F5F5F5]">{form.budget || "Not specified"}</span>
                        </div>
                      </div>
                      {form.description && (
                        <div className="bg-white/5 rounded-lg p-4">
                          <h3 className="text-[#C41E3A] text-xs uppercase tracking-wider mb-3">Description</h3>
                          <p className="text-[#F5F5F5] text-sm">{form.description}</p>
                        </div>
                      )}
                      {form.referenceFileNames.length > 0 && (
                        <div className="bg-white/5 rounded-lg p-4">
                          <h3 className="text-[#C41E3A] text-xs uppercase tracking-wider mb-3">References</h3>
                          <p className="text-[#F5F5F5] text-sm">
                            {form.referenceFileNames.length} file(s) attached
                          </p>
                        </div>
                      )}
                    </div>
                    {submitError && (
                      <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-4 rounded-lg">
                        <AlertCircle size={16} />
                        {submitError}
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-white/5">
                  {currentStep > 1 ? (
                    <button
                      onClick={() => setCurrentStep((s) => s - 1)}
                      className="flex items-center gap-2 text-[#999999] hover:text-[#F5F5F5] transition-colors text-sm"
                    >
                      <ChevronLeft size={16} />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  {currentStep < 4 ? (
                    <button
                      onClick={() => canProceed() && setCurrentStep((s) => s + 1)}
                      disabled={!canProceed()}
                      className={`flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-lg transition-all ${
                        canProceed() ? "btn-primary" : "bg-white/5 text-[#333333] cursor-not-allowed"
                      }`}
                    >
                      Next
                      <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="btn-primary glow-accent"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="glass-card p-10 text-center">
              <div className="w-20 h-20 rounded-full bg-[#D4A574]/20 flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-[#D4A574]" />
              </div>
              <h2 className="font-heading text-3xl tracking-wider mb-4">
                REQUEST SUBMITTED
              </h2>
              <p className="text-[#999999] text-lg max-w-md mx-auto mb-8">
                Thank you, {form.firstName}! We&apos;ve received your consultation
                request. Our team will review your submission and get back to you
                within 24-48 hours.
              </p>
              <p className="text-[#999999] text-sm mb-6">
                In the meantime, check out our{" "}
                <a href="/aftercare" className="text-[#C41E3A] hover:underline">aftercare guide</a>
                {" "}or{" "}
                <a href="/faq" className="text-[#C41E3A] hover:underline">FAQ page</a>.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wider mb-8 text-center">
            IMPORTANT <span className="text-[#C41E3A]">POLICIES</span>
          </h2>
          <div className="glass-card p-6 sm:p-8 space-y-4">
            {[
              { label: "Deposit", text: "$50 non-refundable deposit required to book. Applied to the cost of your final session." },
              { label: "Cancellation", text: "48 hours notice required for reschedules. Late cancellations and no-shows forfeit their deposit." },
              { label: "Age Requirement", text: "Must be 18+ with valid government-issued photo ID. No exceptions." },
              { label: "Health & Safety", text: "All equipment is single-use and sterilized. Our studio exceeds Ontario health board standards." },
              { label: "Touch-Ups", text: "One free touch-up within 6 months of your session, subject to artist availability and aftercare compliance." },
            ].map((policy) => (
              <div key={policy.label} className="flex gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                <div className="w-2 h-2 rounded-full bg-[#C41E3A] mt-2 shrink-0" />
                <div>
                  <h4 className="text-[#F5F5F5] text-sm font-semibold mb-1">{policy.label}</h4>
                  <p className="text-[#999999] text-sm">{policy.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
