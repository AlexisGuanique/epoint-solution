import Link from "next/link";
import type { PolicyPageData, PolicySlug } from "@/data/policies";
import { policyNav } from "@/data/policies";

type PolicyPageContentProps = {
  policy: PolicyPageData;
  activeSlug: PolicySlug;
};

export function PolicyPageContent({
  policy,
  activeSlug,
}: PolicyPageContentProps) {
  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_min(300px,32%)] lg:gap-12 xl:gap-16">
          <article className="min-w-0 font-(family-name:--font-roboto) text-sm leading-relaxed text-[#333] sm:text-base">
            <h2 className="font-(family-name:--font-poppins) text-xl font-bold uppercase text-[#0D141A] sm:text-2xl">
              {policy.pageHeading}
            </h2>

            <p className="mt-4 font-semibold text-[#0D141A]">{policy.companyLine}</p>
            <p className="mt-1 text-[#333]">
              Effective Date: {policy.effectiveDate}
            </p>

            <div className="mt-6 space-y-4">
              {policy.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {policy.sections.map((section) => (
              <div key={section.heading} className="mt-8">
                <h3 className="font-(family-name:--font-poppins) text-base font-bold text-[#0D141A] sm:text-lg">
                  {section.heading}
                </h3>
                <div className="mt-3 space-y-4">
                  {section.paragraphs?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  {section.subsections?.map((subsection, subIndex) => (
                    <div key={subIndex} className="space-y-3">
                      {subsection.subheading ? (
                        <h4 className="font-semibold text-[#0D141A]">
                          {subsection.subheading}
                        </h4>
                      ) : null}
                      {subsection.paragraphs?.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                      {subsection.listItems ? (
                        <ul className="list-disc space-y-1.5 pl-5">
                          {subsection.listItems.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </article>

          <aside
            className="lg:pt-1"
            aria-label="Policy navigation"
          >
            <nav className="flex flex-col gap-4 sm:gap-5">
              {policyNav.map((item) => {
                const isActive = item.slug === activeSlug;

                return (
                  <Link
                    key={item.slug}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-2xl px-5 py-4 text-center font-(family-name:--font-poppins) text-xs font-bold uppercase leading-snug tracking-wide transition-colors sm:px-6 sm:py-5 sm:text-sm ${
                      isActive
                        ? "bg-[#2D1B0F] text-white shadow-[0_8px_24px_rgba(45,27,15,0.28)]"
                        : "bg-[#2D1B0F] text-white hover:bg-[#3D2817]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      </div>
    </section>
  );
}
