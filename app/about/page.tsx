
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fffaf0]">
      {/* About Hero */}
      <section className="bg-gradient-to-br from-[#fff7e6] to-[#f1e4c9] px-5 py-20 text-center sm:py-28">
        <p className="font-semibold uppercase tracking-[0.25em] text-[#b89543]">
          Our Story
        </p>

        <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-bold text-[#173d2c] sm:text-6xl">
          Get to Know Rooh
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
          A traditional herbal oil blend created around the idea of bringing
          together herbal ingredients and familiar natural oils.
        </p>
      </section>

      {/* About Content */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="flex justify-center rounded-3xl bg-[#f1e4c9] p-8">
          <img
            src="/rooh-about.jpg.jpg"
            alt="Rooh Herbal Oil product"
            className="h-[380px] w-auto object-contain drop-shadow-xl sm:h-[450px]"
          />
        </div>

        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-[#b89543]">
            About Our Product
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold text-[#173d2c] sm:text-4xl">
            The Rooh Herbal Oil Blend
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Rooh Herbal Oil features a blend of 25 herbal ingredients,
            prepared with almond oil and mustard oil as its base.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Each bottle contains 120 ml and is presented for both men
            and women. Our focus is to make product details clear and
            ordering simple for customers.
          </p>

          <a
            href="/product"
            className="mt-8 inline-block rounded-full bg-[#173d2c] px-8 py-4 font-semibold text-white transition hover:bg-[#b89543]"
          >
            Explore Our Product →
          </a>
        </div>
      </section>

      {/* Brand Values */}
      <section className="bg-[#173d2c] px-5 py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            What Rooh Stands For
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <div className="text-4xl">🌿</div>
              <h3 className="mt-4 text-xl font-semibold">Herbal Blend</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Featuring 25 herbal ingredients.
              </p>
            </div>

            <div>
              <div className="text-4xl">🤎</div>
              <h3 className="mt-4 text-xl font-semibold">Traditional Oils</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Almond oil and mustard oil base.
              </p>
            </div>

            <div>
              <div className="text-4xl">📦</div>
              <h3 className="mt-4 text-xl font-semibold">Easy Ordering</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Contact us to order and confirm delivery availability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
