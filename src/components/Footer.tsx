import Image from "next/image";
import Link from "next/link";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { LinkedInLink } from "@/components/LinkedInLink";
import { socialConfig } from "@/config/social";
import {
  contactInfo,
  footerPolicies,
  footerQuickLinks,
} from "@/data/content";

function FooterHeading({ children }: { children: string }) {
  return (
    <div>
      <h2 className="font-(family-name:--font-roboto) text-lg font-semibold text-white sm:text-xl">
        {children}
      </h2>
      <span className="mt-2 block h-px w-10 bg-white/90" aria-hidden />
    </div>
  );
}

function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
    >
      <span className="text-white/80" aria-hidden>
        →
      </span>
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1A1008] px-4 py-10 text-white sm:py-12 md:px-6 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10">
          {/* Columna 1: marca, descripción y bandera */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="relative mb-5 block h-12 w-48 overflow-hidden rounded-xl sm:h-14 sm:w-56"
            >
              <Image
                src="/images/logo.jpg"
                alt="Epoint Solution"
                fill
                className="rounded-xl object-contain object-left"
                sizes="(max-width: 640px) 192px, 224px"
                priority={false}
              />
            </Link>

            <p className="font-(family-name:--font-roboto) text-sm leading-relaxed text-gray-300">
              EPoint Solution LLC provides strategic professional growth marketing and professional consulting to help individuals and
              businesses scale with clarity and confidence.
            </p>

            <div className="mt-5 flex items-start gap-3">
              <div className="relative mt-0.5 h-7 w-10 shrink-0 overflow-hidden rounded-sm shadow-sm">
                <Image
                  src="/images/us-flag.png"
                  alt="United States"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <p className="font-(family-name:--font-roboto) text-sm leading-relaxed text-gray-400">
                We deliver professional marketing strategies, targeted advertising,
                and one-on-one mentorship to clients throughout the United States
                only.
              </p>
            </div>
          </div>

          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Policies</FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {footerPolicies.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <FooterHeading>Contact Info</FooterHeading>
            <div className="mt-4 space-y-3 font-(family-name:--font-roboto) text-sm text-gray-300">
              <p className="font-semibold text-white">
                Eberths Enterprises LLC DBA EPoint Solution LLC
              </p>

              <a
                href={contactInfo.phone.href}
                className="flex items-start gap-2.5 transition-colors hover:text-white"
              >
                <HiPhone
                  className="mt-0.5 size-4 shrink-0 text-white/90"
                  aria-hidden
                />
                <span>{contactInfo.phone.display}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <HiEnvelope
                  className="mt-0.5 size-4 shrink-0 text-white/90"
                  aria-hidden
                />
                <div className="flex flex-col gap-1">
                  {contactInfo.emails.map((email) => (
                    <a
                      key={email.display}
                      href={email.href}
                      className="transition-colors hover:text-white"
                    >
                      {email.display}
                    </a>
                  ))}
                </div>
              </div>

              <p className="flex items-start gap-2.5">
                <HiMapPin
                  className="mt-0.5 size-4 shrink-0 text-white/90"
                  aria-hidden
                />
                <span>5750 S Semoran Blvd, Orlando FL 32822</span>
              </p>

              {socialConfig.linkedInUrl ? (
                <p className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 flex size-4 shrink-0 items-center justify-center text-xs font-bold text-white/90"
                    aria-hidden
                  >
                    in
                  </span>
                  <LinkedInLink className="transition-colors hover:text-white" />
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-white/15 pt-6 text-center font-(family-name:--font-roboto) text-xs text-gray-400 sm:text-sm">
          Copyright© EPoint Solution LLC 2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
