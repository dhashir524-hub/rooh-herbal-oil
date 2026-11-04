
"use client";

import { useState } from "react";
import { motion } from "motion/react";

const PRODUCT_PRICE = 700;

export default function ProductPage() {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const total = quantity * PRODUCT_PRICE;

  const handleOrder = () => {
  if (
    !customerName.trim() ||
    !phone.trim() ||
    !city.trim() ||
    !address.trim()
  ) {
    alert("Please complete all customer and delivery details.");
    return;
  }

  setIsConfirmOpen(true);
};

const confirmOrder = () => {
  const message = `Hello Rooh Herbal Oil!

I want to place an order.

Product: Rooh Herbal Oil
Bottle Size: 120 ml
Quantity: ${quantity}
Price per Bottle: Rs. ${PRODUCT_PRICE}
Total: Rs. ${total}

Customer Name: ${customerName}
Phone: ${phone}
City: ${city}
Delivery Address: ${address}

Please confirm my order.`;

  const whatsappUrl = `https://wa.me/923701993719?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
  setIsConfirmOpen(false);
};

  return (
    <main className="min-h-screen bg-[#fffaf0]">
      <section className="bg-gradient-to-br from-[#fff7e6] to-[#f1e4c9] px-5 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">

         
{/* Premium Product Gallery */}
<div className="flex flex-col items-center">
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="flex min-h-[420px] w-full items-center justify-center rounded-3xl border border-[#e8d9b9] bg-white/60 p-6 shadow-xl sm:min-h-[520px]"
  ><button
  type="button"
  onClick={() => setIsZoomOpen(true)}
  aria-label="Zoom Rooh Herbal Oil bottle image"
  className="cursor-zoom-in"
>
  <img
    src="/rooh-bottle.jpg.jpg"
    alt="Rooh Herbal Oil original bottle"
    className="h-[380px] max-w-full object-contain transition-transform duration-300 hover:scale-105 sm:h-[460px]"
  />
</button>
  </motion.div>

  <div className="mt-5 flex gap-4">
    <div className="rounded-xl border-2 border-[#b89543] bg-white p-2">
      <img
        src="/rooh-bottle.jpg.jpg"
        alt="Rooh Herbal Oil bottle thumbnail"
        className="h-20 w-16 object-contain"
      />
    </div>

    <div className="flex h-24 w-20 items-center justify-center rounded-xl border border-[#e8d9b9] bg-[#f5ead4] text-center text-xs text-[#173d2c]">
      Ingredient
      <br />
      Photos Coming Soon
    </div>

    <div className="flex h-24 w-20 items-center justify-center rounded-xl border border-[#e8d9b9] bg-[#f5ead4] text-center text-xs text-[#173d2c]">
      Product
      <br />
      Details Soon
    </div>
  </div>
</div>


          {/* Product Information */}
          <div className="text-center md:text-left">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#b89543]">
              Discover Rooh
            </p>

            <h1 className="mt-5 font-serif text-4xl font-bold text-[#173d2c] sm:text-6xl">
              Rooh Herbal Oil
            </h1>

            <p className="mt-6 leading-8 text-gray-600">
              Explore our traditional blend featuring 25 herbal ingredients
              with an almond and mustard oil base.
            </p>

            <div className="mt-7 space-y-3 text-sm text-[#173d2c]">
              <p>🌿 25 Herbal Ingredients</p>
              <p>🌰 Almond and Mustard Oil Base</p>
              <p>🧴 120 ml Bottle</p>
              <p>👥 Presented for Men and Women</p>
            </div>

            {/* Price */}
            <div className="mt-8">
              <p className="text-sm text-gray-500">Price per bottle</p>
              <p className="font-serif text-4xl font-bold text-[#173d2c]">
                Rs. {PRODUCT_PRICE.toLocaleString("en-PK")}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-[#173d2c]">
                Select Quantity
              </p>

              <div className="inline-flex items-center gap-6 rounded-full border border-[#d8c69d] bg-white px-5 py-3">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="text-2xl font-bold text-[#173d2c]"
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span className="min-w-6 text-center text-lg font-bold text-[#173d2c]">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                  className="text-2xl font-bold text-[#173d2c]"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="mt-6 rounded-2xl border border-[#d8c69d] bg-white/80 p-5">
              <p className="text-sm text-gray-500">Your Total</p>
              <p className="mt-1 font-serif text-3xl font-bold text-[#173d2c]">
                Rs. {total.toLocaleString("en-PK")}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {quantity} × Rs. {PRODUCT_PRICE}
              </p>
            </div>

            {/* Customer Details */}
            <div className="mt-8 space-y-4 text-left">
              <h2 className="font-serif text-2xl font-bold text-[#173d2c]">
                Delivery Details
              </h2>

              <input
                type="text"
                placeholder="Your Full Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full rounded-xl border border-[#d8c69d] bg-white px-4 py-3 outline-none focus:border-[#173d2c]"
              />

              <input
                type="tel"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-[#d8c69d] bg-white px-4 py-3 outline-none focus:border-[#173d2c]"
              />

              <input
                type="text"
                placeholder="Your City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-xl border border-[#d8c69d] bg-white px-4 py-3 outline-none focus:border-[#173d2c]"
              />

              <textarea
                placeholder="Complete Delivery Address"
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full rounded-xl border border-[#d8c69d] bg-white px-4 py-3 outline-none focus:border-[#173d2c]"
              />

              <button
                type="button"
                onClick={handleOrder}
                className="w-full rounded-full bg-[#14532d] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#b89543]"
              >
                Continue to WhatsApp →
              </button>

              <p className="text-center text-xs text-gray-500">
                Your order details will be prepared in WhatsApp for confirmation.
                Delivery charges will be confirmed separately.
              </p>
            </div>
          </div>
        </div>
      </section>
      {isZoomOpen && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5"
    onClick={() => setIsZoomOpen(false)}
  >
    <button
      type="button"
      onClick={() => setIsZoomOpen(false)}
      className="absolute right-6 top-6 text-4xl text-white"
      aria-label="Close image viewer"
    >
      ×
    </button>

    <img
      src="/rooh-bottle.jpg.jpg"
      alt="Rooh Herbal Oil enlarged bottle"
      className="max-h-[85vh] max-w-full object-contain"
    />
  </div>
)}

{isConfirmOpen && (
  <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 p-4">
    <div className="w-full max-w-md rounded-3xl bg-[#fffaf0] p-6 shadow-2xl sm:p-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b89543]">
          ROOH HERBAL OIL
        </p>

        <h2 className="mt-3 font-serif text-3xl font-bold text-[#173d2c]">
          Confirm Your Order
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Please review your details before continuing.
        </p>
      </div>

      <div className="mt-6 space-y-3 rounded-2xl border border-[#e5d5b3] bg-white p-5 text-sm">
        <div className="flex justify-between gap-3">
          <span className="text-gray-500">Product</span>
          <span className="font-semibold text-[#173d2c]">Rooh Herbal Oil</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Bottle Size</span>
          <span className="font-semibold">120 ml</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Quantity</span>
          <span className="font-semibold">{quantity}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Customer</span>
          <span className="font-semibold">{customerName}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Phone</span>
          <span className="font-semibold">{phone}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">City</span>
          <span className="font-semibold">{city}</span>
        </div>

        <div className="border-t border-dashed border-[#d8c69d] pt-3">
          <p className="text-gray-500">Delivery Address</p>
          <p className="mt-1 font-medium text-[#173d2c]">{address}</p>
        </div>

        <div className="flex justify-between border-t border-[#e5d5b3] pt-4">
          <span className="font-semibold text-[#173d2c]">Total Amount</span>
          <span className="text-xl font-bold text-[#173d2c]">
            Rs. {total.toLocaleString("en-PK")}
          </span>
        </div>
        <p className="text-xs text-gray-500">
          Delivery charges will be confirmed separately.
        </p>
      </div>

      <button
        type="button"
        onClick={confirmOrder}
        className="mt-6 w-full rounded-full bg-[#173d2c] px-6 py-4 font-semibold text-white transition hover:bg-[#b89543]"
      >
        Confirm & Continue to WhatsApp →
      </button>

      <button
        type="button"
        onClick={() => setIsConfirmOpen(false)}
        className="mt-3 w-full rounded-full border border-[#d8c69d] px-6 py-3 font-semibold text-[#173d2c] transition hover:bg-[#f1e4c9]"
      >
        Edit My Details
      </button>
    </div>
  </div>
)}

    </main>
  );
}
