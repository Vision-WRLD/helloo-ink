"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { faqs } from "@/lib/data";
import { FadeIn } from "@/components/FadeIn";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
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

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

  const filtered = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="text-[#D4A574] text-sm uppercase tracking-[0.3em] font-medium mb-4">Got Questions?</p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wider mb-6">
              FREQUENTLY ASKED <span className="text-[#C41E3A]">QUESTIONS</span>
            </h1>
            <p className="text-[#999999] text-lg max-w-2xl mx-auto">
              Find answers to the most common questions about getting tattooed at Vision Wrld.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-[#0D0D0D] sticky top-16 sm:top-20 z-30 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative mb-4">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999999]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-[#F5F5F5] placeholder:text-[#333333] focus:border-[#C41E3A] focus:outline-none transition-colors"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 text-xs uppercase tracking-wider font-medium rounded transition-all ${
                  activeCategory === cat
                    ? "bg-[#C41E3A] text-white"
                    : "bg-white/5 text-[#999999] hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding relative">
        <div className="max-w-3xl mx-auto">
          {filtered.length > 0 ? (
            <div className="glass-card p-6 sm:p-8">
              {filtered.map((faq) => (
                <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[#999999] text-lg mb-4">No questions match your search.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="text-[#C41E3A] hover:underline text-sm"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl tracking-wider mb-4">
              STILL HAVE <span className="text-[#C41E3A]">QUESTIONS</span>?
            </h2>
            <p className="text-[#999999] mb-8 max-w-lg mx-auto">
              Can&apos;t find what you&apos;re looking for? Reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="btn-primary">Contact Us</a>
              <a href="/booking" className="btn-secondary text-sm">Book a Consultation</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
