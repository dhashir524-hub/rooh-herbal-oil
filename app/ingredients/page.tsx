
export default function IngredientsPage() {
  return (
    <main className="min-h-screen bg-[#fffaf0]">
      <section className="bg-gradient-to-br from-[#fff7e6] to-[#f1e4c9] px-5 py-20 text-center sm:py-28">
        <p className="font-semibold uppercase tracking-[0.25em] text-[#b89543]">
          The Rooh Blend
        </p>

        <h1 className="mt-5 font-serif text-4xl font-bold text-[#173d2c] sm:text-6xl">
          Ingredients That Define Rooh
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
          Discover the blend behind Rooh Herbal Oil, featuring 25 herbal
          ingredients with an almond and mustard oil base.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <div className="text-5xl">🌿</div>
            <h2 className="mt-5 text-xl font-bold text-[#173d2c]">
              25 Herbal Ingredients
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              A blend featuring 25 herbal ingredients.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <div className="text-5xl">🌰</div>
            <h2 className="mt-5 text-xl font-bold text-[#173d2c]">
              Almond Oil
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Almond oil is one of the base oils used in the blend.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <div className="text-5xl">🌱</div>
            <h2 className="mt-5 text-xl font-bold text-[#173d2c]">
              Mustard Oil
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Mustard oil is also included as a base oil.
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-[#173d2c] px-6 py-12 text-center text-white">
          <h2 className="font-serif text-3xl font-bold">
            Discover the Rooh Blend
          </h2>
          <p className="mt-4 text-white/75">
            Explore our 120 ml bottle for Rs. 700.
          </p>
          <a
            href="/product"
            className="mt-7 inline-block rounded-full bg-[#d8b75a] px-8 py-4 font-semibold text-[#173d2c]"
          >
            Explore Our Product →
          </a>
        </div>
      </section>
    </main>
  );
}
