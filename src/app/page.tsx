"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";
import { artists, testimonials } from "@/lib/data";

/* ─── Scroll-triggered fade-in using IntersectionObserver ─── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "-60px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Hero Section ─── */
function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Vision Wrld Tattoo Studio interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-32 h-32 rounded-full bg-[#C41E3A]/8 blur-[80px]" />
      <div className="absolute bottom-1/4 right-8 w-40 h-40 rounded-full bg-[#D4A574]/8 blur-[80px]" />
      
      {/* Side accent lines */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#C41E3A]/30 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-[#D4A574]/20 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div
          className="transition-all duration-700 delay-200"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#C41E3A]/60" />
            <p className="text-[#D4A574] text-xs sm:text-sm uppercase tracking-[0.3em] font-medium">
              Newmarket&apos;s Premier Tattoo Studio
            </p>
            <div className="w-12 h-px bg-[#C41E3A]/60" />
          </div>
        </div>

        <h1
          className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider leading-none mb-4 transition-all duration-700 delay-400"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(40px)",
          }}
        >
          WELCOME TO
        </h1>
        <h1
          className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider leading-none mb-8 transition-all duration-700 delay-500"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <span className="text-[#C41E3A]">VISION</span>{" "}
          <span className="text-[#D4A574]">WRLD</span>
        </h1>

        <p
          className="text-[#999999] text-lg sm:text-xl max-w-2xl mx-auto mb-10 transition-all duration-700 delay-600"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
          }}
        >
          Custom Art, Lasting Impressions
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-800"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <Link
            href="/booking"
            className="btn-primary glow-accent"
            style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
          >
            <Sparkles size={16} />
            Book a Consultation
          </Link>
          <Link href="/artists" className="btn-secondary">
            View Portfolio
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ animation: "float 2s ease-in-out infinite" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#999999]/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#D4A574] rounded-full" />
        </div>
      </div>
    </section>
  );
}

/* ─── Studio Intro ─── */
function StudioIntro() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <p className="text-[#C41E3A] text-sm uppercase tracking-[0.3em] font-medium mb-4">
                Our Ethos
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-wider mb-6">
                WHERE YOUR VISION
                <br />
                <span className="text-[#D4A574]">MEETS OUR WORLD</span>
              </h2>
              <p className="text-[#999999] text-lg leading-relaxed mb-6">
                Vision Wrld is more than a tattoo studio—it&apos;s a creative
                sanctuary where artistry and professionalism converge. Located in
                the heart of Newmarket, our space was designed to inspire
                confidence and comfort from the moment you walk in.
              </p>
              <p className="text-[#999999] text-lg leading-relaxed mb-8">
                Every artist on our team has been carefully selected for their
                mastery, originality, and commitment to pushing the boundaries of
                what&apos;s possible on skin. No flash walls. No assembly lines. Just
                pure, custom art crafted specifically for you.
              </p>
              <Link href="/artists" className="btn-secondary text-sm">
                Meet the Artists
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/studio-interior.jpg"
                  alt="Vision Wrld studio interior in Newmarket"
                  width={600}
                  height={750}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C41E3A]/50 rounded-tl-lg" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#D4A574]/50 rounded-br-lg" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Artists ─── */
function FeaturedArtists() {
  return (
    <section className="section-padding bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#C41E3A] text-sm uppercase tracking-[0.3em] font-medium mb-4">
              The Team
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-wider">
              FEATURED ARTISTS
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, i) => (
            <FadeIn key={artist.slug} delay={i * 0.1}>
              <Link href={`/artists/${artist.slug}`} className="group block">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={artist.image}
                    alt={`Tattoo artist ${artist.name} at Vision Wrld Newmarket`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex flex-wrap gap-2">
                      {artist.styles.slice(0, 2).map((s) => (
                        <span
                          key={s}
                          className="text-[10px] uppercase tracking-wider bg-[#C41E3A]/30 text-[#C41E3A] px-2 py-1 rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="font-heading text-2xl tracking-wider text-[#F5F5F5] group-hover:text-[#C41E3A] transition-colors">
                  {artist.name}
                </h3>
                <p className="text-[#999999] text-sm">{artist.specialty}</p>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/artists" className="btn-secondary text-sm">
              View Full Portfolio
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Instagram Feed (Mock) ─── */
function InstagramFeed() {
  const posts = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    image: `/images/portfolio/${
      [
        "blackwork-1",
        "realism-1",
        "neotrad-1",
        "fineline-1",
        "watercolor-1",
        "geometric-1",
        "blackwork-1",
        "realism-1",
        "neotrad-1",
      ][i]
    }.jpg`,
  }));

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-[#D4A574] text-sm uppercase tracking-[0.3em] font-medium mb-4">
              @visionwrld
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-wider mb-4">
              LATEST WORK
            </h2>
            <p className="text-[#999999] max-w-lg mx-auto">
              Follow our journey on Instagram for daily updates, healed results,
              and behind-the-scenes content.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {posts.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.05}>
              <div className="aspect-square rounded-lg overflow-hidden group cursor-pointer relative">
                <Image
                  src={post.image}
                  alt={`Vision Wrld tattoo work ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 group-hover:bg-[#C41E3A]/30 transition-all duration-300 flex items-center justify-center">
                  <InstagramIcon
                    size={24}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="text-center mt-8">
            <a
              href="https://instagram.com/visionwrld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D4A574] hover:text-[#C41E3A] transition-colors text-sm uppercase tracking-wider font-medium"
            >
              <InstagramIcon size={16} className="text-current" />
              Follow @visionwrld
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function InstagramIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  const [current, setCurrent] = useState(0);
  const len = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % len);
    }, 6000);
    return () => clearInterval(timer);
  }, [len]);

  const prev = () => setCurrent((c) => (c - 1 + len) % len);
  const next = () => setCurrent((c) => (c + 1) % len);

  return (
    <section className="section-padding bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#C41E3A] text-sm uppercase tracking-[0.3em] font-medium mb-4">
              Client Love
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-wider">
              WHAT THEY SAY
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative">
            <div className="glass-card p-8 sm:p-12 text-center min-h-[280px] flex flex-col justify-center">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-[#C41E3A] fill-[#C41E3A]"
                    />
                  )
                )}
              </div>
              <p className="text-[#F5F5F5] text-lg sm:text-xl leading-relaxed mb-6 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-[#F5F5F5]">
                  {testimonials[current].name}
                </p>
                <p className="text-[#C41E3A] text-sm">
                  Tattoo by {testimonials[current].artist}
                </p>
              </div>
            </div>

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 p-2 text-[#999999] hover:text-[#F5F5F5] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 p-2 text-[#999999] hover:text-[#F5F5F5] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-[#C41E3A] w-6"
                      : "bg-[#333333] hover:bg-[#999999]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─── */
function CTABanner() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/20 via-[#0A0A0A] to-[#D4A574]/20" />
      <div className="absolute inset-0 bg-[#0A0A0A]/60" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <FadeIn>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl tracking-wider mb-6">
            READY TO GET <span className="text-[#C41E3A]">INKED</span>?
          </h2>
          <p className="text-[#999999] text-lg mb-8 max-w-xl mx-auto">
            Take the first step toward your next custom piece. Our artists are
            ready to bring your vision to life.
          </p>
          <Link
            href="/booking"
            className="btn-primary glow-accent text-base py-4 px-10"
          >
            <Sparkles size={18} />
            Book a Consultation
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StudioIntro />
      <FeaturedArtists />
      <InstagramFeed />
      <Testimonials />
      <CTABanner />
    </>
  );
}
