"use client";

import { useState } from "react";
import { Droplets, Shield, Clock, ChevronDown } from "lucide-react";
import {
  aftercareStandard,
  aftercareSaniderm,
  healingTimeline,
  aftercareFAQs,
} from "@/lib/data";
import { FadeIn } from "@/components/FadeIn";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[#F5F5F5] text-sm sm:text-base pr-4 group-hover:text-[#C41E3A] transition-colors">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#999999] shrink-0 transition-transform duration-300 ${
            open ? "rotate-180 text-[#C41E3A]" : ""
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "500px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p className="text-[#999999] text-sm leading-relaxed pb-5">{answer}</p>
      </div>
    </div>
  );
}

export default function AftercarePage() {
  const [activeTab, setActiveTab] = useState<"standard" | "saniderm">("standard");
  const steps = activeTab === "standard" ? aftercareStandard : aftercareSaniderm;

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="text-[#D4A574] text-sm uppercase tracking-[0.3em] font-medium mb-4">
              Healing Guide
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wider mb-6">
              AFTERCARE <span className="text-[#C41E3A]">GUIDE</span>
            </h1>
            <p className="text-[#999999] text-lg max-w-2xl mx-auto">
              Proper aftercare is crucial for your tattoo&apos;s longevity and vibrancy. Follow these instructions carefully.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="py-8 bg-[#0D0D0D] sticky top-16 sm:top-20 z-30 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex rounded-lg overflow-hidden border border-white/10">
            <button
              onClick={() => setActiveTab("standard")}
              className={`flex-1 py-4 text-sm font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeTab === "standard" ? "bg-[#C41E3A] text-white" : "bg-white/5 text-[#999999] hover:text-white"
              }`}
            >
              <Droplets size={16} />
              Standard Healing
            </button>
            <button
              onClick={() => setActiveTab("saniderm")}
              className={`flex-1 py-4 text-sm font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeTab === "saniderm" ? "bg-[#C41E3A] text-white" : "bg-white/5 text-[#999999] hover:text-white"
              }`}
            >
              <Shield size={16} />
              Saniderm / Second Skin
            </button>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding relative">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-heading text-3xl tracking-wider mb-8">
              STEP-BY-STEP <span className="text-[#D4A574]">INSTRUCTIONS</span>
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.05}>
                <div className="glass-card p-6 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C41E3A]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#C41E3A] font-heading text-lg">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-[#F5F5F5] font-semibold">{step.title}</h3>
                      <span className="text-[#D4A574] text-xs uppercase tracking-wider">{step.time}</span>
                    </div>
                    <p className="text-[#999999] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Healing Timeline */}
      <section className="section-padding bg-[#0D0D0D] relative">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#C41E3A] text-sm uppercase tracking-[0.3em] font-medium mb-4">What to Expect</p>
              <h2 className="font-heading text-3xl sm:text-4xl tracking-wider">
                HEALING <span className="text-[#D4A574]">TIMELINE</span>
              </h2>
            </div>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#C41E3A] via-[#D4A574] to-[#C41E3A]/20 hidden sm:block" />
            <div className="space-y-6">
              {healingTimeline.map((step, i) => (
                <FadeIn key={step.day} delay={i * 0.08}>
                  <div className="flex gap-6 items-start">
                    <div className="hidden sm:flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#0A0A0A] border-2 border-[#C41E3A] flex items-center justify-center relative z-10">
                        <Clock size={16} className="text-[#C41E3A]" />
                      </div>
                    </div>
                    <div className="glass-card p-6 flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-heading text-xl tracking-wider text-[#F5F5F5]">{step.day}</h3>
                        <span className="text-[10px] uppercase tracking-wider bg-[#D4A574]/20 text-[#D4A574] px-2 py-0.5 rounded">
                          {step.phase}
                        </span>
                      </div>
                      <p className="text-[#999999] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding relative">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#C41E3A] text-sm uppercase tracking-[0.3em] font-medium mb-4">Common Questions</p>
              <h2 className="font-heading text-3xl sm:text-4xl tracking-wider">
                AFTERCARE <span className="text-[#C41E3A]">FAQ</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="glass-card p-6 sm:p-8">
              {aftercareFAQs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FadeIn>
              <div className="glass-card p-6 sm:p-8">
                <h3 className="font-heading text-2xl tracking-wider text-[#D4A574] mb-6">✓ DO</h3>
                <ul className="space-y-3">
                  {[
                    "Wash your tattoo 2-3 times daily",
                    "Apply thin layers of recommended ointment/lotion",
                    "Wear loose, breathable clothing",
                    "Keep the tattoo clean and dry",
                    "Stay hydrated and eat well",
                    "Follow your artist's specific instructions",
                    "Contact the studio if you notice signs of infection",
                  ].map((item) => (
                    <li key={item} className="text-[#999999] text-sm flex items-start gap-2">
                      <span className="text-[#D4A574] mt-1">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="glass-card p-6 sm:p-8">
                <h3 className="font-heading text-2xl tracking-wider text-red-400 mb-6">✗ DON&apos;T</h3>
                <ul className="space-y-3">
                  {[
                    "Pick, scratch, or peel your tattoo",
                    "Submerge in water (pools, oceans, baths)",
                    "Expose to direct sunlight",
                    "Wear tight or abrasive clothing",
                    "Over-apply ointment (less is more)",
                    "Ignore signs of infection",
                    "Use scented soaps or lotions",
                    "Go to the gym for 3-5 days minimum",
                  ].map((item) => (
                    <li key={item} className="text-[#999999] text-sm flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
