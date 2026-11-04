
const whatsapp = "https://wa.me/923701993719?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Rooh%20Herbal%20Oil.";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fffaf0]">
      {/* Contact Hero */}
      <section className="bg-gradient-to-br from-[#fff7e6] to-[#f1e4c9] px-5 py-20 text-center sm:py-24">
        <p className="font-semibold uppercase tracking-[0.25em] text-[#b89543]">
          We're Here to Help
        </p>

        <h1 className="mt-5 font-serif text-4xl font-bold text-[#173d2c] sm:text-6xl">
          Contact Rooh
        </h1>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-600">
          Have a question about our product or want to place an order?
          Get in touch with us.
        </p>
      </section>

      {/* Contact Details */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-8 md:grid-cols-2">

          {/* WhatsApp Card */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="text-5xl">💬</div>

            <h2 className="mt-5 text-2xl font-bold text-[#173d2c]">
              WhatsApp
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Message us directly for product information, ordering
              and delivery availability.
            </p>

            <p className="mt-5 text-lg font-semibold text-[#173d2c]">
              03701993719
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-[#14532d] px-8 py-4 font-semibold text-white transition hover:bg-[#b89543]"
            >
              Chat on WhatsApp →
            </a>
          </div>

          {/* Product Card */}
          <div className="rounded-3xl bg-[#173d2c] p-8 text-white">
            <div className="text-5xl">🌿</div>

            <h2 className="mt-5 text-2xl font-bold">
              Rooh Herbal Oil
            </h2>

            <p className="mt-3 leading-7 text-white/75">
              Explore our herbal oil blend featuring 25 herbal
              ingredients with an almond and mustard oil base.
            </p>

            <div className="mt-6 border-t border-white/20 pt-5">
              <p className="text-sm text-white/70">Product Details</p>
              <p className="mt-2 text-lg font-semibold">
                120 ml — Rs. 700
              </p>
            </div>

            <a
              href="/product"
              className="mt-6 inline-block rounded-full bg-[#d8b75a] px-8 py-4 font-semibold text-[#173d2c] transition hover:bg-white"
            >
              View Product →
            </a>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="mt-10 rounded-3xl border border-[#e9dfca] bg-white p-8 text-center">
          <div className="text-4xl">📦</div>

          <h2 className="mt-4 text-2xl font-bold text-[#173d2c]">
            Delivery Information
          </h2>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
            Delivery is available in selected cities. Contact us on
            WhatsApp to confirm availability and payment options.
          </p>
        </div>
        {/* How to Order */}
<div className="mt-10 rounded-3xl bg-[#f1e9d8] p-8 sm:p-10">
  <div className="text-center">
    <p className="font-semibold uppercase tracking-[0.2em] text-[#b89543]">
      Simple & Easy
    </p>

    <h2 className="mt-3 text-3xl font-bold text-[#173d2c]">
      How to Order
    </h2>
  </div>

  <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
    <div className="rounded-2xl bg-white p-6 text-center">
      <div className="text-4xl">🛍️</div>
      <h3 className="mt-4 font-bold text-[#173d2c]">1. Choose</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        Visit our product page and choose your quantity.
      </p>
    </div>

    <div className="rounded-2xl bg-white p-6 text-center">
      <div className="text-4xl">📝</div>
      <h3 className="mt-4 font-bold text-[#173d2c]">2. Enter Details</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        Enter your contact number and delivery address.
      </p>
    </div>

    <div className="rounded-2xl bg-white p-6 text-center">
      <div className="text-4xl">💬</div>
      <h3 className="mt-4 font-bold text-[#173d2c]">3. Confirm</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        Review your order and continue through WhatsApp.
      </p>
    </div>
  </div>

  <p className="mt-6 text-center text-sm text-gray-600">
    Delivery availability and charges are confirmed through WhatsApp.
  </p>
</div>
      </section>
      
    </main>
  );
}
