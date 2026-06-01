"use client";

import { FormEvent, useState } from "react";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { LinkedInLink } from "@/components/LinkedInLink";
import { socialConfig } from "@/config/social";
import { contactFormCopy, contactInfo } from "@/data/content";

const inputClassName =
  "w-full rounded-xl border border-gray-200/90 bg-white px-4 py-3 font-(family-name:--font-roboto) text-sm text-[#333] placeholder:text-gray-400 outline-none transition-shadow focus:border-[#2D1B0F]/30 focus:ring-2 focus:ring-[#2D1B0F]/10 sm:text-base";

function ContactInfoPanel() {
  const items = [
    {
      icon: HiPhone,
      content: (
        <a
          href={contactInfo.phone.href}
          className="transition-opacity hover:opacity-90"
        >
          {contactInfo.phone.display}
        </a>
      ),
    },
    {
      icon: HiEnvelope,
      content: (
        <div className="flex flex-col gap-1">
          {contactInfo.emails.map((email) => (
            <a
              key={email.display}
              href={email.href}
              className="transition-opacity hover:opacity-90"
            >
              {email.display}
            </a>
          ))}
        </div>
      ),
    },
    {
      icon: HiMapPin,
      content: <span>{contactInfo.address}</span>,
    },
  ] as const;

  return (
    <div className="flex h-full w-full min-h-[380px] flex-col rounded-2xl bg-[#2D1B0F] px-7 py-10 text-white shadow-[0_4px_14px_rgba(45,27,15,0.20),0_16px_40px_rgba(45,27,15,0.32),0_32px_64px_rgba(45,27,15,0.38)] sm:min-h-[420px] sm:px-10 sm:py-12 lg:min-h-[580px] lg:rounded-3xl lg:px-12 lg:py-16 xl:min-h-[620px] xl:px-14">
      <h2 className="font-(family-name:--font-poppins) text-2xl font-bold sm:text-3xl">
        Contact Us
      </h2>

      <ul className="mt-10 flex flex-1 flex-col justify-center space-y-0 sm:mt-12 lg:mt-14">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index}>
              {index > 0 ? (
                <span
                  className="mb-7 block h-px bg-white/20 sm:mb-8 lg:mb-10"
                  aria-hidden
                />
              ) : null}
              <div className="flex items-start gap-3 font-(family-name:--font-roboto) text-sm leading-relaxed sm:text-base">
                <Icon
                  className="mt-0.5 size-5 shrink-0 text-white/90"
                  aria-hidden
                />
                {item.content}
              </div>
            </li>
          );
        })}
        {socialConfig.linkedInUrl ? (
          <li>
            <span
              className="mb-7 block h-px bg-white/20 sm:mb-8 lg:mb-10"
              aria-hidden
            />
            <div className="flex items-start gap-3 font-(family-name:--font-roboto) text-sm leading-relaxed sm:text-base">
              <span
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-xs font-bold text-white/90"
                aria-hidden
              >
                in
              </span>
              <LinkedInLink className="transition-opacity hover:opacity-90" />
            </div>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          <div className="overflow-visible rounded-3xl border border-[#2D1B0F]/6 bg-[#F9F7F2] shadow-[0_4px_12px_rgba(45,27,15,0.08),0_14px_36px_rgba(45,27,15,0.12),0_28px_56px_rgba(45,27,15,0.16),0_48px_96px_rgba(45,27,15,0.10)] sm:rounded-4xl">
            <div className="flex flex-col lg:flex-row lg:items-stretch">
              <div className="relative z-10 shrink-0 p-5 sm:p-6 md:p-8 lg:flex lg:w-[min(420px,46%)] lg:items-stretch lg:py-10 lg:pl-4 lg:pr-0 xl:w-[480px] xl:pl-2">
                <div className="h-full w-full lg:-ml-6 lg:-mr-2 lg:-translate-x-8 xl:-ml-10 xl:-translate-x-12">
                  <ContactInfoPanel />
                </div>
              </div>

              <div className="flex flex-1 flex-col px-5 pb-8 pt-2 sm:px-8 sm:pb-10 sm:pt-4 md:px-10 md:pb-12 lg:px-12 lg:py-12 lg:pl-4 xl:pl-8">
                <h2 className="font-(family-name:--font-poppins) text-2xl font-bold uppercase text-[#0D141A] sm:text-3xl md:text-4xl">
                  {contactFormCopy.heading}
                </h2>
                <p className="mt-3 max-w-xl font-(family-name:--font-roboto) text-sm leading-relaxed text-[#333] sm:mt-4 sm:text-base">
                  {contactFormCopy.description}
                </p>

                <form
                  className="mt-6 flex flex-1 flex-col sm:mt-8"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <label className="sr-only" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Name"
                    required
                    className={inputClassName}
                  />

                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="contact-email">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email"
                        required
                        className={inputClassName}
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="contact-phone">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Phone"
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  <label className="sr-only" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required
                    className={`${inputClassName} mt-4 min-h-[140px] resize-y sm:min-h-[160px]`}
                  />

                  {submitted ? (
                    <p
                      className="mt-4 font-(family-name:--font-roboto) text-sm text-[#2D1B0F] sm:text-base"
                      role="status"
                    >
                      Thank you for reaching out. Our team will get back to you
                      soon.
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    className="mt-6 w-full rounded-xl bg-[#2D1B0F] px-6 py-3.5 font-(family-name:--font-poppins) text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#3D2817] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D1B0F] sm:mt-8 sm:py-4 sm:text-base"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
