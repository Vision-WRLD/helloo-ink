"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Send,
  Check,
  AlertCircle,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

function InstagramIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
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
            <p className="text-[#C41E3A] text-sm uppercase tracking-[0.3em] font-medium mb-4">Find Us</p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wider mb-6">
              CONTACT & <span className="text-[#D4A574]">LOCATION</span>
            </h1>
            <p className="text-[#999999] text-lg max-w-2xl mx-auto">
              Come visit us in the heart of Newmarket. We&apos;re always happy to chat about your next piece.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Map + Info Grid */}
      <section className="section-padding bg-[#0D0D0D] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn>
              <div className="rounded-lg overflow-hidden h-[400px] sm:h-[500px] relative bg-[#1A1A1A]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2872.6!2d-79.4612!3d44.0592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad3d0e1f0e0e7%3A0x0!2sMain+St+S%2C+Newmarket%2C+ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%" height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vision Wrld Tattoo Studio location on Google Maps"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                <div className="glass-card p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#C41E3A]/20 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#C41E3A]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F5F5] font-semibold mb-1">Address</h3>
                    <p className="text-[#999999] text-sm">175 Main St S<br />Newmarket, ON L3Y 3Y7</p>
                  </div>
                </div>
                <div className="glass-card p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#C41E3A]/20 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#C41E3A]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F5F5] font-semibold mb-1">Phone</h3>
                    <a href="tel:+19055551234" className="text-[#999999] text-sm hover:text-[#D4A574] transition-colors">(905) 555-1234</a>
                  </div>
                </div>
                <div className="glass-card p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#C41E3A]/20 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#C41E3A]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F5F5] font-semibold mb-1">Email</h3>
                    <a href="mailto:info@visionwrld.com" className="text-[#999999] text-sm hover:text-[#D4A574] transition-colors">info@visionwrld.com</a>
                  </div>
                </div>
                <div className="glass-card p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#D4A574]/20 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F5F5] font-semibold mb-2">Hours of Operation</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between gap-8">
                        <span className="text-[#999999]">Tuesday – Friday</span>
                        <span className="text-[#D4A574]">11am – 7pm</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="text-[#999999]">Saturday</span>
                        <span className="text-[#D4A574]">10am – 6pm</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="text-[#999999]">Sunday – Monday</span>
                        <span className="text-[#333333]">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#D4A574]/20 flex items-center justify-center shrink-0">
                    <Car size={18} className="text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F5F5] font-semibold mb-2">Parking & Transit</h3>
                    <p className="text-[#999999] text-sm leading-relaxed">
                      Free street parking available on Main St S and Water St. The Newmarket GO Station is a 10-minute walk. Also accessible via YRT Route 55.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form + Social */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl tracking-wider mb-2">
                  GENERAL <span className="text-[#C41E3A]">INQUIRIES</span>
                </h2>
                <p className="text-[#999999] text-sm mb-8">
                  For booking requests, please use our{" "}
                  <Link href="/booking" className="text-[#C41E3A] hover:underline">booking form</Link>.
                  This form is for general questions only.
                </p>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-[#999999] mb-2">Name *</label>
                        <input type="text" required value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F5F5F5] placeholder:text-[#333333] focus:border-[#C41E3A] focus:outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#999999] mb-2">Email *</label>
                        <input type="email" required value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F5F5F5] placeholder:text-[#333333] focus:border-[#C41E3A] focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-[#999999] mb-2">Subject</label>
                      <input type="text" value={form.subject}
                        onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F5F5F5] placeholder:text-[#333333] focus:border-[#C41E3A] focus:outline-none transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#999999] mb-2">Message *</label>
                      <textarea required rows={5} value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F5F5F5] placeholder:text-[#333333] focus:border-[#C41E3A] focus:outline-none transition-colors resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    {submitError && (
                      <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-4 rounded-lg">
                        <AlertCircle size={16} />{submitError}
                      </div>
                    )}
                    <button type="submit" disabled={isSubmitting} className="btn-primary">
                      <Send size={16} />{isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                ) : (
                  <div className="glass-card p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#D4A574]/20 flex items-center justify-center mx-auto mb-4">
                      <Check size={32} className="text-[#D4A574]" />
                    </div>
                    <h3 className="font-heading text-2xl tracking-wider mb-2">MESSAGE SENT</h3>
                    <p className="text-[#999999] text-sm">
                      Thanks for reaching out! We&apos;ll get back to you within 1-2 business days.
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl tracking-wider mb-2">
                  FOLLOW <span className="text-[#D4A574]">US</span>
                </h2>
                <p className="text-[#999999] text-sm mb-8">
                  Stay connected for daily updates, flash drops, and behind-the-scenes content.
                </p>
                <div className="space-y-4">
                  <a href="https://instagram.com/visionwrld" target="_blank" rel="noopener noreferrer"
                    className="glass-card p-6 flex items-center gap-4 hover:border-[#C41E3A]/30 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-800 to-red-600 flex items-center justify-center">
                      <InstagramIcon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#F5F5F5] font-semibold group-hover:text-[#C41E3A] transition-colors">Instagram</h3>
                      <p className="text-[#999999] text-sm">@visionwrld</p>
                    </div>
                  </a>
                  <a href="https://tiktok.com/@visionwrld" target="_blank" rel="noopener noreferrer"
                    className="glass-card p-6 flex items-center gap-4 hover:border-[#C41E3A]/30 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#F5F5F5]">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.44a4.85 4.85 0 01-3.77-1.56V6.69h3.77z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#F5F5F5] font-semibold group-hover:text-[#C41E3A] transition-colors">TikTok</h3>
                      <p className="text-[#999999] text-sm">@visionwrld</p>
                    </div>
                  </a>
                  <a href="https://twitter.com/visionwrld" target="_blank" rel="noopener noreferrer"
                    className="glass-card p-6 flex items-center gap-4 hover:border-[#C41E3A]/30 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#F5F5F5]">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#F5F5F5] font-semibold group-hover:text-[#C41E3A] transition-colors">X (Twitter)</h3>
                      <p className="text-[#999999] text-sm">@visionwrld</p>
                    </div>
                  </a>
                </div>
                <div className="mt-8 rounded-lg overflow-hidden">
                  <Image src="/images/studio-interior.jpg" alt="Vision Wrld tattoo studio interior in Newmarket" width={600} height={400} className="object-cover w-full h-64" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
