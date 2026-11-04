import ProductScene from "@/components/ProductScene";
import AnimatedProduct from "@/components/Animatedproduct";

const phone = "923701993719";
const orderMessage = encodeURIComponent(
  "Hello! I would like to order Rooh Herbal Oil (120 ml) for Rs. 700."
);
const whatsapp = `https://wa.me/${phone}?text=${orderMessage}`;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf0] text-[#173d2c]">
      {/* Announcement */}
      <div className="bg-[#123a27] px-4 py-2 text-center text-sm text-white">
       Traditional Herbal Hair Care • Cash on Delivery • Delivery in Selected Cities
      </div>





{/* Hero */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#fffaf0] via-[#fff7e6] to-[#f1e4c9]">
  <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-12 sm:px-6 md:grid-cols-2 md:gap-10 md:py-20">

    {/* Hero Text */}
    <div className="relative z-10 text-center md:text-left">
      <span className="inline-block rounded-full border border-[#d9c28b] bg-white/70 px-5 py-2 text-xs font-bold tracking-[0.2em] text-[#9b792f]">
        DISCOVER THE ROOH EXPERIENCE
      </span>

      <h1 className="mt-7 font-serif text-4xl font-bold leading-tight text-[#173d2c] sm:text-5xl md:text-7xl">
        Give Your Hair
        <span className="mt-2 block text-[#b89543]">
          A Natural Touch.
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-[#62675d] md:mx-0 md:mt-7 md:text-lg">
        Explore Rooh Herbal Oil, a traditional blend of 25 herbal
        ingredients with an almond and mustard oil base.
      </p>

      <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
        <span className="rounded-full bg-white px-4 py-2 text-sm shadow-sm">
          25 Herbal Ingredients
        </span>
        <span className="rounded-full bg-white px-4 py-2 text-sm shadow-sm">
          120 ml Bottle
        </span>
      </div>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-6 md:justify-start">
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#14532d] px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#b89543]"
        >
          Shop Rooh Now →
        </a>

        <div className="text-left">
          <p className="text-xs text-[#777]">SPECIAL PRICE</p>
          <p className="font-serif text-3xl font-bold text-[#173d2c]">
            Rs. 700
          </p>
        </div>
      </div>
    </div>

    {/* Animated Real Product */}
    <div className="relative mx-auto w-full max-w-lg">
      <AnimatedProduct />
    </div>

  </div>
</section>

      
{/* Highlights */}
<section className="relative z-10 bg-white px-5 py-12">
  <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
    {[
      { icon: "🌿", title: "25 Ingredients", detail: "Herbal blend" },
      { icon: "🥜", title: "Almond Oil", detail: "Part of the oil base" },
      { icon: "✨", title: "120 ml", detail: "Product size" },
      { icon: "📦", title: "Cash on Delivery", detail: "Available" },
    ].map((item) => (
      <div
        key={item.title}
        className="group rounded-2xl border border-[#eee3ce] bg-[#fffaf0] p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c4a35b] hover:shadow-lg"
      >
        <span className="text-3xl">{item.icon}</span>
        <h3 className="mt-4 font-serif text-lg font-bold text-[#173d2c]">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-[#77776d]">{item.detail}</p>
      </div>
    ))}
  </div>
</section>



{/* Product Section */}
<section
  id="product"
  className="overflow-hidden bg-[#f8f2e5] px-4 py-14 sm:px-6 sm:py-20 md:py-24"
>
  <div className="mx-auto max-w-7xl">

    {/* Section Heading */}
    <div className="mb-10 text-center sm:mb-14">
      <p className="text-[10px] font-bold tracking-[0.25em] text-[#b89543] sm:text-xs sm:tracking-[0.3em]">
        MEET YOUR NEW HAIR CARE RITUAL
      </p>

      <h2 className="mt-3 font-serif text-3xl font-bold text-[#173d2c] sm:text-4xl md:text-5xl">
        The Rooh Collection
      </h2>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#6b6b60] sm:mt-4 sm:text-base sm:leading-7">
        A traditional herbal oil blend, thoughtfully presented
        for your personal hair-care routine.
      </p>
    </div>

    {/* Product Card */}
    <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl sm:rounded-3xl md:grid-cols-2">

      {/* Product Image */}
      <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#ead9b4] via-[#fff8e9] to-[#f1e5c9] px-5 py-8 sm:min-h-[480px] sm:py-10 md:min-h-[580px]">

        {/* Background Glow */}
        <div className="absolute h-56 w-56 rounded-full bg-[#d8b75a]/25 blur-3xl sm:h-80 sm:w-80" />

        {/* Product Image */}
        <img
          src="/rooh-product.jpg.jpeg"
          alt="Rooh Herbal Oil 120 ml bottle"
          className="relative z-10 h-[300px] w-auto max-w-[90%] object-contain drop-shadow-[0_20px_25px_rgba(23,61,44,0.22)] transition-transform duration-700 hover:scale-105 sm:h-[420px] md:h-[490px]"
        />

        {/* Image Label */}
        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#b89543]/30 bg-white/85 px-4 py-2 text-[10px] font-bold tracking-widest text-[#173d2c] shadow-md backdrop-blur-sm sm:bottom-6 sm:px-5 sm:text-xs">
          ROOH HERBAL OIL
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-center p-6 sm:p-10 md:p-12 lg:p-14">

        <span className="w-fit rounded-full bg-[#f4ead4] px-4 py-2 text-[10px] font-bold tracking-wider text-[#8b713e] sm:text-xs">
          SIGNATURE PRODUCT
        </span>

        <h3 className="mt-5 font-serif text-3xl font-bold text-[#173d2c] sm:mt-6 sm:text-4xl">
          Rooh Herbal Oil
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#6b6b60] sm:mt-5 sm:text-base sm:leading-8">
          A traditional blend of 25 herbal ingredients with an
          almond and mustard oil base, designed for men and women.
        </p>

        {/* Product Information */}
        <div className="my-6 divide-y divide-[#eee3ce] border-y border-[#eee3ce] py-3 sm:my-7 sm:py-4">
          <div className="flex justify-between gap-3 py-3 text-sm sm:text-base">
            <span className="text-[#777]">Bottle size</span>
            <strong className="text-[#173d2c]">120 ml</strong>
          </div>

          <div className="flex justify-between gap-3 py-3 text-sm sm:text-base">
            <span className="text-[#777]">Herbal blend</span>
            <strong className="text-[#173d2c]">25 ingredients</strong>
          </div>

          <div className="flex items-center justify-between gap-3 py-3">
            <span className="text-sm text-[#777] sm:text-base">Price</span>
            <strong className="text-xl text-[#14532d] sm:text-2xl">
              Rs. 700
            </strong>
          </div>
        </div>

        {/* WhatsApp Order Button */}
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center rounded-full bg-[#14532d] px-6 py-4 text-center text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#b89543] sm:text-base"
        >
          Order on WhatsApp →
        </a>

        <p className="mt-4 text-center text-xs leading-5 text-[#888]">
          Contact us to confirm delivery availability in your city.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Product Details */}
<section className="bg-white px-4 py-16 sm:px-6 md:py-20">
  <div className="mx-auto max-w-6xl">
    <div className="mb-10 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b89543]">
        Discover Rooh
      </p>

      <h2 className="text-3xl font-bold text-[#173d2c] sm:text-4xl">
        Made with a Blend of 25 Herbs
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
        Discover the ingredients and details behind Rooh Herbal Oil.
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-2xl bg-[#f8f5ec] p-7 text-center">
        <div className="mb-4 text-4xl">🌿</div>
        <h3 className="text-xl font-semibold text-[#173d2c]">
          25 Herbal Ingredients
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          A blend featuring 25 herbal ingredients.
        </p>
      </div>

      <div className="rounded-2xl bg-[#f8f5ec] p-7 text-center">
        <div className="mb-4 text-4xl">🥥</div>
        <h3 className="text-xl font-semibold text-[#173d2c]">
          Oil-Based Blend
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Prepared using almond oil and mustard oil as its base.
        </p>
      </div>

      <div className="rounded-2xl bg-[#f8f5ec] p-7 text-center sm:col-span-2 lg:col-span-1">
        <div className="mb-4 text-4xl">👥</div>
        <h3 className="text-xl font-semibold text-[#173d2c]">
          For Men & Women
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          A herbal oil product presented for both men and women.
        </p>
      </div>
    </div>
  </div>
</section>
{/* How to Order */}
<section id="how-to-order" className="bg-[#f8f2e5] px-4 py-16 sm:px-6 md:py-20">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b89543]">
        Simple & Easy
      </p>
      <h2 className="text-3xl font-bold text-[#173d2c] sm:text-4xl">
        How to Order
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-gray-600">
        Get your Rooh Herbal Oil in just three simple steps.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          number: "01",
          icon: "💬",
          title: "Contact Us",
          description: "Message us on WhatsApp to place your order.",
        },
        {
          number: "02",
          icon: "📍",
          title: "Share Your Details",
          description: "Provide your name, phone number and delivery address.",
        },
        {
          number: "03",
          icon: "📦",
          title: "Receive Your Order",
          description: "Confirm delivery availability and receive your parcel.",
        },
      ].map((step) => (
        <div
          key={step.number}
          className="rounded-2xl border border-[#e9dfca] bg-white p-7 text-center shadow-sm"
        >
          <p className="mb-3 text-sm font-bold tracking-widest text-[#b89543]">
            STEP {step.number}
          </p>
          <div className="mb-4 text-4xl">{step.icon}</div>
          <h3 className="text-xl font-semibold text-[#173d2c]">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            {step.description}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-10 text-center">
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-full bg-[#173d2c] px-8 py-4 font-semibold text-white transition hover:bg-[#24583f] sm:w-auto"
      >
        Order on WhatsApp →
      </a>
    </div>
  </div>
</section>


{/* About */}
<section id="about" className="relative overflow-hidden bg-[#123a27] px-6 py-24 text-white">
  <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
    <div>
      <p className="text-xs font-bold tracking-[0.3em] text-[#e7c66d]">
        THE STORY OF ROOH
      </p>

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-6xl">
        A Touch of Nature.
        <span className="block text-[#e7c66d]">
          A Tradition of Care.
        </span>
      </h2>

      <p className="mt-7 max-w-xl leading-8 text-white/75">
        Rooh Herbal Oil brings together a traditional blend of
        25 herbal ingredients with an almond and mustard oil base.
        Created for men and women who enjoy incorporating
        traditional hair-care products into their routine.
      </p>

      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className="mt-9 inline-block rounded-full bg-[#e7c66d] px-8 py-4 font-bold text-[#173d2c] transition hover:-translate-y-1 hover:bg-white"
      >
        Discover Rooh →
      </a>
    </div>

    <div className="relative rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm md:p-12">
      <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[#e7c66d]/50" />

      <p className="font-serif text-5xl font-bold text-[#e7c66d]">
        Rooh
      </p>
      <p className="mt-2 text-xs tracking-[0.35em] text-white/70">
        HERBAL OIL
      </p>

      <div className="my-8 h-px bg-white/20" />

      <div className="space-y-6">
        <div>
          <p className="text-3xl font-bold">25</p>
          <p className="mt-1 text-sm text-white/70">Herbal ingredients</p>
        </div>
        <div>
          <p className="text-3xl font-bold">120 ml</p>
          <p className="mt-1 text-sm text-white/70">Bottle size</p>
        </div>
        <div>
          <p className="text-3xl font-bold">Rs. 700</p>
          <p className="mt-1 text-sm text-white/70">Product price</p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Final Order Banner */}
<section className="relative overflow-hidden bg-[#173d2c] px-5 py-16 sm:px-6 md:py-20">
  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#b89543]/20 blur-3xl" />
  <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

  <div className="relative mx-auto max-w-3xl text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d8b75a]">
      Your Rooh Experience Starts Here
    </p>

    <h2 className="mt-5 font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
      Ready to Order Rooh Herbal Oil?
    </h2>

    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
      Contact us on WhatsApp to place your order and confirm delivery
      availability in your city.
    </p>

    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-full bg-[#d8b75a] px-9 py-4 font-bold text-[#173d2c] shadow-lg transition hover:-translate-y-1 hover:bg-white sm:w-auto"
      >
        Order on WhatsApp →
      </a>

      <span className="text-lg font-semibold text-white">
        Rs. 700 <span className="text-sm font-normal text-white/70">/ 120 ml</span>
      </span>
    </div>
  </div>
</section>



{/* FAQ Section */}
<section className="bg-white px-4 py-16 sm:px-6 md:py-20">
  <div className="mx-auto max-w-3xl">
    <div className="mb-10 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b89543]">
        Need to Know
      </p>
      <h2 className="text-3xl font-bold text-[#173d2c] sm:text-4xl">
        Frequently Asked Questions
      </h2>
    </div>

    <div className="space-y-4">
      {[
        {
          question: "What is the price of Rooh Herbal Oil?",
          answer: "One 120 ml bottle costs Rs. 700.",
        },
        {
          question: "How much oil is in one bottle?",
          answer: "Each bottle contains 120 ml of Rooh Herbal Oil.",
        },
        {
          question: "What ingredients does it contain?",
          answer:
            "The product features a blend of 25 herbal ingredients with almond oil and mustard oil as its base.",
        },
        {
          question: "Is it suitable for men and women?",
          answer: "The product is presented for both men and women.",
        },
        {
          question: "How can I place an order?",
          answer:
            "Contact us through WhatsApp to place your order and confirm delivery availability in your city.",
        },
        {
          question: "Is cash on delivery available?",
          answer:
            "Contact us on WhatsApp to confirm the available payment and delivery options for your location.",
        },
      ].map((faq, index) => (
        <details
          key={index}
          className="group rounded-xl border border-[#e9dfca] bg-[#fdfbf6] p-5"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#173d2c]">
            {faq.question}
            <span className="text-xl text-[#b89543] transition-transform group-open:rotate-45">
              +
            </span>
          </summary>

          <p className="mt-4 border-t border-[#e9dfca] pt-4 text-sm leading-7 text-gray-600">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>


{/* Footer */}
<footer className="bg-[#0c291b] px-6 pb-24 pt-16 text-white md:pb-10">
  <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

    {/* Brand */}
    <div>
      <h2 className="font-serif text-4xl font-bold">
        Rooh<span className="text-[#e7c66d]">.</span>
      </h2>
      <p className="mt-2 text-xs tracking-[0.3em] text-[#e7c66d]">
        HERBAL OIL
      </p>
      <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
        A traditional blend of 25 herbal ingredients with
        an almond and mustard oil base.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-serif text-xl font-bold">Quick Links</h3>
      <div className="mt-5 flex flex-col gap-4 text-sm text-white/65">
        <a href="/" className="hover:text-[#e7c66d]">Home</a>
        <a href="/product" className="hover:text-[#e7c66d]">Our Product</a>
        <a href="/ingredients" className="hover:text-[#e7c66d]">Ingredients</a>
        <a href="/about" className="hover:text-[#e7c66d]">About Rooh</a>
      </div>
    </div>

    {/* Contact */}
    <div>
      <h3 className="font-serif text-xl font-bold">Get in Touch</h3>
      <p className="mt-5 text-sm text-white/65">
        Have questions or want to place an order?
      </p>

      <p className="mt-4 text-sm">
        WhatsApp: 0370 1993719
      </p>

      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block rounded-full bg-[#e7c66d] px-7 py-3 text-sm font-bold text-[#123a27] hover:bg-white"
      >
        Chat on WhatsApp →
      </a>
    </div>
  </div>

  <div className="mx-auto mt-14 max-w-7xl border-t border-white/15 pt-6 text-center">
    <p className="text-xs text-white/50">
      © 2026 Rooh Herbal Oil. All rights reserved.
    </p>
  </div>
</footer>

      {/* Mobile order bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-[#e4d7bd] bg-white px-5 py-3 shadow-2xl md:hidden">
        <div>
          <p className="text-xs text-gray-500">Rooh Herbal Oil</p>
          <p className="font-bold">Rs. 700</p>
        </div>
        <a href={whatsapp} target="_blank" rel="noreferrer"
          className="rounded-full bg-[#14532d] px-6 py-3 text-sm font-semibold text-white">
          Order Now →
        </a>
      </div>
    </main>
  );
}
