"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-[#F8F4ED] px-4 pt-8 pb-0 md:px-6 md:pt-9">
      <div className="mx-auto max-w-6xl md:px-5">
        <div className="relative overflow-hidden rounded-t-[20px] bg-[#F0EADA]">
          <div
            className="pointer-events-none absolute inset-0 rounded-t-[20px] opacity-50"
            aria-hidden
          >
            <Image
              src="/images/newsletter-dots.png"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 1152px"
              priority={false}
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[855px] px-4 py-8 sm:px-6 sm:py-9 md:py-10 md:pb-10">
            <div
              className="mx-auto mb-3 h-1 w-[7%] min-w-10 bg-black sm:mb-4"
              aria-hidden
            />

            <h2 className="text-center font-(family-name:--font-poppins) text-[28px] font-black uppercase leading-[1.1] text-[#2D1B0F] sm:text-[35px] md:text-[50px]">
              WORK FASTER WITH US!
            </h2>

            <p className="mt-3 text-center font-(family-name:--font-roboto) text-sm leading-relaxed text-[#2C2C2C] sm:mt-4 sm:text-base">
              Accelerate your business growth with strategic systems,
              Professional growth, and structured execution frameworks. At
              EPoint Solution LLC, we help entrepreneurs and businesses scale
              efficiently with clarity, confidence, and measurable results.
            </p>

            {submitted ? (
              <p className="mt-6 text-center font-(family-name:--font-roboto) text-[#2D1B0F]">
                Thank you for subscribing!
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-6 w-full max-w-full sm:mt-8 sm:max-w-[85%]"
              >
                <div className="flex flex-col overflow-hidden rounded-[12px] sm:flex-row sm:items-stretch">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[52px] w-full min-w-0 flex-1 border-none bg-white px-4 text-base text-[#2C2C2C] outline-none placeholder:text-gray-400 sm:h-[58px] sm:rounded-l-[12px] sm:rounded-r-none sm:px-5 rounded-t-[12px] sm:rounded-t-none"
                  />
                  <button
                    type="submit"
                    className="h-[52px] w-full shrink-0 cursor-pointer border-none bg-[#4B240F] px-5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#3A1B0C] sm:h-[58px] sm:w-auto sm:rounded-l-none sm:rounded-r-[12px] rounded-b-[12px] sm:rounded-b-none"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
