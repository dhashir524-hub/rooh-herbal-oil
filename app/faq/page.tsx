
const faqs = [
  {
    question: "What is Rooh Herbal Oil?",
    answer:
      "Rooh is a traditional oil blend featuring 25 herbal ingredients with an almond and mustard oil base.",
  },
  {
    question: "What is the price?",
    answer: "One 120 ml bottle costs Rs. 700.",
  },
  {
    question: "How much oil is in one bottle?",
    answer: "Each bottle contains 120 ml of Rooh Herbal Oil.",
  },
  {
    question: "What ingredients are used?",
    answer:
      "The blend features 25 herbal ingredients, with almond oil and mustard oil as its base. Contact us for the complete ingredient list.",
  },
  {
    question: "Who can use this product?",
    answer: "The product is presented for both men and women. Please check the product label for usage and safety information.",
  },
  {
    question: "How can I order?",
    answer:
      "You can contact us through WhatsApp to place an order and share your delivery details.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Delivery is available in selected cities. Contact us on WhatsApp to confirm availability in your area.",
  },
  {
    question: "Is Cash on Delivery available?",
    answer:
      "Contact us on WhatsApp to confirm the available payment options for your location.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#fffaf0]">
      <section className="bg-gradient-to-br from-[#fff7e6] to-[#f1e4c9] px-5 py-20 text-center sm:py-24">
        <p className="font-semibold uppercase tracking-[0.25em] text-[#b89543]">
          Customer Support
        </p>

        <h1 className="mt-5 font-serif text-4xl font-bold text-[#173d2c] sm:text-6xl">
          Frequently Asked Questions
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
          Find answers to common questions about Rooh Herbal Oil,
          product details and ordering.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-[#e9dfca] bg-white p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#173d2c]">
                {faq.question}
                <span className="text-2xl text-[#b89543] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 border-t border-[#eee5d4] pt-4 text-sm leading-7 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#173d2c] p-8 text-center text-white">
          <h2 className="font-serif text-2xl font-bold">
            Still Have Questions?
          </h2>

          <p className="mt-3 text-sm leading-7 text-white/75">
            Contact our team through WhatsApp for assistance.
          </p>

          <a
            href="https://wa.me/923701993719"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-[#d8b75a] px-8 py-4 font-semibold text-[#173d2c]"
          >
            Ask on WhatsApp →
          </a>
        </div>
      </section>
    </main>
  );
}
