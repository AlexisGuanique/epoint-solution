export function LogoBar() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4 sm:gap-12 md:gap-24">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="flex h-12 w-32 items-center justify-center rounded-lg bg-gray-200/60 text-sm text-gray-400"
          >
            Logoipsum
          </div>
        ))}
      </div>
    </section>
  );
}
