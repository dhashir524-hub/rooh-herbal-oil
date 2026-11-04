
"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function AnimatedProduct() {
  return (
    <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-10">
      {/* Soft background glow */}
      <motion.div
        className="absolute h-64 w-64 rounded-full bg-[#d8b75a]/25 blur-3xl sm:h-80 sm:w-80"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative circle */}
      <div className="absolute h-64 w-64 rounded-full border border-[#b89543]/30 sm:h-80 sm:w-80" />

      {/* Floating product image */}
    
       <motion.div
  className="relative z-10"
  whileHover={{ scale: 1.04, rotate: 2 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  animate={{
    y: [0, -14, 0],
    rotate: [-1, 1, -1],
  }}
  >
        <Image
  src="/rooh-bottle.jpg.jpg"
  alt="Rooh Herbal Oil bottle"
  width={600}
  height={900}
  preload
  sizes="(max-width: 640px) 90vw, 490px"
  className="relative z-10 h-[390px] w-auto max-w-full object-contain drop-shadow-2xl sm:h-[490px]"
/>
      </motion.div>

      {/* Small decorative label */}
      <motion.div
        className="absolute bottom-8 right-0 z-20 rounded-full border border-[#e8d9b5] bg-white/90 px-4 py-2 text-xs font-semibold text-[#173d2c] shadow-lg sm:right-2"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        🌿 25 Herbal Ingredients
      </motion.div>
    </div>
  );
}
