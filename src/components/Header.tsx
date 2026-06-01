"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { AnimateIn } from "@/components/AnimateIn";
import { CartTrigger } from "@/components/CartTrigger";
import { consultationCta, navLinks } from "@/data/content";

type HeroHeaderProps = {
  activeHref: (typeof navLinks)[number]["href"];
};

function Logo() {
  return (
    <Link href="/" className="relative block h-10 w-40 shrink-0 sm:h-11 sm:w-48 md:h-12 md:w-56">
      <Image
        src="/images/logo.jpg"
        alt="Epoint Solution"
        fill
        className="object-contain object-left"
        sizes="(max-width: 768px) 160px, 224px"
        priority
      />
    </Link>
  );
}

type NavLinksProps = {
  className?: string;
  linkClassName?: string;
  activeHref: HeroHeaderProps["activeHref"];
  onNavigate?: () => void;
  staggerFrom?: number;
  vertical?: boolean;
};

function NavLinks({
  className,
  linkClassName = "",
  activeHref,
  onNavigate,
  staggerFrom = 0,
  vertical = false,
}: NavLinksProps) {
  return (
    <ul
      className={`${vertical ? "flex flex-col gap-4" : ""} ${className ?? ""}`}
    >
      {navLinks.map((link, index) => {
        const isActive = link.href === activeHref;
        return (
          <li key={link.label}>
            {!vertical ? (
              <AnimateIn direction="down" delay={staggerFrom + index * 80}>
                <Link
                  href={link.href}
                  onClick={(event) => {
                    onNavigate?.();
                    event.currentTarget.blur();
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-(family-name:--font-roboto) font-medium text-[#432F23] transition-colors hover:text-[#2D1B0F] ${linkClassName} ${
                    isActive
                      ? "border-b border-[#432F23] pb-0.5"
                      : "border-b border-transparent pb-0.5 hover:border-[#432F23]/40"
                  }`}
                >
                  {link.label}
                </Link>
              </AnimateIn>
            ) : (
              <Link
                href={link.href}
                onClick={(event) => {
                  onNavigate?.();
                  event.currentTarget.blur();
                }}
                aria-current={isActive ? "page" : undefined}
                className={`block font-(family-name:--font-roboto) text-base font-medium text-[#432F23] ${linkClassName} ${
                  isActive ? "underline underline-offset-4" : ""
                }`}
              >
                {link.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function HeroHeader({ activeHref }: HeroHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [activeHref]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative">
      <div className="hidden items-center gap-6 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-8">
        <AnimateIn direction="right" delay={0}>
          <Logo />
        </AnimateIn>
        <nav className="flex justify-center" aria-label="Principal">
          <NavLinks
            className="flex items-center gap-8 xl:gap-10"
            linkClassName="text-sm"
            activeHref={activeHref}
            staggerFrom={120}
          />
        </nav>
        <AnimateIn direction="left" delay={200} className="flex items-center justify-end gap-5">
          <CartTrigger />
          <Link
            href={consultationCta.href}
            className="whitespace-nowrap rounded-lg bg-[#432F23] px-4 py-2.5 font-(family-name:--font-roboto) text-xs font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            {consultationCta.label}
          </Link>
        </AnimateIn>
      </div>

      <div className="lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <AnimateIn direction="right">
            <Logo />
          </AnimateIn>
          <AnimateIn direction="left" delay={100} className="flex items-center gap-2 sm:gap-3">
            <CartTrigger className="p-1.5" />
            <button
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-lg p-2 text-[#432F23] transition hover:bg-[#432F23]/10"
            >
              {menuOpen ? (
                <HiXMark className="h-7 w-7" aria-hidden />
              ) : (
                <HiBars3 className="h-7 w-7" aria-hidden />
              )}
            </button>
          </AnimateIn>
        </div>

        {menuOpen && (
          <>
            <button
              type="button"
              aria-label="Cerrar menú"
              className="fixed inset-0 z-40 bg-black/30"
              onClick={closeMenu}
            />
            <nav
              aria-label="Menú móvil"
              className="relative z-50 mt-4 rounded-2xl border border-[#432F23]/10 bg-white px-5 py-6 shadow-lg"
            >
              <NavLinks
                activeHref={activeHref}
                onNavigate={closeMenu}
                vertical
              />
              <Link
                href={consultationCta.href}
                onClick={closeMenu}
                className="mt-6 block w-full rounded-lg bg-[#432F23] px-4 py-3 text-center font-(family-name:--font-roboto) text-xs font-bold uppercase tracking-wide text-white"
              >
                {consultationCta.label}
              </Link>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
