import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { artists, portfolioItems } from "@/lib/data";

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // We'll use a synchronous approach for metadata
  return {
    title: "Artist Profile | Vision Wrld Tattoo",
    description: "View artist portfolio and book a consultation at Vision Wrld Tattoo Studio in Newmarket.",
  };
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);

  if (!artist) notFound();

  const artistWork = portfolioItems.filter((p) => p.artistSlug === slug);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 grain-overlay relative">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/artists"
            className="inline-flex items-center gap-2 text-vw-gray hover:text-vw-gold transition-colors text-sm mb-8"
          >
            <ArrowLeft size={16} />
            Back to All Artists
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Artist Image */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] rounded-lg overflow-hidden sticky top-28">
                <Image
                  src={artist.image}
                  alt={`Tattoo artist ${artist.name} at Vision Wrld Newmarket`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Artist Info */}
            <div className="lg:col-span-2">
              <p className="text-vw-accent text-sm uppercase tracking-[0.3em] font-medium mb-2">
                {artist.specialty}
              </p>
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-wider mb-6">
                {artist.name}
              </h1>
              <p className="text-vw-gray text-lg leading-relaxed mb-6">
                {artist.bio}
              </p>

              <div className="mb-8">
                <h3 className="text-vw-white font-semibold text-sm uppercase tracking-wider mb-3">
                  Inspirations
                </h3>
                <p className="text-vw-gray leading-relaxed">
                  {artist.inspirations}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-vw-white font-semibold text-sm uppercase tracking-wider mb-3">
                  Styles
                </h3>
                <div className="flex flex-wrap gap-2">
                  {artist.styles.map((s) => (
                    <span
                      key={s}
                      className="text-xs uppercase tracking-wider bg-vw-accent/20 text-vw-accent px-3 py-1.5 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/booking?artist=${artist.slug}`}
                className="btn-primary"
              >
                Request {artist.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Gallery */}
      <section className="section-padding bg-[#0D0D0D] grain-overlay relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-wider mb-8">
            WORK BY <span className="text-vw-accent">{artist.name.toUpperCase()}</span>
          </h2>

          {artistWork.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {artistWork.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-lg overflow-hidden cursor-pointer"
                >
                  <div className="relative" style={{ aspectRatio: item.aspectRatio }}>
                    <Image
                      src={item.image}
                      alt={`Custom ${item.style} tattoo by ${artist.name} at Vision Wrld`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-vw-white text-sm font-medium">{item.title}</p>
                        <p className="text-vw-accent text-xs">{item.style}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-vw-gray">
                Portfolio coming soon. Check back for {artist.name}&apos;s latest work.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
