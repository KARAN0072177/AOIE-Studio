export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-300">
          AOIE Studio
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
          Arts of Imagination Ever
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
          A modern AI-powered creative media platform for artists to publish,
          manage, and share original digital artworks.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            Explore Artwork
          </a>

          <a
            href="#"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Join as Artist
          </a>
        </div>
      </section>
    </main>
  );
}