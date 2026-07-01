"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { artists, portfolioItems, allStyles } from "@/lib/data";

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

export default function ArtistsPage() {
  const [selectedArtist, setSelectedArtist] = useState<string>("all");
  const [selectedStyle, setSelectedStyle] = useState<string>("all");
  const [lightboxItem, setLightboxItem] = useState<(typeof portfolioItems)[0] | null>(null);

  const filtered = portfolioItems.filter((item) => {
    const artistMatch = selectedArtist === "all" || item.artistSlug === selectedArtist;
    const styleMatch = selectedStyle === "all" || item.style === selectedStyle;
    return artistMatch && styleMatch;
  });

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 grain-overlay relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="text-vw-accent text-sm uppercase tracking-[0.3em] font-medium mb-4">
              Portfolio
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wider mb-6">
              ARTISTS & <span className="text-vw-gold">WORK</span>
            </h1>
            <p className="text-vw-gray text-lg max-w-2xl mx-auto">
              Explore our artists&apos; portfolios and find the style that speaks to
              you. Every piece is custom, every detail intentional.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-16 sm:top-20 z-30 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Artist Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
              <button
                onClick={() => setSelectedArtist("all")}
                className={`shrink-0 px-4 py-2 text-xs uppercase tracking-wider font-medium rounded transition-all ${
                  selectedArtist === "all"
                    ? "bg-vw-accent text-white"
                    : "bg-white/5 text-vw-gray hover:text-white hover:bg-white/10"
                }`}
              >
                All Artists
              </button>
              {artists.map((a) => (
                <button
                  key={a.slug}
                  onClick={() => setSelectedArtist(a.slug)}
                  className={`shrink-0 px-4 py-2 text-xs uppercase tracking-wider font-medium rounded transition-all ${
                    selectedArtist === a.slug
                      ? "bg-vw-accent text-white"
                      : "bg-white/5 text-vw-gray hover:text-white hover:bg-white/10"
                  }`}
                >
                  {a.name}
                </button>
              ))}
            </div>

            {/* Style Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 sm:ml-auto">
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="bg-white/5 text-vw-gray text-xs uppercase tracking-wider font-medium rounded px-4 py-2 border border-white/10 focus:border-vw-accent focus:outline-none appearance-none cursor-pointer"
              >
                <option value="all">All Styles</option>
                {allStyles.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Masonry Gallery */}
      <section className="section-padding grain-overlay relative">
        <div className="max-w-7xl mx-auto">
          <div className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="masonry-item"
                >
                  <div
                    className="group cursor-pointer relative rounded-lg overflow-hidden"
                    onClick={() => setLightboxItem(item)}
                  >
                    <div
                      className="relative"
                      style={{ aspectRatio: item.aspectRatio }}
                    >
                      <Image
                        src={item.image}
                        alt={`Custom ${item.style} tattoo by ${item.artistName} at Vision Wrld Newmarket`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        loading="lazy"
                      />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                        <div>
                          <p className="text-vw-white text-sm font-medium">
                            {item.title}
                          </p>
                          <p className="text-vw-accent text-xs">
                            {item.artistName} · {item.style}
                          </p>
                        </div>
                        <ZoomIn size={18} className="text-vw-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-vw-gray text-lg">
                No pieces match your current filters. Try adjusting your
                selection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Artist Profiles Grid */}
      <section className="section-padding bg-[#0D0D0D] grain-overlay relative">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-vw-gold text-sm uppercase tracking-[0.3em] font-medium mb-4">
                The Team
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl tracking-wider">
                OUR ARTISTS
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artists.map((artist, i) => (
              <FadeIn key={artist.slug} delay={i * 0.1}>
                <Link
                  href={`/artists/${artist.slug}`}
                  className="group glass-card p-6 flex gap-6 hover:border-vw-accent/30 transition-all duration-300"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={artist.image}
                      alt={`Tattoo artist ${artist.name}`}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-2xl tracking-wider group-hover:text-vw-accent transition-colors">
                      {artist.name}
                    </h3>
                    <p className="text-vw-gold text-sm mb-2">
                      {artist.specialty}
                    </p>
                    <p className="text-vw-gray text-sm line-clamp-2">
                      {artist.bio.slice(0, 120)}...
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {artist.styles.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] uppercase tracking-wider bg-white/5 text-vw-gray px-2 py-0.5 rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
          >
            <button
              className="absolute top-6 right-6 text-vw-white hover:text-vw-accent transition-colors z-10"
              onClick={() => setLightboxItem(null)}
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={lightboxItem.image}
                  alt={`Custom ${lightboxItem.style} tattoo by ${lightboxItem.artistName}`}
                  width={900}
                  height={1200}
                  className="object-contain w-full h-auto max-h-[80vh]"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-vw-white font-medium">{lightboxItem.title}</p>
                <p className="text-vw-accent text-sm">
                  {lightboxItem.artistName} · {lightboxItem.style}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
